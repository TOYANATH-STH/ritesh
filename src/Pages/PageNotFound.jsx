import React, { useState } from 'react'

function PageNotFound(){

const[b,setb]=useState(0);
const[clickHere,setClickHere] =useState("");
  return (
    <div>
     
      {b}
      <div onClick={()=>
        setb(b+1)
      }>change number</div>
      <button onClick={()=>{
        setClickHere("click here")
      }}> click</button>
      <div>{clickHere}</div>
    </div>
  )
}


export default PageNotFound
