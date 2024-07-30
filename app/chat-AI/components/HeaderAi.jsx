'use client';

import { patcher } from '@/rtk/store';
import { actAiClearAllRes } from '../../../rtk/slices/aiChatSlice';
import ChatbotIcon from './ChatbotIcon';

export default function HeaderAi() {
   const removeAllChat = () => {
      patcher(actAiClearAllRes());
   };

   return (
      <section className="flex items-center justify-between p-4 bg-gray-400 text-white">
         <div className="flex items-center">
  <ChatbotIcon className="text-3xl" />
</div>

<div className="flex-1 text-center">
  <h5 className="text-xl font-bold">Welcome Easy Chat AI</h5>
</div>
<div>
  <button
    onClick={removeAllChat}
    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
  >
    Clear All
  </button>
</div>
      </section>


   );
}
