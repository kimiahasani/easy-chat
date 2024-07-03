import { patcher, store } from '@/rtk/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof patcher;

// for sign slice:
export type SignType = {
   visitLogin: Boolean;
};
