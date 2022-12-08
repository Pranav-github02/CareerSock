import React from 'react'
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import './Register.css'
import img1 from './media/img-1.svg'
import img2 from './media/img-2.svg'

const Register = () => {
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
            { theme: "outline", size: "large", shape: "pill", text: "signup_with", width: "400px", logo_alignment: "center" }
        );
    }, [])
    return (
        <div className='main'>
            <section className='register'>
                <div className='container'>
                    <div className='row register-cover'>
                        <div className='col-lg-4 col-md-6 col-sm-12 mx-auto'>
                            <div className='text-center'>
                                <p className='title1'>Register</p>
                                <h2 className='title2'>Start for free Today</h2>
                                <p className='subtitle'>Access to all features. No credit card required.</p>
                                <div id='signUpDiv'></div>
                                <div className='divider'>
                                    <span>or continue with</span>
                                </div>
                            </div>
                            <form className='login-register text-start'>
                                <div className='form-group'>
                                    <label className='form-label' htmlFor="input-1">Full Name *</label>
                                    <input className='form-control' id='input-1' type='text' required placeholder='Pranav Jindal' />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label' htmlFor="input-2">Email *</label>
                                    <input className='form-control' id='input-2' type='email' required placeholder='pranavjindal@gmail.com' />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label' htmlFor="input-3">Password *</label>
                                    <input className='form-control' id='input-3' type='password' required placeholder="************" />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label' htmlFor="input-4">Re-enter password *</label>
                                    <input className='form-control' id='input-4' type='password' required placeholder="************" />
                                </div>
                                <div className='footer d-flex justify-content-between'>
                                    <label>
                                        <input type='checkbox' required />
                                        <span>Agree to our terms & conditions</span>
                                    </label>
                                </div>
                                <div className='button'>
                                    <input className='btn' type='button' value='Submit & Register'/>
                                </div>
                                <div className='text-center text-muted'>
                                    Already have an account?
                                    <NavLink to="/login">Sign in</NavLink>
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

export default Register