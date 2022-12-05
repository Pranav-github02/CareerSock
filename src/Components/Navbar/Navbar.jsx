import React from 'react'
import logo from './logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Jobeal" width="155" height="60" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbar">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">Jobs</a>
                            <a className="nav-link" href="#">Recruiters</a>
                            <a className="nav-link" href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar