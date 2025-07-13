import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'; 

const Footer = () => {
  return (
    <>
   <footer className='footer'>

    <div className='footer-items'>
      <img className='footer-image' src="./Images/logo.png" alt="Logo"/>
      
      <div className="icons-items">
        <Link to="https://www.facebook.com/dynamiceventmanagement.official?mibextid=wwXIfr&rdid=0nOzKKHgK5tilVyq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16qSTSdBUr%2F%3Fmibextid%3DwwXIfr#" target='blank'><i className="fa-brands fa-facebook  nav-link "></i></Link>
        <Link to="https://api.whatsapp.com/send?phone=%2B923366334881&context=AfeJe7utDT7pt26ejAdI4w7NSRLvG_wCspIe2AiAcxLtMDGSinkyQ3NREMVukOYgFs1BzBjgii6c5ro7JI5elVkzYqDpaoNChSaAZuwfG70Ck6I0OMQwYZQRREdUBSnS6G-kvQvaXOt1zkioc8ya97-PvA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawLYqXZleHRuA2FlbQIxMABicmlkETF2N1k4dnFjOGNQWkZNNkpVAR5Sfx1kU0cuNIfXDfYMco-YDtadvQS7WNfXwQH8JstE4T-rBAW8bLooLk5-9A_aem_9wahfUOgfYCTfAHLlVGArQ" target='blank'><i className=" fa-brands fa-whatsapp nav-link "></i></Link>
        <Link to="https://www.instagram.com/accounts/login/?next=%2Fdynamiceventmanagementofficial%2F&source=omni_redirect" target='blank'><i className="fa-brands fa-instagram nav-link "></i></Link>
        </div>
        
    
      
    </div>

    <div className='Com-ser'>
        <div className="company  mb-5 p-3">
           <ul >
            <li ><h3 className='style text-warning '>Company</h3></li>
           <li  className="nav-item style fs-5" ><Link className="nav-link " to="/">Home</Link></li>
                   <li  className=" style fs-5" ><Link className="nav-link " to="/about">About</Link></li>
                   <li  className=" style fs-5" ><Link className="nav-link " to="/service">Services Setup</Link></li>
                   <li  className=" style fs-5" ><Link className="nav-link " to="/events">Events</Link></li>
                   <li  className=" style fs-5" ><Link className="nav-link " to="/packages">Packages</Link></li>
                   <li  className=" style fs-5" ><Link className="nav-link " to="/contact">Contact Us</Link></li>
           </ul>
        </div>

        <div className="Services p-2" style={{marginTop:"10%"}}>
          <ul>
          <li><h3 className='style text-warning '>Services</h3></li>
          <li className='style '> <Link className="nav-link" to="/photographer">Photographer</Link> </li>
          <li className='style '> <Link className="nav-link" to="/weddingvenue">Wedding Venues</Link> </li>
          <li className='style '> <Link className="nav-link" to="/bridalmakeup">Bridal Makeup</Link> </li>
          <li className='style '> <Link className="nav-link" to="/henaartist">Hena Artist</Link> </li>
          <li className='style '> <Link className="nav-link" to="/carrental">Car Rental</Link> </li>
            <li className='style '> <Link className="nav-link" to="/wedsta">Wedding Stationary</Link> </li>
          <li className='style '> <Link className="nav-link" to="/catering">Catering</Link> </li>
          <li className='style '> <Link className="nav-link" to="/soundsys">Sound System</Link> </li>
           <li className='style '><Link className="nav-link" to="/bridalwear">Bridal & Groom Wear</Link> </li>
          <li className='style '> <Link className="nav-link" to="/decor">Decor</Link> </li>
            </ul>
        </div>

        <div className="legal p-3" style={{marginBottom:"22%"}}>
          <ul>
            <li><h3 className='style text-warning '>Legal</h3></li>
            <li className='style '><Link className="nav-link" to="/terms">Terms and Conditions</Link> </li>
            <li className='style '><Link className="nav-link" to="/privacy">Privacy Policy</Link> </li>
          </ul>
        </div>
    </div>

    
     
   </footer>
    <div className=' display bg-warning fs-5 h-auto'>
      <p className='style cus-st p-1 mb-0 mx-3' style={{fontSize:"15px"}}>© DynamicEvents 2025. ALL RIGHTS RESERVED.</p>
      </div>
      </>
  )
}

export default Footer
