"use client"; // Ensure this is at the top


import { createSlice } from "@reduxjs/toolkit";



const initialState = {

   laptopData: {
      companyName: "",
      productLine: "",
      laptopCategory: "",
   }
}



const laptopSlice = createSlice({
   name: "laptop",
   initialState,
   reducers: {
      setLaptopData: (state, action) => {
         state.laptopData = action.payload;
      },

   }
})


export const { setDisplayData, setStorageData, setBrandData, setCpuData, setKeyboardData } = laptopSlice.actions;

export default laptopSlice.reducer;