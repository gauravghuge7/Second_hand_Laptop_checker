"use client"; // Ensure this is at the top


const { createSlice } = require("@reduxjs/toolkit")



const initialState = {

   laptopData: {

      brand: {
         name: "",
         year: "",
         model: "",
         type: "",
         storage: "",
         ram: "",
         screen: "",
         resolution: "",
         dpi: "",
         weight: "",
         battery: "",
         power: ""      
      },

      storage: {
         ram: "",
         ssd: "",
         hdd: "",
         size: "",
         type: "",
         speed: ""

      },

      display: {
         brand: "",
         model: "",
         resolution: "",
         dpi: "",
         size: "",
         weight: "",
         color: "",
         brightness: "",
         contrast: "",
         gamma: "",

      },

      cpu: {

         brand: "",
         model: "",
         speed: "",
         cores: "",
         threads: "",
         frequency: "",
         cache: "",
         usage: "",
         temperature: "",
         power: ""


      },

      keyboard: {
         brand: "",
         model: "",
         layout: "",
         speed: "",
         keys: "",
      },

      os: {
         name: "",
         version: "",
         arch: "",
         platform: "",      
      },

      battery: {
         brand: "",
         model: "",
         capacity: "",
         technology: "",
         charging: "",
         power: "",      
      }





   }
}



const laptopSlice = createSlice({
   name: "laptop",
   initialState,
   reducers: {

      setDisplayData: (state, action) => {
         state.laptopData.display = action.payload
      },
      setStorageData: (state, action) => {
         state.laptopData.storage = action.payload
      },
      setBrandData: (state, action) => {
         state.laptopData.brand = action.payload
      },
      setCpuData: (state, action) => {
         state.laptopData.cpu = action.payload
      },
      setKeyboardData: (state, action) => {
         state.laptopData.keyboard = action.payload
      }  
   }
})


export const { setDisplayData, setStorageData, setBrandData, setCpuData, setKeyboardData } = laptopSlice.actions;

export default laptopSlice.reducer;