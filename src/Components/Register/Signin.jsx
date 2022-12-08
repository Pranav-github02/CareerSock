import React from 'react'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import './Register.css'
import img1 from './media/img-4.svg'
import img2 from './media/img-3.svg'

const Signin = () => {
    function handleCallbackResponse(response) {
        var data = jwt_decode(response.credential);
        console.log(data.email);
    }

    useEffect(() => {
        /* global google*/
        google.accounts.id.initialize({
            client_id: "335977447977-c9ij7bbepmb89imkc4mgn4p2me58ctmp.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        google.accounts.id.renderButton(
            document.getElementById("signUpDiv"),
            { theme: "outline", size: "large", shape: "pill", text: "signin_with", width: "400px", logo_alignment: "center" }
        );
    }, [])
    return (
        <div className='main'>
            <section className='register'>
                <div className='container'>
                    <div className='row register-cover'>
                        <div className='col-lg-4 col-md-6 col-sm-12 mx-auto'>
                            <div className='text-center'>
                                <p className='title1'>Welcome back!</p>
                                <h2 className='title2'>Member Login</h2>
                                <p className='subtitle'>Access to all features. No credit card required.</p>
                                <div id='signUpDiv'></div>
                                <div className='divider'>
                                    <span>or continue with</span>
                                </div>
                            </div>
                            <form className='login-register text-start'>
                                <div className='form-group'>
                                    <label className='form-label' htmlFor="input-1">Email *</label>
                                    <input className='form-control' id='input-1' type='email' required placeholder='pranavjindal@gmail.com' />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label' htmlFor="input-2">Password *</label>
                                    <input className='form-control' id='input-2' type='password' required placeholder="************" />
                                </div>
                                <div className='footer d-flex justify-content-between'>
                                    <label>
                                        <input type='checkbox' required />
                                        <span>Remember me</span>
                                    </label>
                                </div>
                                <div className='button'>
                                    <input className='btn' type='button' value='Login' />
                                </div>
                                <div className='text-center text-muted'>
                                    Don't have an Account?
                                    <NavLink to="/signup">Sign up</NavLink>
                                </div>
                            </form>
                        </div>
                        <div className='img-1 d-none d-lg-block'>
                            <img src={img1} />
                        </div>
                        <div className='img-2'>
                            <img src={img2} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signin