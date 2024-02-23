import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./silces/usersSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});

export * from './thunk/fetchUsers';
export * from './thunk/addUser';
export * from './thunk/removeUser';

// exporttan sonraki yildizin anlami gosterilen dosyanin icindenki exportu ayni sekilde bu dosyayada aktarmak anlamina geliyor sonrasinda bu dosyadan da export ediyoruz