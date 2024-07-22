import { actSocketConnected, actSocketOff } from '@/rtk/slices/socketCheckSlice';
import { patcher } from '@/rtk/store';
import { socket } from '@/socket';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const useSocketIo = () => {
   // set userId for show I am online
   const userId = useSelector((st) => st.users._id);
   const isReconnecting = useRef(false);

   useEffect(() => {
      function onConnect() {
         // Send my id to backend
         socket.emit('save me as online user', userId);
         // Up flag in redux to show I am connected
         patcher(actSocketConnected());
         // log status
         console.log(isReconnecting.current ? 'Socket Reconnected' : 'Socket Connected');
         isReconnecting.current = false;
      }

      function onDisconnect(reason) {
         // log status
         console.log('Socket Disconnected. Reason:', reason);
         // Down flag in redux to show I am disconnect
         patcher(actSocketOff());
         isReconnecting.current = true;
      }

      function onConnectError(error) {
         console.log('Connection Error:', error);
      }

      function onReconnectAttempt(attemptNumber) {
         console.log('Attempting to reconnect...', attemptNumber);
      }

      socket.on('connect', onConnect);
      socket.on('disconnect', onDisconnect);
      socket.on('connect_error', onConnectError);
      socket.on('reconnect_attempt', onReconnectAttempt);

      // If socket is already connected when component mounts
      if (socket.connected) {
         onConnect();
      }

      return () => {
         socket.off('connect', onConnect);
         socket.off('disconnect', onDisconnect);
         socket.off('connect_error', onConnectError);
         socket.off('reconnect_attempt', onReconnectAttempt);
      };
   }, [userId]); // If my id change, rerender it
};

export default useSocketIo;
