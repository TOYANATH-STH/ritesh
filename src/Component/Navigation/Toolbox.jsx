import { Link } from "react-router-dom"
function Toolbox() {
  return (
   
    <div className='flex justify-center items-center gap-20 py-8 px-20'>
      <Link to ={'/'}>Home</Link>
      <Link to ={'/about'}>about</Link>
    </div>


 
    
  )
}

export default Toolbox
