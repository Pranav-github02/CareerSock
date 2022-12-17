import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.css'
import logo from './logo.png'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='footer-col-1 col-md-3 col-sm-12'>
            <NavLink to='/'><img src={logo} alt='CareerSock' /></NavLink>
            <div className='footer-social'>
              <a href='https://www.facebook.com/' target='_blank'><i className="fa-brands fa-facebook-f i1"></i></a>
              <a href='https://twitter.com/' target='_blank'><i className="fa-brands fa-twitter i2"></i></a>
              <a href='https://www.instagram.com/' target='_blank'><i className="fa-brands fa-instagram i3"></i></a>
            </div>
          </div>
          <div className='footer-col-2 col-md-2 col-xs-6'>
            <h6>Resources</h6>
            <ul>
              <li><NavLink to='/signup'>Sign Up</NavLink></li>
              <li><NavLink to='/'>Help Center</NavLink></li>
              <li><NavLink to='/'>About</NavLink></li>
              <li><NavLink to='/'>Press</NavLink></li>
            </ul>
          </div>
          <div className='footer-col-2 col-md-2 col-xs-6'>
            <h6>Resources</h6>
            <ul>
              <li><NavLink to='/signup'>Sign Up</NavLink></li>
              <li><NavLink to='/'>Help Center</NavLink></li>
              <li><NavLink to='/'>About</NavLink></li>
              <li><NavLink to='/'>Press</NavLink></li>
            </ul>
          </div>
          <div className='footer-col-2 col-md-2 col-xs-6'>
            <h6>Resources</h6>
            <ul>
              <li><NavLink to='/signup'>Sign Up</NavLink></li>
              <li><NavLink to='/'>Help Center</NavLink></li>
              <li><NavLink to='/'>About</NavLink></li>
              <li><NavLink to='/'>Press</NavLink></li>
            </ul>
          </div>
          <div className='footer-col-2 col-md-2 col-xs-6'>
            <h6>Resources</h6>
            <ul>
              <li><NavLink to='/signup'>Sign Up</NavLink></li>
              <li><NavLink to='/'>Help Center</NavLink></li>
              <li><NavLink to='/'>About</NavLink></li>
              <li><NavLink to='/'>Press</NavLink></li>
            </ul>
          </div>
        </div>
        <div className='bottom'>
          <div className='text-center'>
            Copyright &#169; 2022 by Career Sock. All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer