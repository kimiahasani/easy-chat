import { socket } from '@/socket';
import { useEffect } from 'react';

const useSocketIo = () => {
   useEffect(() => {
      if (socket.connected) {
         onConnect();
      }

      function onConnect() {
         console.log('Socket Connected');
      }

      function onDisconnect() {
         console.log('Socket Disconnected');
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
