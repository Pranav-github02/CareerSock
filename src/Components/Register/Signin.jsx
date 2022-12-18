import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import './Register.css'
import img1 from './media/img-4.svg'
import img2 from './media/img-3.svg'
import { UserContext } from '../../App';

const Signin = () => {
    const { state, dispatch } = useContext(UserContext)
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const signinWithGoogle = async (data) => {
        const user = {
            email: data.email,
            password: "loggedinwithgoogle"
        }
        const res = await fetch("https://careersockserver-env-1.eba-pjpi9zpp.ap-south-1.elasticbeanstalk.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });
        if (res.status === 500 || !res) {
            window.alert("Signin Failed");
        } else if (res.status === 400) {
            window.alert("Incorrect email or password")
        } else if (res.status === 201) {
            dispatch({ type: "USER", payload: true })
            window.alert("Signin successful")
            navigate("/");
        }
    }
    function handleCallbackResponse(response) {
        var data = jwt_decode(response.credential);
        signinWithGoogle(data);
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

    const signin = async (e) => {
        e.preventDefault();
        if (
            email === "" ||
            password === ""
        ) {
            alert("Please fill all fields correctly");
        } else {
            const user = {
                email: email,
                password: password
            }
            const res = await fetch("https://careersockserver-env-1.eba-pjpi9zpp.ap-south-1.elasticbeanstalk.com/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });
            if (res.status === 500 || !res) {
                window.alert("Signin Failed");
            } else if (res.status === 400) {
                window.alert("Incorrect email or password")
            } else if (res.status === 201) {
                window.alert("Signin successful")
                navigate("/");
            }
        }
    }

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
                                    <input className='form-control' id='input-1' type='email' required placeholder='pranavjindal@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label' htmlFor="input-2">Password *</label>
                                    <input className='form-control' id='input-2' type='password' required placeholder="************" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className='footer1 d-flex justify-content-between'>
                                    <label>
                                        <input type='checkbox' required />
                                        <span>Remember me</span>
                                    </label>
                                </div>
                                <div className='button'>
                                    <input className='btn' type='button' value='Login' onClick={(e) => signin(e)} />
                                </div>
                                <div className='text-center text-muted'>
                                    Don't have an Account?
                                    <NavLink to="/signup">Sign up</NavLink>
                                </div>
                            </form>
                        </div>
                        <div className='img-1 d-none d-lg-block'>
                            <img src={img1} alt=""/>
                        </div>
                        <div className='img-2'>
                            <img src={img2} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signin