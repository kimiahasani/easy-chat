"use client";

import { actInputMessage } from "@/rtk/slices/currentChatSlice";
import { patcher } from "@/rtk/store";
import { useSelector } from "react-redux";

export default function InputMessage() {
  const inputSenderContent = useSelector((st) => st.currentChat.inputMessage);

  const setInputValue = (e) => {
    patcher(actInputMessage(e.target.value));
  };

  return (
    <section className=" py-5 px-3 border-3 rounded-md bg-slate-50 flex items-center gap-2">
      <textarea
        id="message"
        value={inputSenderContent}
        onChange={setInputValue}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Your Message"
        rows="5"
      ></textarea>
    </section>
  );
}
