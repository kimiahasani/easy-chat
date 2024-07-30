'use client';

import { useSelector } from 'react-redux';
import { patcher } from '@/rtk/store';
import ShowFile from './ShowFile';
import { actCurrentFileUpdate } from '@/rtk/slices/currentChatSlice';

export default function ShowFileCurrent() {
   const { fileName, fileUrl, fileType } = useSelector((st) => st.currentChat.file);

   if (!fileUrl) return null;

   const cancelSendFile = () => {
      patcher(actCurrentFileUpdate({ fileName: '', fileUrl: '', fileType: '' }));
   };

   return (
      <section>
         <button onClick={cancelSendFile}>Cancel file</button>
         <ShowFile fileName={fileName} fileUrl={fileUrl} fileType={fileType} />
      </section>
   );
}
