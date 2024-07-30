import Image from 'next/image';
import Link from 'next/link';

export default function ChatbotIcon() {
   return (
      <Link href='./chat-AI'>
         <section>
            <Image
               alt='chatbot Icon'
               src='/images/chatbot.png'
               width={0}
               height={0}
               sizes='100%'
               style={{ width: '50%', height: 'auto' }}
               priority
            />
         </section>
      </Link>
   );
}
