// import React, { useState } from 'react';

// export const Statedata = () => {
//   const [count, setCount] = useState(-1); // Correct state variable name

//   const clickme = () => {
//     setCount(count + 1); // Update the state
//   };
//   const clickme1 = () => {
//     setCount(count - 1); // Update the state
//   };

//   return (
//     <div>
//       <h1>State</h1>
//       <h2>{count}</h2> {/* Use 'count' instead of 'value' */}
//       <button onClick={clickme}>Increment</button>
//       <button onClick={clickme1}>Decrement</button>
//       <ChildComponent data={count+1} />
//     </div>
//   );

// };

// export function ChildComponent(props) {
//   console.log("child component");
//   return (
//     <div>
//       <h1>child component -{props.data}</h1>
//     </div>
//   )
// }

import React, { useState } from 'react';

export const Statedata = () => {
  const [count, setCount] = useState(0); // Initial state set to 0

  const clickme = () => {
    setCount(count + 1); // Increment the state
  };

  const clickme1 = () => {
    setCount(count - 1); // Decrement the state
  };

  return (
    <div>
      <h1>State</h1>
      <h2>{count}</h2> {/* Display the current count */}
      <button onClick={clickme}>Increment</button>
      <button onClick={clickme1}>Decrement</button>
      <ChildComponent data={count} /> {/*//Pass count + 1 to ChildComponent count+1 */}
    </div>
  );
};

export function ChildComponent(props) {
  console.log("ChildComponent rendered with data:", props.data);
  return (
    <div>
      <h1>Child Component - {props.data}</h1>
    </div>
  );
}