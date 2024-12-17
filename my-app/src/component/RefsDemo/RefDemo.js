import { useRef } from "react"

const RefDemo = () => {
    let counter = useRef(0);

    function useRefHandle(){
        counter.current = counter.current + 1;
        alert(`You have click this: ${counter.current}`)
    }

    return (
        <div>
            <button onClick={useRefHandle}>Press</button>
        </div>
    )
}

export default RefDemo;