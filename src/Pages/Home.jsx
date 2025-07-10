import React from 'react'
import Banner from '../Component/UI/Banner'
import { useNavigate } from 'react-router-dom'
import Cards from '../Component/UI/Cards'
import axios from 'axios'
function Home() {
  
  const carddata=[
    {
      title:"carddata1",
      description:"This is carddata 1",
      image:"https://images.unsplash.com/photo-1751013781844-fa6a78089e49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
      title:"carddata 2",
      description:"This is carddata 2",
      image:"https://images.unsplash.com/photo-1751013781844-fa6a78089e49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
      title:"carddata3",
      description:"This is carddata 3",
      image:"https://images.unsplash.com/photo-1751013781844-fa6a78089e49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]
  const getData=()=>{
    try {
      axios.get('https://gastro-backend.e-aribt.com/api/services').then(res=>{
      console.log(res)
      }).catch(err=>{
        console.log(err)
      })
      
    } catch (error){
      console.error(error)
    }
    
  }
  return (
<div>
  <Banner title="home" subtitle="it is a home" description="it is a description" />

  <div className='grid grid-cols-3 gap-6 w-10/12 mx-auto mt-10'>
  {
    carddata.map((val,i)=>{
      return <Cards title={val.title} description={val.description} image={val.image} key={i} />
      

    })
  }
  </div>
</div>
  )
}

export default Home
