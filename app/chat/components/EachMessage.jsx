import {
   actDelOneMessages,
   actUpdateOneMessages,
   selectAllMessagesCR,
} from '@/rtk/slices/messagesSlice';
import { actDelOneItemInList, actUpdateOneItemInList } from '@/rtk/slices/partnersListSlice';
import { patcher } from '@/rtk/store';
import { socket } from '@/socket';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ShowFileInMessage from './ShowFileInMessage';

export default function EachMessage({ item, oneToEnd }) {
   // console.log('item : ', item);
   const { text, sentAt, chatId, isPartnerRead, file, senderId } = item;
   const userId = useSelector((st) => st.users._id);
   const secRef = useRef();
   const { chatName, partnerInfo } = useSelector((st) => st.currentChat);
   const allMessage = useSelector(selectAllMessagesCR);

   const [editableText, setEditableText] = useState(text);
   const isMyMsg = userId === senderId;

   useEffect(() => {
      setEditableText(text);
   }, [text]);

   const handleTextChange = (e) => {
      if (isMyMsg) {
         setEditableText(e.target.textContent);
      }
   };

   const editMessage = () => {
      socket.emit('edit message', { sentAt, text: editableText });
   };

   // const delMessage = () => {
   //    socket.emit('delete message', { sentAt, chatId, chatName });
   // };

   !isMyMsg &&
      useEffect(() => {
         const _observer = new IntersectionObserver(
            (entries) => {
               if (entries[0].isIntersecting) {
                  socket.emit('seen message', { sentAt, chatId });
                  _observer.unobserve(secRef.current);
               }
            },
            { threshold: 0.1 }
         );

         if (secRef.current) {
            _observer.observe(secRef.current);
         }

         return () => {
            if (secRef.current) {
               _observer.unobserve(secRef.current);
            }
         };
      }, [secRef]);

   useEffect(() => {
      const handleSeenMessageNotification = ({ sentTime }) => {
         patcher(actUpdateOneMessages({ id: sentTime, changes: { isPartnerRead: true } }));
      };

      socket.on('seen message notification', handleSeenMessageNotification);

      return () => {
         socket.off('seen message notification', handleSeenMessageNotification);
      };
   }, [sentAt]);

   const delMessage = () => {
      socket.emit('delete message', { sentAt, chatId, chatName });
   };

   // const handleDelSuccessNotif = (sentTime) => {

   // };

   // useEffect(() => {

   //    return () => {
   //       socket.off('del success notification', handleDelSuccessNotif);
   //    };
   // }, [sentAt]);

   useEffect(() => {
      const handleEditSuccessNotif = ({ sentAt, text }) => {
         if (sentAt === item.sentAt) {
            patcher(actUpdateOneItemInList({ ...item, text }));
            setEditableText(text);
         }
      };

      socket.on('edit success notif', handleEditSuccessNotif);

      return () => {
         socket.off('edit success notif', handleEditSuccessNotif);
      };
   }, [item.sentAt]);

   return (
      <section ref={secRef}>
         <ShowFileInMessage file={file} />
         <p
            contentEditable={isMyMsg}
            onInput={handleTextChange}
            suppressContentEditableWarning={true}
         >
            {editableText}
         </p>
         <div className='flex justify-between'>
            <h6>{sentAt}</h6>
            {isMyMsg && (
               <>
                  <button onClick={editMessage}>edit</button>
                  <button onClick={delMessage}>delete</button>
               </>
            )}
         </div>
         {isMyMsg && (
            <div>{isPartnerRead ? <span>&#10004;&#10004;</span> : <span>&#10004;</span>}</div>
         )}
      </section>
   );
}
