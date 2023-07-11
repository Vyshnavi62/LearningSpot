import loaderSlice from "./loaderSlice";
import usersSlice from "./usersSlice";
import { configureStore } from "@reduxjs/toolkit";
const store=  configureStore({
    reducer:{
        users:usersSlice,
        loader:loaderSlice
    },
});

export default store;