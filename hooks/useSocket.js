import { actSocketConnected } from '@/rtk/slices/socketCheckSlice';
import { patcher } from '@/rtk/store';
import { socket } from '@/socket';
import { useEffect } from 'react';

const useSocketIo = () => {
   useEffect(() => {
      if (socket.connected) {
         onConnect();
      }

      function onConnect() {
         console.log('Socket Connected');
         patcher(actSocketConnected());
         // set a flag in redux to know socket.io is connected
      }

      function onDisconnect() {
         console.log('Socket Disconnected');
         patcher(actSocketOff());
         // set a flag in redux to know socket.io is disconnected
      }

      socket.on('connect', onConnect);
      socket.on('disconnect', onDisconnect);

      return () => {
         socket.off('connect', onConnect);
         socket.off('disconnect', onDisconnect);
      };
   }, []);
};
export default useSocketIo;
