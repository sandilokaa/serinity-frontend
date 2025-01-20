import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk('/data/fetchData', async({name, category}) => {
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/items?` + (category? `category=${category}` : '') + (name ? `&name=${name}` : ''));        
        return response.data.data;
    } catch (error) {
        console.log('API Error:', error.message);
        throw error;
    }
});

const searchItemSlice = createSlice({
    name: 'searchItem',
    initialState: {
        data: [],
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const selectSearchItemProducts = (state) => state.searchItem.data;
export const selectSearchItemProductsStatus = (state) => state.searchItem.status;

export default searchItemSlice.reducer;