'use client';

import { useSelector } from 'react-redux';

export default function LayoutSign({ children, signup, login }) {
   const signFlag = useSelector((st) => st.sign.visitLogin);

   return (
      <>
         {children}
         {signFlag ? signup : login}
      </>
   );
}
