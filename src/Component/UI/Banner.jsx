import { useLocation } from "react-router-dom"

function Banner() {
  const Location=useLocation()
  console.log(Location)
  return (
   <div>
    <img className="h-full w-full" src='https://images.unsplash.com/photo-1751013781844-fa6a78089e49?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'alt="" />
   </div>
        
  )
}

export default Banner
