import React from 'react'
import './newsletter.css'
import left from './media/newsletter-left.png'
import right from './media/newsletter-right.png'
const Newsletter = () => {
    return (
        <div className='newsletter'>
            <div className='container'>
                <div className='box-newsletter'>
                    <div className='row'>
                        <div className='col-xl-3 col-12 text-center d-none d-xl-block'>
                            <img src={left} />
                        </div>
                        <div className='col-lg-12 col-xl-6 col-12'>
                            <h2 className='text-center title'>
                                New Things Will Always<br /> Update Regularly
                            </h2>
                            <div className='newsletter-form'>
                                <form>
                                    <input type='email' placeholder="Enter your email here" />
                                    <button className='btn apply-icon'>Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div className='col-xl-3 col-12 text-center d-none d-xl-block'>
                            <img src={right} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter