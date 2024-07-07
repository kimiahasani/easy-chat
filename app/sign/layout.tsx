'use client';

import { RootState } from '@/types/rtkType';
import { useSelector } from 'react-redux';

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
         {children}
         {signFlag ? signup : login}
      </>
   );
}
