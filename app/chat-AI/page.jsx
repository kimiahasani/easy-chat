"use client";

import InputAi from "./components/InputAi";
import BtnSentContextAi from "./components/BtnSentContextAi";
import BoxAiMessages from "./components/BoxAiMessages";
import HeaderAi from "./components/HeaderAi";
import useSocketIo from "@/hooks/useSocket";
import { useSelector } from "react-redux";
import { signFormContainerClasses } from "@/styles/commonClasses";

export default function ChatAiPage() {
  useSocketIo();

  const isConnected = useSelector((st) => st.socketConnection.isConnected);
  if (!isConnected) return <h3>Please wait to connect...</h3>;

  return (
    <main className={signFormContainerClasses}>
      <header className="p-6">
        <HeaderAi />
      </header>
      <section className="flex flex-col items-center justify-center ">
        <BoxAiMessages />
        <InputAi />
        <BtnSentContextAi />
      </section>
    </main>
  );
}
