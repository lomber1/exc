import { configureStore } from '@reduxjs/toolkit';
import mailReducer from './slices/mailSlice';
import userTiming from './middlewares/userTiming';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userTiming),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
