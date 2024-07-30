"use client";

import { signFormContainerClasses } from "@/styles/commonClasses";
import HeaderProfile from './components/HeaderProfile';
import { useSelector } from "react-redux";
import Image from "next/image";
export default function Profile() {
  const pInfo = useSelector((st) => st.currentChat.partnerInfo);

//   if (!pInfo?._id) return null; // 

  const imgProfile = () =>
    pInfo.profileImg ? (
      <Image
        alt='user profile'
        priority
        sizes='100%'
        width={0}
        height={0}
        className='rounded-full w-[65px] h-[65px]'
        src={pInfo.profileImg}
      />
    ) : (
      <div className='border-4 rounded-full w-[65px] h-[65px] flex items-center justify-center text-3xl capitalize'>
        {pInfo.username.substring(0, 1)}
      </div>
    );

  return (
    <main className={signFormContainerClasses}>
      <header className="p-6">
        <HeaderProfile />
      </header>
     
      <section className='gap-4 grid grid-cols-2 items-center py-2 px-4 bg-slate-100 hover:bg-slate-300 '>
        {imgProfile()}
        <h4>{pInfo.username}</h4>
      </section>
    </main>
  );
}
