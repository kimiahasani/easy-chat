import styTrans from './trans.module.css';

//
// btns:
const btnBase = styTrans.btnTrans + ' w-full my-2 py-2 rounded-lg border border-blue-600 ';

export const btnOutlineClasses = btnBase + ' text-black hover:bg-blue-800 hover:text-white ';

export const BtnFillClasses = btnBase + ' text-white bg-blue-600 hover:bg-blue-800';
export const BtnContinueStyle = 'inline-block text-white bg-blue-600 hover:bg-blue-800 my-2 py-2 px-4 rounded-lg border border-blue-600';
export const InputClassesForAI = 'rounded-lg w-1/2 p-2 border border-gray-300 rounded py-2 px-4';

//
// inputs:
export const LabelInputClasses = 'pl-3 block text-xs font-medium text-gray-700 pb-1';
export const inputClasses = "w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"

//
// sign container :
export const signFormContainerClasses = 'bg-white rounded-br-3xl rounded-bl-3xl';
export const signFormClasses = 'space-y-7 px-3 md:px-10 pb-20 pt-7 md:w-[640px] mx-auto';
