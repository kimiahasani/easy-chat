// import { socket } from '@/socket';
// import { useEffect, useState } from 'react';

// const useSocketIo = () => {
//    const [isConnected, setIsConnected] = useState(false);
//    const [transport, setTransport] = useState('N/A');
//    const [message, setMessage] = useState<string[]>([]);

//    useEffect(() => {
//       if (socket.connected) {
//          onConnect();
//       }

//       function onConnect() {
//          setIsConnected(true);
//          setTransport(socket.io.engine.transport.name);

//          socket.io.engine.on('upgrade', (transport) => {
//             setTransport(transport.name);
//          });
//       }

//       function onDisconnect() {
//          setIsConnected(false);
//          setTransport('N/A');
//       }

//       function sendMessage(msg: string) {
//          setMessage((allMsg) => [...allMsg, msg]);
//       }

//       socket.on('connect', onConnect);
//       socket.on('disconnect', onDisconnect);
//       socket.on('send message', sendMessage);

//       return () => {
//          socket.off('connect', onConnect);
//          socket.off('disconnect', onDisconnect);
//          socket.off('send message', sendMessage);
//       };
//    }, []);

//    return { isConnected, transport, message, setMessage };
// };
// export default useSocketIo;
