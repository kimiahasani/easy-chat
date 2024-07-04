'use client';

import { store } from '@/rtk/store';
import { Provider } from 'react-redux';

export default function RtkProvider({ children }: { children: React.ReactNode }) {
   return <Provider store={store}>{children}</Provider>;
}
