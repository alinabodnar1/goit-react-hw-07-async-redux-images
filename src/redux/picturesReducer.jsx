import { createSlice } from "@reduxjs/toolkit";
import { getPicturesThunk } from "./operations";

// const picturesSlice = createSlice({
//   name: "pictures",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [getPicturesThunk.pending](state) {
//       state.isLoading = true;
//     },
//     [getPicturesThunk.fulfilled](state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     [getPicturesThunk.rejected](state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

const picturesSlice = createSlice({
  name: "pictures",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
    extraReducers: (builder) => {
        builder
            .addCase(getPicturesThunk.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPicturesThunk.fulfilled, (state, {payload}) => {
                state.isLoading = false;
                state.error = null;
                state.items = payload;
            })
            .addCase(getPicturesThunk.rejected, (state, {payload}) => {
                state.isLoading = false;
                state.error = payload;
            }) 
  },
});
export const picturesReducer = picturesSlice.reducer;