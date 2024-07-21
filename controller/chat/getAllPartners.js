import { ChatM } from '../../models/schemas/chatSchema.js';
import { MessageM } from '../../models/schemas/messageSchema.js';
import { UserM } from '../../models/schemas/userSchema.js';

export const getAllPartners = async ({ userId }) => {
   const resList = [];
   console.log('getAllPartners');

   try {
      const getChats = await findChats(userId);

      for (let i = 0; i < getChats.length; i++) {
         const { username, name, profileImg, _id } = await partnerData(getChats[i], userId);
         const { sentAt, text } = await getLastMessage(getChats[i]);
         resList.push({
            username,
            name,
            profileImg,
            sentAt,
            text,
            _id: _id.toString(32),
         });
      }
   } catch (err) {
      console.log('error to get list: ', err);
   }

   return resList;
};

async function findChats(userId) {
   const findAllChats = await ChatM.find({ participants: { $in: [userId] } });
   // console.log('findAllChats.length :: ', findAllChats.length);
   if (!findAllChats || findAllChats.length === 0) {
      throw new Error('you havent any chat');
   } else {
      return findAllChats;
   }
}

async function partnerData(el, userId) {
   const normalArr = el.participants.map((item) => item.toString(32));
   // console.log('normalArr : ', normalArr);
   const myIndex = normalArr.indexOf(userId);
   // console.log('myIndex : ', myIndex)
   const partnerId = myIndex === 1 ? normalArr[0] : normalArr[1];

   try {
      const partnerInfo = await UserM.findById(partnerId).select('username name profileImg').lean();

      return partnerInfo;
   } catch (err) {
      throw new Error('Error to get partner info');
   }
}

async function getLastMessage(el) {
   try {
      const lastMessageId = el.messagesIds.at(-1);
      const findMessage = await MessageM.findById(lastMessageId);
      return findMessage;
   } catch (err) {
      throw new Error('fail to get last message');
   }
}
