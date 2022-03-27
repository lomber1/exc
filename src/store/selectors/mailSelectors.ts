import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectAllMails = (state: RootState): Mail[] => Object.values(state.mail.mails.byId);

export const selectAllMailsCount = createSelector(
  selectAllMails,
  (mails) => mails.length,
);

// export const selectAllMailsIds = (state: RootState): Mail['id'][] => state.mail.mails.allIds;

export const selectMailsIds = (page: number, perPage: number = 10) => (state: RootState): Mail['id'][] => state.mail.mails.allIds.slice((page - 1) * perPage, page * perPage);

export const selectMail = (id: Mail['id']) => (state: RootState): Mail => state.mail.mails.byId[id];

export const selectReadMails = createSelector(
  selectAllMails,
  (mails) => mails.filter((m) => !m.isUnread),
);

export const selectReadMailsCount = createSelector(
  selectReadMails,
  (mails) => mails.length,
);
