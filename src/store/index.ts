import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import categorySlice from "./category";
import cartSlice from "./cart";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        categories: categorySlice.reducer,
        cart: cartSlice.reducer,
    },
});

export default store;
