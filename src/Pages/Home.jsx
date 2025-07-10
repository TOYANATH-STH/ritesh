import React from 'react'
import Banner from '../Component/UI/Banner'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate()
  const transfer=()=>{
navigate('/about') 
 }
  return (
  <div className=''>
  <Banner title="Home is my hokme" subtitle="it is my web " description="it is  a description"/>
  <button className='p-10 bg-black text-white border-2 border-red-900' onClick={()=>{
    transfer()
  }}>
  About us 
  </button>
  </div>)
}

export default Home
