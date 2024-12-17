import { useContext } from "react";
import MyContext from "../ContextDemo/MyContext";
import TextComponent from "../aoc/TextComponent";

const Hello = (props) =>{
    const theData = useContext(MyContext);
    return ( 
        <div>
            <h4>Hello World from Hello Component!</h4>
            <p>Hello {props.firstname} {props.lastname}!</p>
            <hr></hr>
            <h4>This is wrapper function for Component.</h4>
            {
                <TextComponent/>
            }
            <hr></hr>
            <h4>This is context Demo!</h4>
            <h2> Data From Context ::::: {theData}</h2>
        </div>
    );
}

export default Hello;