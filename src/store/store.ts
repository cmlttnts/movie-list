import { configureStore } from "@reduxjs/toolkit";
import { imdbMoviesApi } from "../services/movie";

export const store = configureStore({
  reducer: {
    [imdbMoviesApi.reducerPath]: imdbMoviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(imdbMoviesApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
