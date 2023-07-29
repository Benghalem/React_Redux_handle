import { configureStore } from '@reduxjs/toolkit'
import counterReduce from './counterSlice'
import authSlice from './authSlice';

export const store = configureStore({
    reducer: {counter: counterReduce, auther: authSlice}
});

/* export default store; */