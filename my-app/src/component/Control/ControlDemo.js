import { useState } from "react";

const ControlDemo = () => {
    const [newText, setNewText] = useState("This is Default")

    function handler(e){
        setNewText(e.target.value)
    }

    return (
        <div>
            <input type="text" value={newText} onChange={(e) => handler(e)}></input>
            <p>{newText}</p>
        </div>
    )
}

export default ControlDemo;