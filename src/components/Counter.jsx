'use client'

import { useState } from "react";

const Counter = () => {
    const [count , setCount] = useState(0);
    return (
        <div>
            <h1 className="text-3xl">Count : {count}</h1>
            <button onClick={() => setCount(count +1)} className="btn">Counter</button>
        </div>
    );
};

export default Counter;