import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPictures } from "api/getPictures";

export const getPicturesThunk = createAsyncThunk(
    "pictures/getPictures",
    async () => {
        return await getPictures();
    }
);
            
     
        
