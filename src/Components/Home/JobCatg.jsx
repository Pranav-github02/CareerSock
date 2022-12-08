import React from 'react'
import './JobCatg.css'
import './flaticon.css'
const JobCatg = () => {
    return (
        <div className='jobcatg container' >
            <div className='text-center'>
                <h2 className='title'>Popular categories</h2>
                <p>Find the job that's perfect for you. about 100+ new jobs everyday</p>
            </div>
            <div className='row'>
                <div className='catg-block col-xl-3 col-lg-4 col-md-6 col-sm-12'>
                    <div className='inner-box'>
                        <div className='content'>
                            <span className='icon flaticon-money-1'></span>
                            <h4>Accounting / Finance</h4>
                            <p>(2 open positions)</p>
                        </div>
                    </div>
                </div>
                <div className='catg-block col-xl-3 col-lg-4 col-md-6 col-sm-12'>
                    <div className='inner-box'>
                        <div className='content'>
                            <span className='icon flaticon-promotion'></span>
                            <h4>Marketing</h4>
                            <p>(86 open positions)</p>
                        </div>
                    </div>
                </div>
                <div className='catg-block col-xl-3 col-lg-4 col-md-6 col-sm-12'>
                    <div className='inner-box'>
                        <div className='content'>
                            <span className='icon flaticon-vector'></span>
                            <h4>Design</h4>
                            <p>(43 open positions)</p>
                        </div>
                    </div>
                </div>
                <div className='catg-block col-xl-3 col-lg-4 col-md-6 col-sm-12'>
                    <div className='inner-box'>
                        <div className='content'>
                            <span className='icon flaticon-web-programming'></span>
                            <h4>Development</h4>
                            <p>(12 open positions)</p>
                        </div>
                    </div>
                </div>
                <div className='catg-block col-xl-3 col-lg-4 col-md-6 col-sm-12'>
                    <div className='inner-box'>
                        <div className='content'>
                            <span className='icon flaticon-rocket-ship'></span>
                            <h4>Project Management</h4>
                            <p>(2 open positions)</p>
                        </div>
                    </div>
                </div>
                <div className='catg-block col-xl-3 col-lg-4 col-md-6 col-sm-12'>
                    <div className='inner-box'>
                        <div className='content'>
                            <span className='icon flaticon-support-1'></span>
                            <h4>Customer Service</h4>
                            <p>(2 open positions)</p>
                        </div>
                    </div>
                </div>
                <div className='catg-block col-xl-3 col-lg-4 col-md-6 col-sm-12'>
                    <div className='inner-box'>
                        <div className='content'>
                            <span className='icon flaticon-first-aid-kit-1'></span>
                            <h4>Health and Care</h4>
                            <p>(25 open positions)</p>
                        </div>
                    </div>
                </div>
                <div className='catg-block col-xl-3 col-lg-4 col-md-6 col-sm-12'>
                    <div className='inner-box'>
                        <div className='content'>
                            <span className='icon flaticon-car'></span>
                            <h4>Automotive Jobs</h4>
                            <p>(92 open positions)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobCatg