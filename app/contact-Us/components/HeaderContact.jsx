'use client';

import { patcher } from '@/rtk/store';
import { actAiClearAllRes } from '../../../rtk/slices/aiChatSlice';

export default function HeaderContact() {
   const removeAllMessage = () => {
      patcher(actAiClearAllRes());
   };

   return (
      <section className="flex items-center justify-between p-4 bg-gray-400 text-white">
         

<div className="flex-1 text-center">
  <h5 className="text-xl font-bold">Contact Us</h5>
</div>
<div>
  <button
    onClick={removeAllMessage}
    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
  >
    Clear All
  </button>
</div>
      </section>


   );
}
