"use client"; // Ensure this is at the top

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import laptopReducer from '../Reducers/laptopReducer';



const reducer = combineReducers({
   laptopReducer
})


const store = configureStore({
   reducer
})

export default store;