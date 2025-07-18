import React from 'react'
import './Mainhead.css'
const Mainhead = ({head , style}) => {
  return (
  
    <div className='main-class text-center shadow' style={{ marginTop:'5%', marginBottom:"2%", padding:'10px',height:'90px',...style}}>
      <h1 className='style p-2' >{head}</h1>
   
    </div>
  )
}

export default Mainhead
