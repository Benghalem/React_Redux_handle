import React, {useCallback, useEffect} from 'react';
//import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../store/counterSlice'
import { logIn, logOut } from '../store/authSlice';


export  const Home = () => {
    // listen to reducer 
    const globalState = useSelector((state) => state )
    const dispatch = useDispatch();

    const HandelCounterValue = ( ) => {
        if (globalState.counter.value < 0 ) {
            return 'no value selected';
        }
        return globalState.counter.value;
    } 

     // handel despatch counter
    const counterHandler = useCallback((type, value ) => {
        if (type==='increase'){
            dispatch(increase(value));
        } else {
            dispatch(decrease(value));
        }
    }, [dispatch])

    useEffect(()=> counterHandler('increase', 5), [counterHandler])

    // dispatch toggled
    const loginHandler = (statuse) => {
        if (statuse) {
            dispatch(logOut(4))
        } else {
            dispatch(logIn())
        }  

        return statuse;
    };

    const isLoggedIn = () => {
        return globalState.auther.isLoggedIn;
    }

/*     const dispatch = useDispatch();
    const  globalState = useSelector((state) => state )

    const counterOperation =useCallback((type, value) => {
        dispatch ({ type, value})

    }, [dispatch]); 
    
    useEffect (() => counterOperation('increase', 10), [counterOperation]);

    const increase = () => {
        const action = { type: 'increase', value: 1};
        dispatch(action);

    };
    const decrease = () => {
        const action = { type: 'decrease', value:'1'};
        dispatch(action);
        
    };
    const showCounters = () => {
        const action = { type: 'showCounters'}
        dispatch(action);
    }
 */
    return (
        <div className='App'>
            <h1>Hello Redux Basic</h1>
            {isLoggedIn() && 
                <>
                    <div className='counter'>Counter: {HandelCounterValue()}</div>
                    <div>
                        <button className='btn1 btn' onClick={()=> counterHandler('increase', 1)}>increase +</button>
                        <button className='btn1 btn' onClick={()=> counterHandler('decresse', 1)}>decrease -</button>
                    </div>                
                </>
            }
                <div>
                    <button className='btn1 btn' onClick={()=> loginHandler(isLoggedIn())}> {isLoggedIn()? 'Logout': 'Login'}</button>
                </div>
        </div>
    )
}