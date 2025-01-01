import { configureStore } from "@reduxjs/toolkit";
import newArrivalSlice from "./slices/NewArrivalSlice";
import clothDetailSlice from "./slices/ItemDetailSlice";
import searchItemSlice from "./slices/SearchItemSlice"


const store = configureStore({
    reducer: {
        newArrival: newArrivalSlice,
        clothDetail: clothDetailSlice,
        searchItem: searchItemSlice
    },
});

export default store;