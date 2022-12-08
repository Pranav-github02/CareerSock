import React from 'react'
import Feature from './Feature'
import Hero from './Hero'
import JobCatg from './JobCatg'
import Newsletter from './Newsletter'

const Home = () => {
  return (
    <div>
      <Hero />
      <div style={{marginTop:"100px"}}></div>
      <JobCatg />
      <Feature />
      <Newsletter />
    </div>
  )
}

export default Home