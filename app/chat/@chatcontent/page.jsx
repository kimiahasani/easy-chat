"use client";

import { useSelector } from "react-redux";
import InputSender from "../components/InputSender";
import BtnSendMessage from "../components/BtnSendMessage";
import PartnerHeader from "../components/PartnerHeader";
import ShowFileCurrent from "../components/ShowFileCurrent";
import BoxMsg from "../components/BoxMsg";

export default function PageChatContent() {
  const isGettingMessage = useSelector((st) => st.currentChat.loading);

  const isSocketConnected = useSelector((st) => st.socketConnection.isConnected);
  if (!isSocketConnected) return null;

  return (
    <section className="flex flex-col  bg-gray-50 h-[600px] overflow-y-auto p-4">
      <PartnerHeader />
      <section className="flex-grow overflow-y-auto p-4">
        <BoxMsg />
        <ShowFileCurrent />
      </section>
      <section className="flex items-center justify-center gap-4 p-4">
        <InputSender />
        {!isGettingMessage && <BtnSendMessage />}
      </section>
    </section>
  );
}
