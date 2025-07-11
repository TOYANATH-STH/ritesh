import React from 'react'
import Banner from '../Component/UI/Banner'

function About() {
  return (
    <div className=' z-0'>
      <Banner title="about" subtitle="it is my web " description="it is description"/>
      <div className='w-full absolute top-[20rem] text-center'>
        <h1>
          Welcome my website.
          It's my React project.
        </h1>
        <h1>IT me Toyanath Shrestha.I am from Bardaghat 13.Currently study in Bhairawaha Multiple Campus and faculty Bsc.CSIT.</h1>
        

      </div>
    </div>
  )
}

export default About
