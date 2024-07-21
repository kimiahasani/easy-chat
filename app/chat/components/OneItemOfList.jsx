import { actCurrentChatUpdate } from '@/rtk/slices/currentChatSlice';
import { actDelAllMessages } from '@/rtk/slices/messagesSlice';
import { actSearchLeaved } from '@/rtk/slices/searchSlice';
import { patcher } from '@/rtk/store';
import { socket } from '@/socket';
import { useSelector } from 'react-redux';

export default function OneItemOfList({ item }) {
   const userId = useSelector((st) => st.users._id);

   const setPartnerToChat = (item) => {
      // console.log('in list : ', item);

      // update currentChat data
      patcher(actCurrentChatUpdate(item));
      // remove search res
      patcher(actSearchLeaved());
      // remove Messages in boxMessage
      patcher(actDelAllMessages());

      // search in DB to find current chat message
      const partnerId = item._id;
      socket.emit('current message history', { userId, partnerId });
   };

   return (
      <section onClick={() => setPartnerToChat(item)} className='p-4 bg-slate-300 my-2 '>
         <h5>{item.username}</h5>
         <p>{item.text.substring(0, 30)}...</p>
      </section>
   );
}
