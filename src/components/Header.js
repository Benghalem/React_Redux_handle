import {  Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container"> 
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    {/* <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li> */}
                    <li><Link to="/home" className="nav-link px-2 text-white">Home</Link></li>
                </ul>
            <div className="text-end">
                <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                <Link to="/register" className="btn btn-warning">Register</Link>
            </div>
            </div>
            </div>
        </header>
    )
}