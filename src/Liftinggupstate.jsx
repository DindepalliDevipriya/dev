import React, { useState } from 'react';

export const LiftingUpState = () => {
    const [count, setCount] = useState(0); // Initial state set to 0

    const IncrementCount = () => {
        setCount(count + 1); // Increment the state
    };

    return (
        <div>
            <h1>Lifting Up State</h1>
            <ChildComponent count={count} IncrementCount={IncrementCount} />
            <SiblingComponent count={count} />
        </div>
    );
};

export function ChildComponent(props) {
    return (
        <div>
            <input type="text" value={props.count} readOnly />
            <button onClick={props.IncrementCount}>Increment</button>
            <h2>Child Component - {props.count}</h2>
        </div>
    );
}

export function SiblingComponent(props) {
    return (
        <div>
            <h1>Sibling Component</h1>
            <p>This is the sibling component: {props.count}</p>
        </div>
    );
}