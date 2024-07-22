import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const adpPartners = createEntityAdapter({
   // Assume IDs are stored in a field other than `book.id`
   selectId: (oneItem) => oneItem._id,
   // Keep the 'all IDs' array sorted based on book titles
   sortComparer: (a, b) => b.sentAt.localeCompare(a.sentAt),
});

const initialState = adpPartners.getInitialState({
   // We can add extra items to initialState such as loading
   // loading: 'idle',
});
// You can create memo selector for adp by sniptet: adpSelectorRTK

export const adpPartnersSlice = createSlice({
   name: 'adpPartnersSlice',
   initialState,
   reducers: {
      actAddManyPartnersToList: adpPartners.addMany,
      actUpdateOneItemInList: adpPartners.updateOne,
      actUpsertOneItemInList: adpPartners.upsertOne,
      actDelOneItemInList: adpPartners.removeOne,
      // actAddOneItem: adpPartners.addOne,
      //	 in component: patcher(actAddOneItem(myPayload))
      // ...
   },
   // Add extraReducers here ...
});

// export actions
export const {
   /* insert all action here */
   actDelOneItemInList,
   actUpsertOneItemInList,
   actAddManyPartnersToList,
   actUpdateOneItemInList,
} = adpPartnersSlice.actions;

// export selectors. proper all selector here
export const {
   selectAll: selectAllPartnerList,
   // selectAll: selectAllMessages
   //	 in component: const allAdp = useSelector(selectAllMessages)
   // ...
} = adpPartners.getSelectors((state) => state.partnersList);
