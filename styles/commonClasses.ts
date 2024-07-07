import styTrans from './trans.module.css';

//
// btns:
const btnStyBaseClasses =
   styTrans.btnTrans + ' w-full my-2 py-2 rounded-lg border border-blue-600 ';

export const btnOutlineClasses =
   btnStyBaseClasses + ' text-black hover:bg-blue-800 hover:text-white ';

export const BtnFillClasses = btnStyBaseClasses + ' text-white bg-blue-600 hover:bg-blue-800';

//
// inputs:
export const LabelInputClasses = 'pl-3 block text-xs font-medium text-gray-700 pb-1';
export const inputClasses = ' rounded-lg w-full p-2 border border-gray-300 rounded py-2 px-4';

//
// sign container :
export const signFormContainerClasses = 'bg-white rounded-br-3xl rounded-bl-3xl';
export const signFormClasses = 'space-y-7 px-3 md:px-10 pb-20 pt-7 md:w-[640px] mx-auto';
