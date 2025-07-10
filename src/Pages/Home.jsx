import React from 'react'
import Banner from '../Component/UI/Banner'
import { useNavigate } from 'react-router-dom'
import Cards from '../Component/UI/Cards'
import axios from 'axios'
function Home() {
  
  const carddata=[
    {
      title:"HTML",
      description:"HTML (Hypertext Markup Language) is a text-based approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage.``",
      image:"https://images.unsplash.com/photo-1632882765546-1ee75f53becb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
      title:"CSS",
      description:"Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
      image:"https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
     {
      title:"Javascript",
      description:"JavaScript is the programming language of the web.It can update and change both HTML and CSS.It can calculate, manipulate and validate data.",
      image:"https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
