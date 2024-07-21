import { useEffect } from 'react';

const useEnterKeyToSendMsg = (sendMsgFu) => {
   // useEffect(() => {
   //    const enterKeyPress = (event) => {
   //       if (event.key === 'Enter') {
   //          event.preventDefault();
   //          sendMsgFu();
   //          console.log('Enter');
   //       }
   //    };
   //    document.addEventListener('keydown', enterKeyPress);
   //    return () => document.removeEventListener('keydown', enterKeyPress);
   // }, []);
};

export default useEnterKeyToSendMsg;
