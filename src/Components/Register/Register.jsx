import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import './Register.css'
import img1 from './media/img-1.svg'
import img2 from './media/img-2.svg'
import { UserContext } from '../../App';

const Register = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(UserContext)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [type, setType] = useState("")
    const signupWithGoogle = async (data) => {
        const user = {
            name: data.name,
            email: data.email,
            password: "loggedinwithgoogle",
            type: "individual"
        }
        const res = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });
        if (res.status === 500 || !res) {
            window.alert("Registeration Failed");
        } else if (res.status === 400) {
            window.alert("Account already exists, Please Signin")
            navigate("/login")
        } else if (res.status === 201) {
            window.alert("Registeration Successful");
            dispatch({ type: "USER", payload: true })
            localStorage.setItem("email", user.email)
            navigate("/dashboard", {
                state: {
                    name: user.name,
                    email: user.email,
                    type: user.type
                }
            });
        }
    }
    function handleCallbackResponse(response) {
        var data = jwt_decode(response.credential);
        signupWithGoogle(data)
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

    const signup = async (e) => {
        e.preventDefault();
        if (
            name === "" ||
            email === "" ||
            password === "" ||
            type === ""
        ) {
            alert("Please fill all fields correctly");
        } else {
            const user = {
                name: name,
                email: email,
                password: password,
                type: type
            }
            const res = await fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });
            if (res.status === 500 || !res) {
                window.alert("Registeration Failed");
            } else if (res.status === 400) {
                window.alert("Account already exists, Please Signin")
                navigate("/login")
            } else if (res.status === 201) {
                window.alert("Registeration Successful");
                dispatch({ type: "USER", payload: true })
                localStorage.setItem("email", user.email)
                navigate("/dashboard", {
                    state: {
                        name: user.name,
                        email: user.email,
                        type: user.type
                    }
                });
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
                                    <input className='form-control' id='input-1' type='text' required placeholder='Pranav Jindal' onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label' htmlFor="input-2">Email *</label>
                                    <input className='form-control' id='input-2' type='email' required placeholder='pranavjindal@gmail.com' onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label' htmlFor="input-3">Password *</label>
                                    <input className='form-control' id='input-3' type='password' required placeholder="************" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label' htmlFor="input-4">Re-enter password *</label>
                                    <input className='form-control' id='input-4' type='password' required placeholder="************" onChange={(e) => password === e.target.value ? console.log("Passwords match") : console.log("Passwords do not match")} />
                                </div>
                                <div className='form-group'>
                                    <label className='form-label' htmlFor="input-5">I am *</label>
                                    <select className='form-control' id='input-5' required onChange={(e) => e.target.value === "0" ? window.alert("PLEASE CHOOSE A VALID OPTION") : setType(e.target.value)}>
                                        <option value={"0"}>Please Select</option>
                                        <option value={"Individual"}>Individual</option>
                                        <option value={"Recruiter"}>Recruiter</option>
                                    </select>
                                </div>
                                <div className='footer1 d-flex justify-content-between'>
                                    <label>
                                        <input type='checkbox' required />
                                        <span>Agree to our terms & conditions</span>
                                    </label>
                                </div>
                                <div className='button'>
                                    <input className='btn' type='button' value='Submit & Register' onClick={(e) => signup(e)} />
                                </div>
                                <div className='text-center text-muted'>
                                    Already have an account?
                                    <NavLink to="/login">Sign in</NavLink>
                                </div>
                            </form>
                        </div>
                        <div className='img-1 d-none d-lg-block'>
                            <img src={img1} alt="" />
                        </div>
                        <div className='img-2'>
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Register