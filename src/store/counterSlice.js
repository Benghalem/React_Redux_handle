import { createSlice } from '@reduxjs/toolkit'
import { logOut } from './authSlice';

const iniState = { value: 0};

// creat slice for counter with reduce toolkit
const counterSlice = createSlice({
    name: "counter",
    initialState: iniState,
    reducers: {
        increase: (state, action) => {
            state.value += action.payload ; // state.value = value + 1
        },
        decrease: (state, action) => {
            if (state.value < 0 ) {
            state.value = -1 ;  // state.value = value - 1
            } else state.value -= action.payload ; 
        },
    },
    // listen to logOut event
    extraReducers: {
        [logOut]: (state, action) => {
            state.value=0;
            console.log(action)
            
        }
    }
    
});


export default counterSlice.reducer;
export const {increase, decrease} = counterSlice.actions;


