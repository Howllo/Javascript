const Hello = (props) =>{
    return ( 
        <div>
            <h3>Hello World from Hello Component!</h3>
            <p>Hello {props.firstname} {props.lastname}!</p>
        </div>
    );
}

export default Hello;