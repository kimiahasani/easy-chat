'use client';
import { signFormClasses, signFormContainerClasses } from '@/styles/commonClasses';
import InputUsername from '../sign/components/InputUsername';
import InputEmail from '../sign/components/InputEmail';
import InputMessage from './components/InputMessage';
import HeaderContact from './components/HeaderContact';

export default function ContactUs() {
    

    return (
        <main className={signFormContainerClasses}>
      <header className="p-6">
        <HeaderContact />
      </header>
      <section className="flex flex-col items-center justify-center ">
      <InputUsername />
           <InputEmail />
          <InputMessage/>
          {/* <BtnSendMessageInContactUs/>    */}
      </section>
    </main>
    );
}


