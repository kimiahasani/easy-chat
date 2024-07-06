
import Logo from '@/commonComponents/login/Logo';
import Menu from './Menu';

export default function MainHeader() {
   return (
      <header className='py-2 flex justify-between border-b-2 border-salt-300'>
         <Logo />
         <Menu />
      </header>
   );
}
