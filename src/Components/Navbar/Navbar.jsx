import React, { useContext } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import logo from './logo.png'
import './Navbar.css'
import { UserContext } from '../../App';
const Navbar = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useContext(UserContext)
    const Logout = async () => {
        const res = await fetch("http://localhost:5000/logout", {
            method: "GET",
        });
        if (res.status === 200) {
            console.log("session destroyed");
            dispatch({ type: "USER", payload: false })
            navigate("/");
            localStorage.clear();
        }
    }
    const RenderMenu = () => {
        if (state || localStorage.getItem("email") !== null) {
            return (
                <div className="navbar-nav">
                    <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                    <NavLink to="/jobs" className="nav-link">Jobs</NavLink>
                    <NavLink to="/recruiters" className="nav-link">Recruiters</NavLink>
                    <div className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fa-solid fa-user-large"></i>
                        </NavLink>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/dashboard" className="dropdown-item">Dashboard</NavLink></li>
                            <li><NavLink className="dropdown-item" onClick={() => Logout()}>Logout</NavLink></li>
                        </ul>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="navbar-nav">
                    <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                    <NavLink to="/jobs" className="nav-link">Jobs</NavLink>
                    <NavLink to="/recruiters" className="nav-link">Recruiters</NavLink>
                    <NavLink className="nav-link" to="/signup">Register</NavLink>
                    <NavLink className="nav-link" to="/login"><input className='btn btn-primary' type="button" value="Sign in" /></NavLink>
                </div>
            )
        }
    }
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        <img src={logo} alt="Jobeal" width="250" height="65" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbar">
                        <RenderMenu />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar