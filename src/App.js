// import logo from './logo.svg';
// import './App.css';
// import { User } from './User.js';

// function App() {
//   const name = "React";
//   const age = 30;
//   let x = 10;
//   let y = 20;

//   function subtract(x, y) {
//     return x - y;
//   }

//   function click() {
//     let arr1 = [10, 20, 30];
//     for (let x of arr) {
//       if (arr1.indexOf(x) === arr1.length - 1) {
//       alert(arr1.join(","));
//       }
//     }
//   }

//   let arr2 = [10, 20, 30]; 
//   let obj = {
//     name: "raja",
//     age: 30
//   };

  
//   for (let i of arr) {
//     console.log("i value", i);
//   }

//   for (let key in obj) {
//     console.log("key", key);
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>{name} is a JS library</h1>
//         <h1>Age: {age}</h1>
//         <h2>Sum: {x + y}</h2>
//         <h2>Subtraction: {subtract(x, y)}</h2>
//         <p>Array length: {arr1.length}</p>
//         <h2>{age>=18?"eligible for vote":"not eligible"}</h2>
//         <p>Object name: {obj.name}</p>
//         <button onClick={click}>Click Me</button>
//         {/* <User name="John Doe" age={25} /> */}
//       </header>
//     </div>
//   );
// }

// export default App;


// import './App.css';
// import NetflixMovies from './NetflixMovies';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//          <NetflixMovies /> 
//       </header>
//     </div>
//   );
// }

// export default App;


// App.js
// import React from 'react';
// import { ParentComponent } from './props';

// function App() {
//   return (
//     <div className="App">
//       <ParentComponent />
//     </div>
//   );
// }

// export default App;

import React from 'react';
//import { Statedata } from './state'; // Import the Statedata component
//import { UserData } from './User1';
//import { LiftingUpState } from './Liftinggupstate';
// import MountingPhase from './mountingphase'; // Import the Component from mountingphase.js

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <Statedata /> Render the Statedata component */}
//          {/* <UserData />Render the UserData component */}
//         {/* <LiftingUpState /> Render the LiftingUpState component */}
//         <MountingPhase />
//       </header>
//     </div>
//   );
// }

//export default App;


//import React from 'react';
//import { MountingPhase } from './mountingphase';
//import { UpdatingPhase } from './updatingphase'; // Import the UpdatingPhase component
// import { Statedata } from './Hooks';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <MountingPhase /> */}
//         {/* <UpdatingPhase value={10} /> Pass a prop to the UpdatingPhase component */}
//         {/* <UpdatingPhase value={20} /> Uncomment to see the component update */}
//         {/* <Statedata/> */}
//       </header>
//     </div>
//   );
// }

// export default App;


// import ShoppingCart from './additems';

// function App() {
//   return (
//     <div className="App">
//       <h1>React Shopping Cart App</h1>
//       <ShoppingCart />
//     </div>
//   );
// }

// export default App;

// src/App.js
function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary">Hello, Bootstrap!</h1>
      <button className="btn btn-danger">Click Me</button>
    </div>
  );
}
export default App;