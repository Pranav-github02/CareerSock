import React from 'react'
import './Hero.css'
import banner1 from './media/banner1.png'
import banner2 from './media/banner2.png'
import banner3 from './media/banner3.png'
import banner4 from './media/banner4.png'

const Hero = () => {
    return (
        <div>
            <div className='home-bg'></div>
            <section>
                <div className='banner-hero'>
                    <div className='banner-inner'>
                        <div className='row'>
                            <div className='col-xl-8 col-lg-12'>
                                <div className='banner'>
                                    <h1 className='heading-banner'>
                                        The <span>Easiest Way</span><br className='d-none d-lg-block' />
                                        to Get your New Job
                                    </h1>
                                    <div className='banner-desc'>
                                        Each month, more than 3 million job seekers turn to <br className='d-none d-lg-block' />
                                        website in their search for work, making over 140,000 <br className='d-none d-lg-block' />
                                        application every single day
                                    </div>
                                    <div className='form-find'>
                                        <form>
                                            <div className='industry-box'>
                                                <select className='form-input industry'>
                                                    <option value={0} defaultValue>Industry</option>
                                                    <option value={1}>Software</option>
                                                    <option value={2}>Finance</option>
                                                    <option value={3}>Management</option>
                                                    <option value={4}>Advertising</option>
                                                    <option value={5}>Development</option>
                                                    <option value={6}>Recruiting</option>
                                                </select>
                                            </div>
                                            <div className='industry-box'>
                                                <select className='form-input location'>
                                                    <option value={true}>Location</option>
                                                    <option value={"BGL"}>Bangalore</option>
                                                    <option value={"CHG"}>Chandigarh</option>
                                                    <option value={"CHN"}>Chennai</option>
                                                    <option value={"DEL"}>Delhi</option>
                                                    <option value={"GGN"}>Gurgaon</option>
                                                    <option value={"HYD"}>Hyderabad</option>
                                                    <option value={"KOA"}>Kolkata</option>
                                                    <option value={"MUM"}>Mumbai</option>
                                                </select>
                                            </div>
                                            {/* <input className='form-input' type="text" placeholder='Your keyword...'></input> */}
                                            <button className='btn btn-primary'>Search</button>
                                        </form>
                                    </div>
                                    <div className='list-tags'>
                                        <strong>Popular Searches: </strong>
                                        <a href='#'>Designer,</a>
                                        <a href='#'>Developer,</a>
                                        <a href='#'>Web,</a>
                                        <a href='#'>IOS,</a>
                                        <a href='#'>PHP</a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-4 col-lg-12 d-none d-xl-block col-md-6'>
                                <div className='banner-imgs'>
                                    <div className='block-1'>
                                        <img src={banner1} />
                                    </div>
                                    <div className='block-2'>
                                        <img src={banner2} />
                                    </div>
                                    <div className='block-3'>
                                        <img src={banner3} />
                                    </div>
                                    <div className='block-4'>
                                        <img src={banner4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero