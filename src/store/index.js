import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./silces/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer
    },
    middleware:  (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(albumsApi.middleware);
    }
});

setupListeners(store.dispatch);

export * from './thunk/fetchUsers';
export * from './thunk/addUser';
export * from './thunk/removeUser';
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi';

// exporttan sonraki yildizin anlami gosterilen dosyanin icindenki exportu ayni sekilde bu dosyayada aktarmak anlamina geliyor sonrasinda bu dosyadan da export ediyoruz