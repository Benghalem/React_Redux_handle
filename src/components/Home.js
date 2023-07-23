import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export  const Home = () => {
    const dispatch = useDispatch();
    const  globalState = useSelector((state) => state )


    const counterOperation =useCallback((type, value) => {
        dispatch ({ type, value})

    }, [dispatch]); 
    useEffect (() => counterOperation('increase', 10), [counterOperation]);

    const HandelCounterValue = (value ) => {
        if (value < 0 ) {
            return 'no value selected';
        }
        return value;
    }

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

    return (
        <div className='App'>
            <h1>Hello Redux Basic</h1>
            {globalState.showCounters && 
            <>
                <div className='counter'>Counter: {HandelCounterValue(globalState.value)}</div>
                <div>
                <button className='btn1 btn' onClick={increase}>increase +</button>
                <button className='btn1 btn' onClick={decrease}>decrease -</button>
                </div>                
            </>
            }
                <div>
                    <button className='btn1 btn' onClick={showCounters}>Hide/Show Counter Number</button>
                </div>
        </div>
    )
}