import React, { useState } from 'react';

export function UserData() {
    const [user, setUser] = useState([
        // Initial state with user data
        {
            name: "sachin",
            age: 23
        },
        {
            name: "Ajay",
            age: 26
        },
        {
            name: "Rohit",
            age: 28
        },
        {
            name: "Virat",
            age: 30
        }
    ]);

    const userCount = user.length; // Get the number of users
    const UserAverage=user.reduce((x,y)=>x+y.age,0)/userCount; // Calculate the average age of users

    return (
        <div>
            <h1>User Data</h1>
            {/* <h2>{userCount}</h2> */}
            <ul>
                {user.map((data, index) => {
                    return (
                        <li key={index}>
                            <h2>{data.name} - {data.age} years old</h2>
                            <h2>{userCount} users</h2>
                            <h2>Average Age: {UserAverage}</h2>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}



