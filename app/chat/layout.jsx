import React from "react";
// import { useSelector } from 'react-redux';

export default function LayoutChat({ children, chatcontent, chatlist }) {
  return (
    <main className=" min-h-screen flex items-center justify-center p-4">
      <section className="bg-white rounded-3xl shadow-2xl w-full max-w-6xl overflow-hidden">
        <section>{children}</section>
        <section className="flex flex-col md:flex-row h-[calc(100vh-2rem)] max-h-[900px]">
          <section className="w-full md:w-1/3 border-r border-gray-100">{chatlist}</section>
          <section className="w-full md:w-2/3 flex flex-col">{chatcontent}</section>
        </section>
      </section>
    </main>
  );
}
