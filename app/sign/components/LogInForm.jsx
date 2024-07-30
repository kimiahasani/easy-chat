import InputUsername from './InputUsername';
import InputPass from './InputPass';
import BtnGotoSignUp from './BtnGotoSignUp';
import BtnLogin from './BtnLogin';
import Or from '@/commonComponents/Or';
import { signFormClasses, signFormContainerClasses } from '@/styles/commonClasses';

export default function LogInForm() {
   return (
      <section className={signFormContainerClasses}>
         <section className={signFormClasses}>
            <InputUsername />
            <InputPass />
            <div>
               <BtnLogin />
               <Or />
               <BtnGotoSignUp />
            </div>
         </section>
      </section>
   );
}
