import InputUsername from './InputUsername';
import InputPass from './InputPass';
import BtnGotoSignUp from './BtnGotoSignUp';
import BtnSignGoogle from './BtnSignGoogle';
import BtnLogin from './BtnLogin';
import Or from '@/commonComponents/Or';
import { signFormClasses, signFormContainerClasses } from '@/styles/commonClasses';
import LoginWelcome from './LoginWelcome';


export default function LogInForm() {
   return (
      <section className={signFormContainerClasses}>
        <LoginWelcome/>   
         <section className={signFormClasses}>
            <InputUsername />
            <InputPass />
            <div>
               <BtnLogin />
               <Or />
               <BtnGotoSignUp />
               <BtnSignGoogle />
            </div>
         </section>
      </section>
   );
}
