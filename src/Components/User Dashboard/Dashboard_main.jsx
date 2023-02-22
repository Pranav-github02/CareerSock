import axios from 'axios';
import React, { PureComponent } from 'react'
import pic from '../Home/media/img.png'

class Dashboard_main extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            details: null,
            social: null
        }
    }
    url = `http://localhost:5000/`
    componentDidMount() {
        axios.get(`${this.url}details/${localStorage.getItem("email")}`)
            .then(res => {
                this.setState({ details: res.data.found_entry })
            })
            .catch(err => console.error(err))

        axios.get(`${this.url}social/${localStorage.getItem("email")}`)
            .then(res => {
                this.setState({ social: res.data.found_entry })
            })
            .catch(err => console.error(err))
    }
    render() {
        const saveInfo = async (e) => {
            e.preventDefault();
            const details = {
                name: document.getElementById('fullname').value,
                user_type: this.state.details.user_type,
                job_title: document.getElementById('jobtitle').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                website: document.getElementById('website').value,
                qualification: document.getElementById('qualification').value,
                experience: document.getElementById('experience').value,
                language: document.getElementById('language').value,
                state: document.getElementById('state').value,
                city: document.getElementById('city').value,
                postcode: document.getElementById('postcode').value,
                address: document.getElementById('address').value,
                description: document.getElementById('description').value
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
                email: document.getElementById('email').value,
                facebook: document.getElementById('facebook').value,
                twitter: document.getElementById('twitter').value,
                linkedin: document.getElementById('linkedin').value,
                instagram: document.getElementById('instagram').value,
                pinterest: document.getElementById('pinterest').value,
                github: document.getElementById('github').value
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
                                        <h5>{this.state.details !== null ? this.state.details.name : localStorage.getItem("name") !== null ? localStorage.getItem("name") : ""}</h5>
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
                                                            <input className='form-control' id='fullname' type="text" placeholder='Pranav Jindal' defaultValue={this.state.details !== null ? this.state.details.name : localStorage.getItem("name") !== null ? localStorage.getItem("name") : ""} />
                                                            <i className="fa-solid fa-user"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-6 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Job Title</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' id='jobtitle' type="text" placeholder='Full Stack Developer' defaultValue={this.state.details !== null ? this.state.details.job_title : ""} />
                                                            <i className="fa-solid fa-border-all"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-6 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Phone</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="number" id='phone' placeholder='(91) 123-4567-890' defaultValue={this.state.details !== null ? this.state.details.phone : ""} />
                                                            <i className="fa-solid fa-phone"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-6 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Email address</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="email" id="email" readOnly placeholder='pranav@domain.com' defaultValue={this.state.details !== null ? this.state.details.email : localStorage.getItem("email") !== null ? localStorage.getItem("email") : ""} />
                                                            <i className="fa-solid fa-at"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-6 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Website</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="url" id="website" placeholder='https://pranavjindal.net' defaultValue={this.state.details !== null ? this.state.details.website : ""} />
                                                            <i className="fa-solid fa-earth-asia"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-6 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Qualification</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="text" id="qualification" placeholder='B.Tech' defaultValue={this.state.details !== null ? this.state.details.qualification : ""} />
                                                            <i className="fa-solid fa-user-graduate"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-6 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Experience</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="text" id="experience" placeholder='0-5 Years' defaultValue={this.state.details !== null ? this.state.details.experience : ""} />
                                                            <i className="fa-solid fa-user-pen"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-6 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Language</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="text" id="language" placeholder='English, Hindi' defaultValue={this.state.details !== null ? this.state.details.language : ""} />
                                                            <i className="fa-solid fa-language"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>State</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="text" id="state" placeholder='Punjab' defaultValue={this.state.details !== null ? this.state.details.state : ""} />
                                                            <i className="fa-solid fa-earth-asia"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>City</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="text" id="city" placeholder='Jalandhar' defaultValue={this.state.details !== null ? this.state.details.city : ""} />
                                                            <i className="fa-solid fa-earth-asia"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Postcode</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="number" id="postcode" placeholder='144001' defaultValue={this.state.details !== null ? this.state.details.postcode : ""} />
                                                            <i className="fa-solid fa-map-pin"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-12 col-lg-12 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Address</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="text" id="address" placeholder='1234 Gurjepal Nagar, Jalandhar, Punjab 144001' defaultValue={this.state.details !== null ? this.state.details.address : ""} />
                                                            <i className="fa-solid fa-location-dot"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Description</label>
                                                        <textarea className='form-control' rows="4" id="description" defaultValue={this.state.details !== null ? this.state.details.description : ""} ></textarea>
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
                                                            <input className='form-control' type="url" id="facebook" placeholder='https://www.facebook.com/' defaultValue={this.state.social !== null ? this.state.social.facebook : ""} />
                                                            <i className="fa-brands fa-facebook-f"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Twitter</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="url" id="twitter" placeholder='https://twitter.com/' defaultValue={this.state.social !== null ? this.state.social.twitter : ""} />
                                                            <i className="fa-brands fa-twitter"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>LinkedIn</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="url" id="linkedin" placeholder='https://www.linkedin.com/' defaultValue={this.state.social !== null ? this.state.social.linkedin : ""} />
                                                            <i className="fa-brands fa-linkedin-in"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Instagram</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="url" id="instagram" placeholder='https://www.instagram.com/' defaultValue={this.state.social !== null ? this.state.social.instagram : ""} />
                                                            <i className="fa-brands fa-instagram"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Pinterest</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="url" id="pinterest" placeholder='https://www.pinterest.com/' defaultValue={this.state.social !== null ? this.state.social.pinterest : ""} />
                                                            <i className="fa-brands fa-pinterest-p"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Github</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="url" id="github" placeholder='https://www.github.com/' defaultValue={this.state.social !== null ? this.state.social.github : ""} />
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
}

export default Dashboard_main