import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import pic from '../Home/media/img.png'

const Dashboard_main = () => {
    const location = useLocation();

    const [details, setDetails] = useState(null);
    const fetchDetails = () => {
        axios.get(`http://localhost:5000/details/${localStorage.getItem("email")}`)
            .then((response) => {
                const allDetails = response.data.found_entry;
                setDetails(allDetails);
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    const [social, setSocial] = useState(null)
    const fetchSocial = () => {
        axios.get(`http://localhost:5000/social/${localStorage.getItem("email")}`)
            .then((response) => {
                const allSocial = response.data.found_entry;
                setSocial(allSocial);
            })
            .catch(error => console.error(`Error: ${error}`));
    }
    useEffect(() => {
        fetchDetails();
        fetchSocial();
    }, []);

    // Basic info states
    const [name, setName] = useState(location.state !== null ? location.state.name : details !== null ? details.name : "")
    const [user_type, setUserType] = useState(location.state !== null ? location.state.type : details !== null ? details.user_type : "")
    const [job_title, setJobTitle] = useState(details !== null ? details.job_title : "")
    const [phone, setPhone] = useState(details !== null ? details.phone : 0)
    const [email, setEmail] = useState(location.state !== null ? location.state.email : details !== null ? details.email : "")
    const [website, setWebsite] = useState(details !== null ? details.website : "")
    const [qualification, setQualification] = useState(details !== null ? details.qualification : "")
    const [experience, setExperience] = useState(details !== null ? details.experience : "")
    const [language, setLanguage] = useState(details !== null ? details.language : "")
    const [state, setState] = useState(details !== null ? details.state : "")
    const [city, setCity] = useState(details !== null ? details.city : "")
    const [postcode, setPostCode] = useState(details !== null ? details.postcode : "")
    const [address, setAddress] = useState(details !== null ? details.address : "")
    const [description, setDescription] = useState(details !== null ? details.description : "")

    // Social network states
    const [facebook, setFacebook] = useState(social !== null ? social.facebook : "")
    const [twitter, setTwitter] = useState(social !== null ? social.twitter : "")
    const [linkedin, setLinkedin] = useState(social !== null ? social.linkedin : "")
    const [instagram, setInstagram] = useState(social !== null ? social.instagram : "")
    const [pinterest, setPinterest] = useState(social !== null ? social.pinterest : "")
    const [github, setGithub] = useState(social !== null ? social.github : "")

    const saveInfo = async (e) => {
        e.preventDefault();
        const details = {
            name: name,
            user_type: user_type,
            job_title: job_title,
            phone: phone,
            email: email,
            website: website,
            qualification: qualification,
            experience: experience,
            language: language,
            state: state,
            city: city,
            postcode: postcode,
            address: address,
            description: description
        }
        const res = await fetch("http://localhost:5000/details", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(details)
        });
        if (res.status === 500 || !res) {
            window.alert("Unable to save details at the moment. Please try again");
        } else if (res.status === 201) {
            window.alert("Details saved successfully")
        }
    }

    const saveSocial = async (e) => {
        e.preventDefault();
        const social = {
            email: email,
            facebook: facebook,
            twitter: twitter,
            linkedin: linkedin,
            instagram: instagram,
            pinterest: pinterest,
            github: github
        }
        const res = await fetch("http://localhost:5000/social", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(social)
        });
        if (res.status === 500 || !res) {
            window.alert("Unable to save details at the moment. Please try again");
        } else if (res.status === 201) {
            window.alert("Details saved successfully")
        }
    }
    return (
        <div className='dashboard-main'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-4 col-md-12 leftSidebar'>
                        <div className='sidebar'>
                            <div className='inner'>
                                <div className='profile-pic'>
                                    <img src={pic} />
                                    <div className='change-pic'>
                                        <div className='change-pic-grid'></div>
                                        <button>Upload image</button>
                                        <input type="file" accept='.jpg, .jpeg, .png' />
                                    </div>
                                </div>
                                <div className='name text-center'>
                                    <h5>{name}</h5>
                                </div>
                                <div className='nav-list'>
                                    <ul className="nav flex-column">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">
                                                <i className="fa-solid fa-user"></i>
                                                My Profile
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <i className="fa-solid fa-suitcase"></i>
                                                Applied Jobs
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <i className="fa-solid fa-receipt"></i>
                                                My Resume
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <i className="fa-solid fa-bookmark"></i>
                                                Saved Jobs
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <i className="fa-solid fa-lock"></i>
                                                Change Password
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">
                                                <i className="fa-solid fa-trash"></i>
                                                Delete Account
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-9 col-lg-8 col-md-12 rightSidebar'>
                        <div className='inner'>
                            <form>
                                {/* Basic Information */}
                                <div className='panel'>
                                    <div className='panel-heading'>
                                        <h5>Basic Information</h5>
                                    </div>
                                    <div className='panel-body'>
                                        <div className='row'>
                                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>Name</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' id='fullname' type="text" placeholder='Pranav Jindal' value={name} onChange={(e) => setName(e.target.value)} />
                                                        <i className="fa-solid fa-user"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>Job Title</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' id='jobtitle' type="text" placeholder='Full Stack Developer' value={job_title} onChange={(e) => setJobTitle(e.target.value)} />
                                                        <i className="fa-solid fa-border-all"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>Phone</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="number" id='phone' placeholder='(91) 123-4567-890' value={phone} onChange={(e) => setPhone(e.target.value)} />
                                                        <i className="fa-solid fa-phone"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>Email address</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="email" id="email" readOnly placeholder='pranav@domain.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                                                        <i className="fa-solid fa-at"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>Website</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="url" id="website" placeholder='https://pranavjindal.net' value={website} onChange={(e) => setWebsite(e.target.value)} />
                                                        <i className="fa-solid fa-earth-asia"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>Qualification</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="text" id="qualification" placeholder='B.Tech' value={qualification} onChange={(e) => setQualification(e.target.value)} />
                                                        <i className="fa-solid fa-user-graduate"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>Experience</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="text" id="experience" placeholder='0-5 Years' value={experience} onChange={(e) => setExperience(e.target.value)} />
                                                        <i className="fa-solid fa-user-pen"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-6 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>Language</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="text" id="language" placeholder='English, Hindi' value={language} onChange={(e) => setLanguage(e.target.value)} />
                                                        <i className="fa-solid fa-language"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-4 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>State</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="text" id="state" placeholder='Punjab' value={state} onChange={(e) => setState(e.target.value)} />
                                                        <i className="fa-solid fa-earth-asia"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-4 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>City</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="text" id="city" placeholder='Jalandhar' value={city} onChange={(e) => setCity(e.target.value)} />
                                                        <i className="fa-solid fa-earth-asia"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-4 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>Postcode</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="number" id="postcode" placeholder='144001' value={postcode} onChange={(e) => setPostCode(e.target.postcode)} />
                                                        <i className="fa-solid fa-map-pin"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-12 col-lg-12 col-md-12'>
                                                <div className='form-group'>
                                                    <label>Address</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="text" id="address" placeholder='1234 Gurjepal Nagar, Jalandhar, Punjab 144001' value={address} onChange={(e) => setAddress(e.target.value)} />
                                                        <i className="fa-solid fa-location-dot"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='form-group'>
                                                    <label>Description</label>
                                                    <textarea className='form-control' rows="4" id="description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                                                </div>
                                            </div>
                                            <div className='col-lg-12 col-md-12'>
                                                <div className='text-left'>
                                                    <button type='submit' className='save-btn btn btn-primary' onClick={(e) => saveInfo(e)}>Save Changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Network */}
                                <div className='panel'>
                                    <div className='panel-heading'>
                                        <h5>Social Network</h5>
                                    </div>
                                    <div className='panel-body'>
                                        <div className='row'>
                                            <div className='col-xl-4 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>Facebook</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="url" id="facebook" placeholder='https://www.facebook.com/' value={facebook} onChange={(e) => setFacebook(e.target.value)} />
                                                        <i className="fa-brands fa-facebook-f"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-4 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>Twitter</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="url" id="twitter" placeholder='https://twitter.com/' value={twitter} onChange={(e) => setTwitter(e.target.value)} />
                                                        <i className="fa-brands fa-twitter"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-4 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>LinkedIn</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="url" id="linkedin" placeholder='https://www.linkedin.com/' value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
                                                        <i className="fa-brands fa-linkedin-in"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-4 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>Instagram</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="url" id="instagram" placeholder='https://www.instagram.com/' value={instagram} onChange={(e) => setInstagram(e.target.value)} />
                                                        <i className="fa-brands fa-instagram"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-4 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>Pinterest</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="url" id="pinterest" placeholder='https://www.pinterest.com/' value={pinterest} onChange={(e) => setPinterest(e.target.value)} />
                                                        <i className="fa-brands fa-pinterest-p"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-xl-4 col-lg-6 col-md-12'>
                                                <div className='form-group'>
                                                    <label>Github</label>
                                                    <div className='input-box'>
                                                        <input className='form-control' type="url" id="github" placeholder='https://www.github.com/' value={github} onChange={(e) => setGithub(e.target.value)} />
                                                        <i className="fa-brands fa-github"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-12 col-md-12'>
                                                <div className='text-left'>
                                                    <button type='submit' className='save-btn btn btn-primary' onClick={(e) => saveSocial(e)}>Save Changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard_main