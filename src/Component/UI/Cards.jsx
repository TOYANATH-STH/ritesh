import React from 'react'
import { useNavigate } from 'react-router-dom'
function Cards({title,description,image}) {
    const navigate=useNavigate()
  return (
    <div className='grid gap-2 shadow-md border border-grey-100'>
      <img src={image} className='h-74 w-ful object-cover' />
      <div className='p-4 flex-col gap-4'>
        <h1 className='text-x1 font-semibold capitalize'>{title}
        </h1>
        <div className='line-clamp-3'> {description}</div>
        <div onClick={()=>{
            navigate(`/card/${title}`)
        }} className='border border-blue-400 w-fit text-blue-400 h-fit px-10 py-2 rounded-md'>Read more</div>
      </div>
    </div>
  )
}

export default Cards
