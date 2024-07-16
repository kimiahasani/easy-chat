import { patcher, store } from '@/rtk/store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof patcher;

// for sign slice:
export type SignType = {
   visitLogin: boolean;
   inputUsername: string;
   inputEmail: string;
   inputConfirmEmail: string;
   inputPass: string;
   inputConfirmPass: string;
};

export type UserType = {
   name: string;
   username: string;
   email: string;
   pass: string;
   _id: string;
   token: string;
   refToken: string;
   profileImg: string;
   chats: string[];
};

export type OneMessageType = {
   _id: string;
   time: string;
   text: string;
   sender: string;
   visited: boolean;
};

export type PartnerInfoType = {
   _id: string;
   name: string;
   username: string;
   profileImg: string;
};

export type AMessageType = {
   text: string;
   sender: string;
   time: string;
};

export type SearchType = {
   people: PartnerInfoType[];
   inputVal: string;
};

export type MessageType = {
   textToSend: string;
   messageList: AMessageType[];
};

export type contentMessageType = {
   contentMessage: {
      roomName: string;
      creatorRoomId: string;
      messages: AMessageType[];
   }[];
};

export type RoomsType = {
   currentRoomName: string;
   participants: any[];
   messageIds: any[];
};

export type CurrentRoomType = {
   roomName: string;
   inputMessage: string;
   partnerInfo: PartnerInfoType;
};
