import React from 'react'
import Hero from './Hero'
import JobCatg from './JobCatg'
import Testimonials from './Testimonials'

const Home = () => {
  return (
    <div>
      <Hero />
      <div style={{marginTop:"100px"}}></div>
      <JobCatg />
      <Testimonials />
    </div>
  )
}

export default Home