import { createStore } from 'redux';


const iniState = { value: 1, showCounters: false };
const counterReducer = (state = iniState, action) => {


        if (action.type === 'increase') {
            return{...state, value: state.value + action.value}
        }

        if (action.type === 'decrease') {

            if (state.value >= 0){
                return{...state,value: state.value - action.value}
            }
            else return {...state, value: state.value = -1}
           
        }

        if (action.type === 'showCounters') {
            return {...state, showCounters: !state.showCounters}
        }


    return state;
}


export const store = createStore(counterReducer);

