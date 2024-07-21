import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const adpChatMessages = createEntityAdapter({
   // Assume IDs are stored in a field other than `book.id`
   selectId: (oneItem) => oneItem._id,
   // Keep the 'all IDs' array sorted based on book titles
   sortComparer: (a, b) => a.sentAt.localeCompare(b.sentAt),
});

const initialState = adpChatMessages.getInitialState({
   // We can add extra items to initialState such as loading
   // loading: 'idle',
});
// You can create memo selector for adp by sniptet: adpSelectorRTK

export const adpChatMessagesSlice = createSlice({
   name: 'adpChatMessagesSlice',
   initialState,
   reducers: {
      actAddOneMessage: adpChatMessages.addOne,
      actAddManyMessage: adpChatMessages.addMany,
      actDelAllMessages: adpChatMessages.removeAll,
      //	 in component: patcher(actAddOneItem(myPayload))
      // ...
   },
   // Add extraReducers here ...
});

// export actions
export const {
   /* insert all action here */
   actDelAllMessages,
   actAddOneMessage,
   actAddManyMessage,
} = adpChatMessagesSlice.actions;

// export selectors. proper all selector here
export const {
   selectAll: selectAllMessagesCR,
   // 	 in component: const allAdp = useSelector(selectAllMessagesCR)
   // ...
} = adpChatMessages.getSelectors((state) => state.chatMessages);
