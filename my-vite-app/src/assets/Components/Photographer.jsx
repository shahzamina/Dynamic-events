import React from 'react'
import { Link } from 'react-router-dom';
import Slider from './Slider.jsx';
import Mainhead from './Mainhead.jsx';
import Services from './Services.jsx';
const Photographer = () => {
    const slide=[
    {  src:'./Images/Photo1.png', text: 'Photography' },
    {  src: './Images/Photo2.png', text: 'Photography' },
    {  src: './Images/Photo9.jpg', text: 'Photography' },
    {  src: './Images/Photo10.jpg', text: 'Photography' },
    {  src: './Images/Photo4.jpg', text: 'Photography' },
    ];
  const heading1="Photography & Videography Services";
  const para1="At Dynamic Event Management, we don not just take pictures, we capture stories, emotions, and once-in-a-lifetime moments that deserve to be remembered forever. Our professional photography and videography services are designed to turn your most important days into beautifully preserved memories whether you're tying the knot, launching a brand, celebrating a birthday, or hosting a cultural or corporate event. We work with a team of highly skilled, creative, and experienced photographers and videographers who specialize in both traditional and modern styles.From candid moments full of emotion to cinematic highlight reels that feel like movie scenes, we ensure your memories are captured with passion, precision, and artistic excellence anywhere in Pakistan.";
  const heading2="Nationwide Coverage for Every Kind of Event";
  const para2="We offer professional photography and videography services for a wide range of events. For weddings and engagements, we capture candid moments, cinematic videos, and conduct bridal and couple shoots that preserve your most cherished memories. For birthdays and anniversaries, we focus on joyful candid moments, venue decorations, and beautiful family portraits. Our corporate event coverage includes seminars, conferences, product launches, and team photography, all delivered with a professional touch. We also specialize in cultural and religious events such as Mehndi, Mayun, Barat, Walima, Eid celebrations, and Nikkah ceremonies, ensuring every traditional detail is highlighted. Additionally, we provide destination event coverage with custom shoots in scenic locations like Hunza, Murree, Skardu, Karachi Beach, and many more.Our services are available in Islamabad, Lahore, Karachi, Multan, Faisalabad, Peshawar, Quetta, and across Pakistan, with travel-ready teams and flexible packages tailored to meet your event’s unique needs — whether it’s in your city or a dream destination.";
  const heading3="Our Photography & Videography Services Include";
  const para3="We offer a full range of media services tailored to your event. Our photography includes candid, traditional, and documentary-style coverage to suit your preferences. Our cinematic videography features slow-motion, drone footage, and crisp 4K quality to bring your moments to life. We also provide pre-event shoots such as bridal, couple, family, and product sessions for personalized storytelling. Every project includes professionally edited albums, reels, trailers, and full-length event videos. Our team uses high-end gear including DSLRs, mirrorless cameras, drones, gimbals, and advanced lighting setups. We pride ourselves on a fast turnaround time for both digital and printed material, ensuring you receive your memories quickly and beautifully preserved.";
  const heading4="Why Choose Our Photo/Video Team";
  const para4="Our services are available nationwide, with experienced, multilingual teams ready to capture your moments wherever you are. We offer fully customizable packages to fit every budget without compromising quality. Using the latest equipment and creative editing techniques, we deliver cinematic results that truly stand out. We operate with complete privacy and respect, ensuring sensitivity during your most personal moments. With transparent pricing, flexible hours, and open, friendly communication, you’ll always feel in control. Plus, our dedicated team ensures smooth coordination before and during your event for a seamless experience from start to finish.";
  return (
    
    <div>
    <Slider dataset={slide} />
    <Services h1={heading1} h2={heading2} h3={heading3} h4={heading4} p1={para1} p2={para2} p3={para3} p4={para4}/>
    </div>
   
  )
}

export default Photographer
