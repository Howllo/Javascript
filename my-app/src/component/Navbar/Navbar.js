import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to='/'>
                <h2>The React Demos</h2>
            </Link>
            <div>
                <Link to="/sdc">State Demo</Link>
                <Link to="/edc">Event Demo</Link>
                <Link to='/list-and-key'>List Demo</Link>
                <Link to="/post-assignment">Post</Link>
                <Link to="/axios">Axios</Link>
                <Link to="/todo">ToDo's List</Link>
            </div>
        </div>
    )
}

export default Navbar;
