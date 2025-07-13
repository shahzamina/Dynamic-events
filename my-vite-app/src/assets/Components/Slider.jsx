import React, { useEffect, useRef, useState } from 'react';
import './Slider.css'
const Slider = ({dataset,style}) => {
 
  const[Index, setIndex]=useState(0);
  const total=dataset.length;
  useEffect(()=>{
    const interval=setInterval(()=>{
setIndex(prev => (prev + 1) % total);
    },1000)
     return () => clearInterval(interval);
  },[]);
  return (

        <div className="position-relative w-100 " style={{ boxShadow: '0 7px 8px rgba(209, 117, 42, 0.2)', height: '600px', overflow: 'hidden', marginBottom:'50px'}}>
     
        {dataset.map((item,i) => (
          <div
          className={`position-absolute h-100 w-100 d-flex justify-content-center align-items-center transition-opacity ${i === Index ? 'opacity-100' : 'opacity-0'}`}
            key={i}
            style={{
              
            backgroundImage: `url(${item.src})`,
            backgroundSize: 'cover',
            backgroundRepeat:"no repeat",
            backgroundPosition: 'center',
           
            transition: 'opacity 1s ease',
          }}
          >
            
           <h2 className=" style bg-warning text-black text-center p-3" style={{marginTop:'150px',fontSize:'200%',width:'25%', fontWeight:'bold',...style}}> {item.text}</h2>
          </div>
        ))}
      </div>
   

      
   
  )
}

export default Slider
