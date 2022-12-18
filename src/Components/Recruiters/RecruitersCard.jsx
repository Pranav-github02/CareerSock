import React from 'react'
import './recruiters-main.css'
const RecruitersCard = ({ organisation, logo, location, jobs, rating }) => {
    return (
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12'>
            <div className='card'>
                <div className='image'>
                    <img src={logo} alt="" />
                </div>
                <div className='info'>
                    <h5>{organisation}</h5>
                    <div className='rating'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <span>({rating})</span>
                    </div>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default RecruitersCard