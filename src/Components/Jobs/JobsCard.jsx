import React from 'react'
import './jobs-main.css'
const JobsCard = ({ title, organisation, logo, location, type, salary, sal_type, desc, skills }) => {
    return (
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
            <div className='card'>
                <div className='upper'>
                    <div className='image'>
                        <img src={logo} alt="careersock" />
                    </div>
                    <div className='info'>
                        <p>{organisation}</p>
                        <span>
                            <i className="fa-solid fa-location-dot"></i>
                            {location}
                        </span>
                    </div>
                </div>
                <div className='card-info'>
                    <h6>{title}</h6>
                    <div className='type'>
                        <span><i className="fa-solid fa-briefcase"></i>{type}</span>
                        <span className='time'><i className="fa-regular fa-clock"></i>25 minutes ago</span>
                    </div>
                    <p>{desc}</p>
                    <div className='skills'>
                        {
                            skills.map(skill => {
                                return (
                                    <a>{skill}</a>
                                )
                            })
                        }
                    </div>
                    <div className='bottom'>
                        <div className='row'>
                            <div className='col-lg-7'>
                                <span className='sal'>{salary}</span>
                                <span className='text-muted'>{sal_type}</span>
                            </div>
                            <div className='col-lg-5 text-end'>
                                <div className='btn'>Apply Now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default JobsCard