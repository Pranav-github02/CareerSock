import React from 'react'
import './hero.css'
const Hero = () => {
    return (
        <div className='jobs-hero'>
            <div className='container'>
                <div className='banner-hero'>
                    <div className='block-banner text-center'>
                        <h3>
                            <span>22 Jobs </span>
                            Available Now
                        </h3>
                        <div className='subtitle'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br className='d-none d-xl-block' />
                            incididunt ut labore et dolore magna aliqua.
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero