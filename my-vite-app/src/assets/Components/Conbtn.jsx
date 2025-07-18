import React from 'react'
import { Link } from 'react-router-dom';

const Conbtn = () => {
  return (
    <div  className=" your-class  d-flex justify-content-sm-center justify-content-md-center my-5" >
      <Link  style={{ maxWidth: '300px' }} to="/contact"> <button  className='style fs-5 fw-bold   btn btn-warning text-center p-sm-3 p-md-4 w-100'>Contact Us</button></Link>
    </div>
  )
}

export default Conbtn
