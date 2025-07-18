import React from 'react'
import { Link } from 'react-router-dom';

import './Service.css'
const Services = ({h1,h2,h3,h4,p1,p2,p3,p4}) => {
  
  return (
    
    <div className=' slider-class' style={{ height:'100%'}}>
    <h2 className='style text-center my-5 p-sm-1 '>{h1}</h2>
    <p className='cus-st style '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{p1} </p>
    <h3 className='style text-center p-sm-1 my-3'>{h2}</h3>
    <p className='cus-st style' style={{  lineHeight :'2',  wordSpacing: '4px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {p2}</p>
    <h3 className='style text-center p-sm-1 my-3'>{h3}</h3>
    <p className='cus-st style' style={{  lineHeight :'2',  wordSpacing: '4px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{p3}</p>
    <h3 className='style text-center my-3 p-sm-1 's>{h4} </h3>
    <p className='cus-st style mb-5' style={{  lineHeight :'2',  wordSpacing: '4px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{p4}</p>
    </div>
  )
}

export default Services
