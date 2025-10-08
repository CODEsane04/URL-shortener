import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar">
            <h1>URL Shortener</h1>
            <div className="links">
                <Link to="/" href="">Home</Link>
                <Link to="/links" href="">URLs</Link>
            </div>
        </div>
    );
}
 
export default Nav;