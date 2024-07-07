import { redirect } from 'next/navigation';
import Welcome from './components/Welcome';
import BtnContinue from './components/BtnContinue';
import '@/styles/globals.css';

export default function Home() {
   const isVisited = typeof window !== 'undefined' && localStorage.getItem('firstGageVisited');
   isVisited
      ? redirect('/sign')
      : typeof window !== 'undefined' && localStorage.setItem('firstGageVisited', 'visited');

   return (
      <main>
         <section className='grid h-100dvh justify-center align-middle'>
            <Welcome />
            <BtnContinue />
         </section>
      </main>
   );
}
