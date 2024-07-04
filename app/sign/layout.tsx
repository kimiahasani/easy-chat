'use client';

import Logo from '@/commonComponents/login/Logo';
import { RootState } from '@/types/rtkTypes';
import { Provider, useSelector } from 'react-redux';

export default function LayoutSign({
   children,
   signup,
   login,
}: {
   children: React.ReactNode;
   signup: React.ReactNode;
   login: React.ReactNode;
}) {
   const signFlag = useSelector((st: RootState) => st.sign.visitLogin);

   return (
      <>
         <Logo/>
         {children}
         {signFlag ? signup : login}
         {/* </Provider> */}
      </>
   );
}
