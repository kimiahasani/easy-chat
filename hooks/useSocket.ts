import { actSocketConnected, actSocketOff } from '@/rtk/slices/socketCheckSlice';
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
      }

      function onDisconnect() {
         console.log('Socket Disconnected');
         patcher(actSocketOff());
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
