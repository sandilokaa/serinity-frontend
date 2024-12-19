import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataCloth = createAsyncThunk('/data/fetchDataCloth', async() => {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/items`);
        return response.data.data;
    } catch (error) {
        console.log('API Error:', error.message);
        throw error;
    }
});

const newArrivalSlice = createSlice({
    name: 'newArrival',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataCloth.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDataCloth.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchDataCloth.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectNewArrivalProducts = (state) => state.newArrival.data;
export const selectNewArrivalProductsStatus = (state) => state.newArrival.status;

export default newArrivalSlice.reducer;