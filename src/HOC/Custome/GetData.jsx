import axios from 'axios'
import  { useEffect,useState } from 'react'

function GetData() {
     const [data,setData]=useState([])
  const getData=()=>{
    try {
      axios.get('https://gastro-backend.e-aribt.com/api/services').then(res=>{
      console.log(res.data.data)
      setData([...res.data.data])
      }).catch(err=>{
        console.log(err)
      })
      
    } catch (error){
      console.error(error)
    }
    
  }
  useEffect(()=>{
    getData()
  },[])
  return data
}

export default GetData