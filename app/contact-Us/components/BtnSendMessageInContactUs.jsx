// 'use client';

// import {
//    actChatCreated,
//    actInputMessage,
//    actSetCurrentChatName_Id,
// } from '@/rtk/slices/currentChatSlice';
// import { actAddOneMessage } from '@/rtk/slices/messagesSlice';

// import { patcher } from '@/rtk/store';
// import { socket } from '@/socket';
// import { nowTime } from '@/utils/timeNow';

// import { useSelector } from 'react-redux';

// export default function BtnSendMessageInContactUs() {
   
//    const { username, _id: userId } = useSelector((st) => st.users);

//    const {
//       chatId,
//       chatName,
//       inputMessage: text,
//       chatCreated,
//    } = useSelector((st) => st.currentChat);

//    socket.on('your message', (arg) => {
//       patcher(actSetCurrentChatName_Id(arg));
//    });


//    const sendMsgFu = async () => {
//       if (!chatCreated) {
//          socket.emit('join pv room', { cId: chatId, cName: chatName, userId,});
//          patcher(actChatCreated(true));
//       }

//       const sentAt = nowTime(new Date());

//       const payMsg = {
//          // remove id and set "sentAt" as id for redux adp
//          // _id: Math.random().toString(32),
//          senderId: userId,
//          username,
//          chatId,
//          sentAt,
//          text,
//       };
//       try {
//          socket.emit('new message', { chatName, payMsg });
//          patcher(actAddOneMessage(payMsg));
//          patcher(actInputMessage(''));
//       } catch (err) {
//          console.log('Error to send message');
//       }
//    };


//    return (
//       <>
//          <button onClick={sendMsgFu}>Send</button>
//       </>
//    );
// }
