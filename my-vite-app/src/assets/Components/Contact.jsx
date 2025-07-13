import React from 'react'
import { Link } from 'react-router-dom'
import Formsubmit from "./Formsubmit.jsx";
import Card from './Card.jsx';
import Mainhead from './Mainhead.jsx';

const Term = () => {
   const Data  = [
      {
        id: 1,
        icon : "fab fa-facebook",
        title:"Facebook",
        description : "Follow us on Facebook for announcements, event highlights, and behind-the-scenes updates.",
        link: "https://www.facebook.com/dynamiceventmanagement.official?mibextid=wwXIfr&rdid=0nOzKKHgK5tilVyq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16qSTSdBUr%2F%3Fmibextid%3DwwXIfr#",
        target:"blank",
      },
      {
        id: 2,
        icon: "fab fa-instagram",
        title: "Instagram",
description : "Explore our event gallery on Instagram from stunning decor to memorable moments.",
        
        link: "https://www.instagram.com/accounts/login/?next=%2Fdynamiceventmanagementofficial%2F&source=omni_redirect",
        target:"blank",
      },
      {
        id: 3,
        icon: "fab fa-whatsapp",
        title: "Whatsapp",
        description : "Connect with us directly on WhatsApp for quick inquiries, quotes, or bookings.",
        link: "https://api.whatsapp.com/send?phone=%2B923366334881&context=AfeJe7utDT7pt26ejAdI4w7NSRLvG_wCspIe2AiAcxLtMDGSinkyQ3NREMVukOYgFs1BzBjgii6c5ro7JI5elVkzYqDpaoNChSaAZuwfG70Ck6I0OMQwYZQRREdUBSnS6G-kvQvaXOt1zkioc8ya97-PvA&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwY2xjawLYqXZleHRuA2FlbQIxMABicmlkETF2N1k4dnFjOGNQWkZNNkpVAR5Sfx1kU0cuNIfXDfYMco-YDtadvQS7WNfXwQH8JstE4T-rBAW8bLooLk5-9A_aem_9wahfUOgfYCTfAHLlVGArQ",
        target:"blank",
      },
     
    ];
      

  const contact="Contact Form"
  const name="Name"
  const email="Email"
  const phone="Phone Number"
  const com="Comment (optional)"
  const head1="Contact Us"
  const head2= "Feel free to Contact Us"
  return (
    <div className='position-relative w-100'>
      <Mainhead head={head1}/>
      <Formsubmit h={contact} name={name} email={email} phone={phone} com={com}/>
      <Card h1={head2} data={Data}/>
    </div>
  )
}

export default Term
