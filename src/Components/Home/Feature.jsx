import React from 'react'
import './feature.css'
import img1 from './media/img-chart.png'
import img2 from './media/controlcard.png'
import img from './media/img.png'
import { useNavigate } from 'react-router-dom'
const Feature = () => {
    const navigate = useNavigate();
    return (
        <div className='feature'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12'>
                        <div className='job-image text-center'>
                            <img className='img-1' src={img1} />
                            <img className='img-2' src={img2} />
                            <figure>
                                <img src={img} />
                            </figure>
                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <div className='content-job-inner'>
                            <span className='text-32'>Millions Of Jobs.</span>
                            <h2 className='title'>Find The One That's <span>Right</span> For You</h2>
                            <div className='sub-text'>
                                Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 400,000 companies worldwide. The right job is out there.
                            </div>
                            <div className='buttons'>
                                <input className='btn btn-primary' type='button' value='Search Jobs' onClick={() => navigate("/jobs")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature