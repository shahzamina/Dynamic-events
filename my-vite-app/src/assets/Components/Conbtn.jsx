import React from 'react'
import { Link } from 'react-router-dom';

const Conbtn = () => {
  return (
    <div  className="d-flex justify-content-center my-5" style={{marginRight:"10%"}}>
      <Link to="/contact"> <button  className='style fs-5 fw-bold   btn btn-warning text-center p-4 ' style={{width:"200%"}}>Contact Us</button></Link>
    </div>
  )
}

export default Conbtn
