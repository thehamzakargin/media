import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./silces/usersSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { albumsApi } from "./apis/albumsApi";
import { photosApi } from "./apis/photosApis";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [photosApi.reducerPath] : photosApi.reducer
    },
    middleware:  (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(photosApi.middleware)
        .concat(albumsApi.middleware);
    }
});

setupListeners(store.dispatch);

export * from './thunk/fetchUsers';
export * from './thunk/addUser';
export * from './thunk/removeUser';
export { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi';
export {useFetchPhotoQuery,
    useAddPhotoMutation,
    useRemovePhotoMutation} from './apis/photosApis';

// exporttan sonraki yildizin anlami gosterilen dosyanin icindenki exportu ayni sekilde bu dosyayada aktarmak anlamina geliyor sonrasinda bu dosyadan da export ediyoruz