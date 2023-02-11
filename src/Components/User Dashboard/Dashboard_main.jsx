import React, { PureComponent } from 'react'
import axios from 'axios'
import pic from '../Home/media/img.png'

class Dashboard_main extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            details: null
        }
    }
    componentDidMount() {
        let url = `http://localhost:5000/`
        axios.get(url)
            .then(res => {
                this.setState({ details: res.data })
            })
            .catch(err => console.error(err))
    }
    render() {
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
                                        <h5>Name</h5>
                                    </div>
                                    <div className='nav-list'>
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a class="nav-link active" aria-current="page" href="#">
                                                    <i class="fa-solid fa-user"></i>
                                                    My Profile
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">
                                                    <i class="fa-solid fa-suitcase"></i>
                                                    Applied Jobs
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">
                                                    <i class="fa-solid fa-receipt"></i>
                                                    My Resume
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">
                                                    <i class="fa-solid fa-bookmark"></i>
                                                    Saved Jobs
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">
                                                    <i class="fa-solid fa-lock"></i>
                                                    Change Password
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">
                                                    <i class="fa-solid fa-trash"></i>
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
                                                            <input className='form-control' id='fullname' type="text" placeholder='Pranav Jindal' />
                                                            <i class="fa-solid fa-user"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-6 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Job Title</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' id='jobtitle' type="text" placeholder='Full Stack Developer' />
                                                            <i class="fa-solid fa-border-all"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-6 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Phone</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="number" id='phone' placeholder='(91) 123-4567-890' />
                                                            <i class="fa-solid fa-phone"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-6 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Email address</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="email" id="email" placeholder='pranav@domain.com' />
                                                            <i class="fa-solid fa-at"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-6 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Website</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="url" id="website" placeholder='https://pranavjindal.net' />
                                                            <i class="fa-solid fa-earth-asia"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-6 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Qualification</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="text" id="qualification" placeholder='B.Tech' />
                                                            <i class="fa-solid fa-user-graduate"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-6 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Experience</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="text" id="experience" placeholder='0-5 Years' />
                                                            <i class="fa-solid fa-user-pen"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-6 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Language</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="text" id="language" placeholder='English, Hindi' />
                                                            <i class="fa-solid fa-language"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>State</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="text" id="state" placeholder='Punjab' />
                                                            <i class="fa-solid fa-earth-asia"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>City</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="text" id="city" placeholder='Jalandhar' />
                                                            <i class="fa-solid fa-earth-asia"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Postcode</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="number" id="postcode" placeholder='144001' />
                                                            <i class="fa-solid fa-map-pin"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-12 col-lg-12 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Address</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="text" id="address" placeholder='1234 Gurjepal Nagar, Jalandhar, Punjab 144001' />
                                                            <i class="fa-solid fa-location-dot"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Description</label>
                                                        <textarea className='form-control' rows="4" id="description"></textarea>
                                                    </div>
                                                </div>
                                                <div className='col-lg-12 col-md-12'>
                                                    <div className='text-left'>
                                                        <button type='submit' className='save-btn btn btn-primary'>Save Changes</button>
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
                                                            <input className='form-control' type="url" id="facebook" placeholder='https://www.facebook.com/' />
                                                            <i class="fa-brands fa-facebook-f"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Twitter</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="url" id="twitter" placeholder='https://twitter.com/' />
                                                            <i class="fa-brands fa-twitter"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>LinkedIn</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="url" id="linkedin" placeholder='https://www.linkedin.com/' />
                                                            <i class="fa-brands fa-linkedin-in"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Instagram</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="url" id="instagram" placeholder='https://www.instagram.com/' />
                                                            <i class="fa-brands fa-instagram"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Pinterest</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="url" id="pinterest" placeholder='https://www.pinterest.com/' />
                                                            <i class="fa-brands fa-pinterest-p"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-4 col-lg-6 col-md-12'>
                                                    <div className='form-group'>
                                                        <label>Github</label>
                                                        <div className='input-box'>
                                                            <input className='form-control' type="url" id="github" placeholder='https://www.github.com/' />
                                                            <i class="fa-brands fa-github"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-12 col-md-12'>
                                                    <div className='text-left'>
                                                        <button type='submit' className='save-btn btn btn-primary'>Save Changes</button>
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