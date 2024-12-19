import { configureStore } from "@reduxjs/toolkit";
import newArrivalSlice from "./slices/NewArrivalSlice";
import clothDetailSlice from "./slices/ItemDetailSlice";

const store = configureStore({
    reducer: {
        newArrival: newArrivalSlice,
        clothDetail: clothDetailSlice
    },
});

export default store;