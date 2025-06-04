import React, { useReducer } from 'react';

export const Statedata = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        if (action.type === 'increment') 
            return state + 1;
        else if (action.type === 'decrement')
            return state - 1;
        else
            return state;
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>State Data</h2>
            <p>Value: {state}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
};