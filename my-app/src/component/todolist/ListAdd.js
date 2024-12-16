import { useState } from "react";

const ListAdd = ({list}) => {
    const [value, setValue] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        list((prevList)=>{return[...prevList,value]})
        setValue("")
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button>Add</button>
        </form>
    )
}

export default ListAdd;