import { patcher, store } from '@/rtk/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof patcher;

// for sign slice:
export type SignType = {
   visitLogin: Boolean;
   inputUsername: String;
   inputEmail: String;
   inputConfirmEmail: String;
   inputPass: String;
   inputConfirmPass: String;
};

export type UserType = {
   username: String;
   email: String;
   pass: String;
   id: String;
   token: String;
   refToken: String;
};
