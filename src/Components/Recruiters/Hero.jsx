import React from 'react'
import './hero.css'
const Hero = () => {
    const chars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    return (
        <div className='recruiters-hero'>
            <div className='container'>
                <div className='banner-hero'>
                    <div className='banner-block text-center'>
                        <h3>Browse Companies</h3>
                        <div className='subtext'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br className='d-none d-xl-block' />
                            incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className='list-char'>
                            <ul>
                                {
                                    chars.map(char => {
                                        return (
                                            <li><a>{char}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero