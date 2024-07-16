import { actInputMessage, actSetCurrentRoom } from '@/rtk/slices/currentRoomSlice';
import { actAddOneMsg } from '@/rtk/slices/messagesSlice';
import { patcher } from '@/rtk/store';
import { socket } from '@/socket';
import { OneMessageType, RootState } from '@/types/rtkType';
import { nowTime } from '@/utils/timeNow';
import { useSelector } from 'react-redux';

export default function BtnSendMessage() {
   const userId = useSelector((st: RootState) => st.users._id);
   const partnerId = useSelector((st: RootState) => st.currentRoom.partnerInfo._id);

   const currentRoomName = useSelector((st: RootState) => st.currentRoom.roomName);

   const msgText = useSelector((st: RootState) => st.currentRoom.inputMessage);

   const sendMsgFu = () => {
      let roomName: string;
      // if room not exist create room in server
      if (!currentRoomName) {
         socket.emit('join pv room', { userId, partnerId });
         patcher(actSetCurrentRoom(userId + partnerId));
         roomName = userId + partnerId;
      } else {
         roomName = currentRoomName;
      }

      const payMsg = {
         _id: Math.random().toString(32),
         sender: userId,
         text: msgText,
         time: nowTime(new Date()),
         visited: false,
      } as OneMessageType;

      try {
         msgText && socket.emit('new message', { roomName, payMsg });
         patcher(actAddOneMsg(payMsg));
         patcher(actInputMessage(''));
      } catch (err) {
         console.log('Error to send message');
      }
   };
   return (
      <>
         <button onClick={sendMsgFu}>Send</button>
      </>
   );
}
