import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = ({home}) => {

   const [isOpen, setIsOpen] = useState(false);

  return (
  <div className=' slider-class Dyn-nav '>
     <div className='display gap-sm-1 bg-warning h-auto  ' >
      <p className='style p-2 mb-0 ' style={{fontSize:'15px'}}>We are one of Top Event Management Companies in Pakistan</p>
      <div className="display gap-sm-1  me-md-5">
              <Link  to="https://www.facebook.com/dynamiceventmanagement.official?mibextid=wwXIfr&rdid=0nOzKKHgK5tilVyq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16qSTSdBUr%2F%3Fmibextid%3DwwXIfr#" target='blank'><i className=" icons fa-brands fa-facebook text-black  "></i></Link>
              <Link to="https://api.whatsapp.com/send?phone=%2B923366334881&context=AfeJe7utDT7pt26ejAdI4w7NSRLvG_wCspIe2AiAcxLtMDGSinkyQ3NREMVukOYgFs1BzBjgii6c5ro7JI5elVkzYqDpaoNChSaAZuwfG70Ck6I0OMQwYZQRREdUBSnS6G-kvQvaXOt1zkioc8ya97-PvA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawLYqXZleHRuA2FlbQIxMABicmlkETF2N1k4dnFjOGNQWkZNNkpVAR5Sfx1kU0cuNIfXDfYMco-YDtadvQS7WNfXwQH8JstE4T-rBAW8bLooLk5-9A_aem_9wahfUOgfYCTfAHLlVGArQ" target='blank'><i className=" icons  fa-brands fa-whatsapp text-black "></i></Link>
              <Link to="https://www.instagram.com/accounts/login/?next=%2Fdynamiceventmanagementofficial%2F&source=omni_redirect" target='blank'><i className=" icons  fa-brands fa-instagram text-black  "></i></Link>
              </div>
    </div>
    <div className="navbar px-3 py-2  gap-md-5 gap-sm-1 ">
        
        <Link to="/"><img className="Nav-image" src="./Images/Dlogo.png" alt="Logo"/></Link>
      
         <button className="bg-warning d-md-none me-5" onClick={() => setIsOpen(!isOpen)}>
          <i className="fa fa-bars"></i>
        </button>

        
        <ul  className="nav gap-3 d-sm-none d-md-flex ">
        <li  className="style fs-5" ><Link className="nav-link " to="/">{home}</Link></li>
        <li  className=" style fs-5" ><Link className="nav-link " to="/about">About</Link></li>
        <li  className="style fs-5" ><Link className="nav-link " to="/service">Services Setup</Link></li>
        <li  className="style fs-5" ><Link className="nav-link " to="/events">Events</Link></li>
        <li  className=" style fs-5" ><Link className="nav-link " to="/packages">Packages</Link></li>
        <li  className=" style fs-5" ><Link className="nav-link " to="/contact">Contact Us</Link></li>
        </ul>

      <div className="dropdown login-hover d-sm-none d-md-flex  ">
      <button className="style btn btn-warning dropdown-toggle px-4 py-2 me-5 fs-5 " style={{width:"80%"}}>
        Login
      </button>
      <ul className="dropdown-menu show-on-hover w-25">
        <li >
          <Link className="dropdown-item btn btn-outline-warning style p-2 text-center " to="/admlog">Admin Login</Link>
        </li>
     
      </ul>
    </div>
     


    </div>
    {isOpen && (
  <div className="d-md-none bg-black  px-4 py-3 border-top">
    <ul className="nav flex-column gap-1">
      <li><Link className="nav-link fs-5" to="/">{home}</Link></li>
      <li><Link className="nav-link fs-5" to="/about">About</Link></li>
      <li><Link className="nav-link fs-5" to="/service">Services Setup</Link></li>
      <li><Link className="nav-link fs-5" to="/events">Events</Link></li>
      <li><Link className="nav-link fs-5" to="/packages">Packages</Link></li>
      <li><Link className="nav-link fs-5" to="/contact">Contact Us</Link></li>
    </ul>
     <div className="dropdown login-hover d-md-none my-3 ">
      <button className="style btn btn-warning dropdown-toggle px-4 py-2 me-5 fs-5 " style={{width:"50%"}}>
        Login
      </button>
      <ul className="dropdown-menu show-on-hover w-25">
        <li >
          <Link className="dropdown-item btn btn-outline-warning style p-2 text-center " to="/admlog">Admin Login</Link>
        </li>
     
      </ul>
    </div>
  </div>
)}
     </div>
  )
}

export default Navbar