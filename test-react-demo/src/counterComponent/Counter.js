import { useState } from "react";

const Counter = () => {
    const [counting, setCounter] = useState(0);
    
    function incrementHandler(){
        setCounter(counting + 1);
    }

    function decrementHandler() {
        setCounter(counting - 1);
    }
    
    return (
        <div>
            <button data-testId="increment" onClick={incrementHandler}>Increment Me!</button>
            <h3 data-testId="counter">{counting}</h3>
            <button data-testId="decrement" onClick={decrementHandler}>Decrement Me!</button>
        </div>
    )
}

export default Counter;