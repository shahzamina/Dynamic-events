import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = ({home}) => {
  return (
  <div className='Dyn-nav'>
     <div className=' display bg-warning fs-5 h-auto'>
      <p className='style fs-5 p-2 mb-0 mx-3'>We are one of Top Event Management Companies in Pakistan</p>
      <div className="display me-5">
              <Link to="https://www.facebook.com/dynamiceventmanagement.official?mibextid=wwXIfr&rdid=0nOzKKHgK5tilVyq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16qSTSdBUr%2F%3Fmibextid%3DwwXIfr#" target='blank'><i className=" icons fa-brands fa-facebook text-black  "></i></Link>
              <Link to="https://api.whatsapp.com/send?phone=%2B923366334881&context=AfeJe7utDT7pt26ejAdI4w7NSRLvG_wCspIe2AiAcxLtMDGSinkyQ3NREMVukOYgFs1BzBjgii6c5ro7JI5elVkzYqDpaoNChSaAZuwfG70Ck6I0OMQwYZQRREdUBSnS6G-kvQvaXOt1zkioc8ya97-PvA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawLYqXZleHRuA2FlbQIxMABicmlkETF2N1k4dnFjOGNQWkZNNkpVAR5Sfx1kU0cuNIfXDfYMco-YDtadvQS7WNfXwQH8JstE4T-rBAW8bLooLk5-9A_aem_9wahfUOgfYCTfAHLlVGArQ" target='blank'><i className=" icons  fa-brands fa-whatsapp text-black "></i></Link>
              <Link to="https://www.instagram.com/accounts/login/?next=%2Fdynamiceventmanagementofficial%2F&source=omni_redirect" target='blank'><i className=" icons  fa-brands fa-instagram text-black  "></i></Link>
              </div>
    </div>
    <div className="navbar display px-3 py-2  gap-5">
        
        <Link to="/"><img className="Nav-image" src="./Images/Dlogo.png" alt="Logo"/></Link>
      
        <ul  className="nav">
        <li  className="nav-item style fs-5" ><Link className="nav-link " to="/">{home}</Link></li>
        <li  className="nav-item style fs-5" ><Link className="nav-link " to="/about">About</Link></li>
        <li  className="nav-item style fs-5" ><Link className="nav-link " to="/service">Services Setup</Link></li>
        <li  className="nav-item style fs-5" ><Link className="nav-link " to="/events">Events</Link></li>
        <li  className="nav-item style fs-5" ><Link className="nav-link " to="/packages">Packages</Link></li>
        <li  className="nav-item style fs-5" ><Link className="nav-link " to="/contact">Contact Us</Link></li>
        </ul>

      <div className="dropdown login-hover">
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
     </div>
  )
}

export default Navbar