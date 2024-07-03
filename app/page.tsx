import BtnContinue from './components/BtnContinue';
import { redirect } from 'next/navigation';
import Welcome from './components/Welcome';
import Header from './components/header';

export default function Home() {
    const isVisited = typeof window !== 'undefined' && localStorage.getItem('firstGageVisited');
    if (isVisited) {
        redirect('/sign');
    } else if (typeof window !== 'undefined') {
        localStorage.setItem('firstGageVisited', 'visited');
    }
    return (
        <main>
            <section className='flex flex-col items-center justify-start h-screen'>
                <Welcome />
                <section className='text-blue-500 hover:text-green-500'> 
                    <strong><BtnContinue /></strong>
                    <Header/>
                </section>
            </section>
        </main>
    );
}