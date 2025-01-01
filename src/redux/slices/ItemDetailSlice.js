import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataClothDetail = createAsyncThunk('/data/fetchDataClothDetail', async(id) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/items/${id}`);
        return response.data.data;
    } catch (error) {
        console.log('API Error:', error.message);
        throw error;
    }
});

const clothDetailSlice = createSlice({
    name: 'clothDetail',
    initialState: {
        data: {},
        status: 'idle',
        error: null,
        currentCategory: null
    },
    reducers: {
        resetProductDetail: (state) => {
            state.data = {};
            state.status = 'idle';
        },
        setCurrentCategory: (state, action) => {
            state.data = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataClothDetail.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDataClothDetail.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.currentCategory = action.payload.category
            })
            .addCase(fetchDataClothDetail.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { resetProductDetail, setCurrentCategory } = clothDetailSlice.actions;
export const selectClothDetail = (state) => state.clothDetail.data;
export const selectClothDetailStatus = (state) => state.clothDetail.status;
export const selectCurrentCategory = (state) => state.clothDetail.currentCategory;

export default clothDetailSlice.reducer;