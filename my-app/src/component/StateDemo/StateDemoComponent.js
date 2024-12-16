import { useState } from "react";

const StateDemoComponent = () => {
    const names = ["Tony", "Hardiman"];
    const [name, setName] = useState("Tony");
    const [counter, setCounter] = useState(0);

    const changeName = (inputName) =>{
        setName(inputName);
        setCounter(prevCounter =>{
            const newCounter = prevCounter + 1;
            return newCounter > 99 ? 0 : newCounter;
        })
    }

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={()=>changeName(names[counter % 2])}>Change Name</button>
        </div>
    )
} 

export default StateDemoComponent;