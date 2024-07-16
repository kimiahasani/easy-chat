import { OneMessageType, RootState } from '@/types/rtkType';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const adpChatMessageSlice = createEntityAdapter({
   // Assume IDs are stored in a field other than `book.id`
   selectId: (oneItem: OneMessageType) => oneItem._id,
   // Keep the 'all IDs' array sorted based on book titles
   sortComparer: (a, b) => a.time.localeCompare(b.time),
});

const initialState = adpChatMessageSlice.getInitialState({
   // We can add extra items to initialState such as loading
   // loading: 'idle',
});
// You can create memo selector for adp by sniptet: adpSelectorRTK

export const adpChatMessageSliceSlice = createSlice({
   name: 'adpChatMessageSliceSlice',
   initialState,
   reducers: {
      actAddOneMsg: adpChatMessageSlice.addOne,
      //	 in component: patcher(actAddOneItem(myPayload))
      // ...
   },
   // Add extraReducers here ...
});

// export actions
export const {
   /* insert all action here */
   actAddOneMsg,
} = adpChatMessageSliceSlice.actions;

// export selectors. proper all selector here
export const {
   selectAll: selectAllMessagesCR,
   // 	 in component: const allAdp = useSelector(selectAllMessagesCR)
   // ...
} = adpChatMessageSlice.getSelectors((state: RootState) => state.chatMessages);
