import React from 'react'
import { NavLink } from "react-router-dom";
import logo from './logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        <img src={logo} alt="Jobeal" width="155" height="60" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbar">
                        <div className="navbar-nav">
                            <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                            <NavLink to="/jobs" className="nav-link">Jobs</NavLink>
                            <NavLink to="/recruiters" className="nav-link">Recruiters</NavLink>
                            <NavLink to="/support" className="nav-link">Contact</NavLink>
                            {/* <div className='login-signup'> */}
                                <NavLink className="nav-link" to="/signup">Register</NavLink>
                                <NavLink className="nav-link" to="/login"><input className='btn btn-primary' type="button" value="Sign in" /></NavLink>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar