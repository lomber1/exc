import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateMailsHash } from '../../utils/data';

export interface MailState {
  mails: MailsHash;
}

const initialState: MailState = {
  mails: generateMailsHash(1e4),
};

export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  reducers: {
    switchRead: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const mail = state.mails.byId[id];

      if (mail) {
        mail.isUnread = !mail.isUnread;
      }
    },
  },
});

export default mailSlice.reducer;
