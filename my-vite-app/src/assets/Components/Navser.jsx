import React from 'react'
import { Link } from 'react-router-dom';
import Mainhead from './Mainhead.jsx'
import Card  from './Card.jsx'
import Conbtn from './Conbtn'
const Navser = () => {
    const data = [
        {
            image:"./Images/s1.png",
            title:"Events & Conferences",
            description:"Dynamic Events is driven to create events that engage, excite and inspire with a diverse range of verticals within corporate events, meetings and conferences."
        },
        {
            image:"./Images/Ven1.jpg",
            title:"Venue Sourcing",
            description:"Dynamic Events is driven to find the best location for your event. Our network and buying power enables our team to find you the best site with exclusive rates for your event."
        },
        {
            image:"./Images/s3.png",
            title:"Group Air",
            description:"Dynamic Events Group & Conference Travel team can assist when 10 or more travelers are required to attend a specific event."
        },
        {
            image:"./Images/t1.jpg",
            title:"Audio",
            description:"Consoles, P.A. Systems, Amplification, and Stage Packages. We deliver high-quality sound systems tailored to your event size and venue, ensuring crystal-clear audio that keeps your audience fully engaged."
        },
        {
            image:"./Images/L4.jpg",
            title:"Lighting",
            description:"Conventional Fixtures, Moving Heads, and Control ConsolesOur expert lighting solutions enhance the visual experience with dynamic effects and ambiance suited for concerts, conferences, and gala events."
        },
        {
            image:"./Images/t2.jpeg",
            title:"SMD",
            description:"Video Walls, Touring Frames, and Pixel Strips. High-resolution LED video walls and display setups to showcase impactful visuals, branding, and live feeds with clarity and precision."
        },
        {
            image:"./Images/t3.jpg",
            title:"Video",
            description:"Cameras, Switching, Projection, and Media Servers. From live video coverage to multimedia presentations, we offer complete video production services using the latest tech for seamless results."
        },
        {
            image:"./Images/t5.jpg",
            title:"Scenic",
            description:"Custom Set Carts, Soft Goods, and Staging. Our scenic department designs and installs unique stage settings, backdrops, and decorative elements that reflect your event’s theme and identity."
        },
        {
            image:"./Images/t6.jpg",
            title:"Rigging",
            description:"Pre-Rig Trussing, Specialty Trussing, and Motors. We provide professional rigging setups to safely support lights, screens, and scenic elements with precision-engineered structures for any venue."
        },
        {
            image:"./Images/t4.jpeg",
            title:"Experienced Crew",
            description:"Skilled technicians bring top-tier support to every event. We ensure flawless service both on and off site."
        },
        { image:"./Images/t8.jpg",
            title:"High Quality Gear",
            description:"We use the latest, high-end equipment for reliable results. Every deployment is tailored for maximum performance."
        },
        {
            image:"./Images/t10.jpg",
            title:"Lighting Product Selection",
            description:"Our expert team designs lighting for concerts, tours, and TV. We offer the best brands in LED and conventional lighting."
        },
        {
            image:"./Images/t6.jpeg",
            title:"Camera & Video Switching",
            description:"Enhance attendee experience with live video switching. We stream, magnify, and broadcast your event seamlessly."
        },
        {
            image:"./Images/t7.jpeg",
            title:"Event Recording",
            description:"Capture your event for archives, posting, or replay. Recordings preserve your success for future growth."
        },
        {
            image:"./Images/t9.jpeg",
            title:"Projection Mapping",
            description:"Transform any venue into a dynamic, immersive canvas. Create stunning visuals across walls, floors, or architecture."
        },
        {
            image:"./Images/t11.jpg",
            title:"Media Servers",
            description:"Powerful servers manage high-quality content seamlessly. Enhance live experiences with smooth, reliable playback."
        },
        
        {
            image:"./Images/t12.jpg",
            title:"Digital Signage",
            description:"From branding to navigation, our LED signage stands out. Share messages clearly using modern, interactive displays."
        },
        {
            image:"./Images/t14.jpg",
            title:"Portable Marquees / Dera & Tent",
            description :"Versatile tents available in various sizes and styles. Ideal for both traditional and contemporary event settings.",
        },
         {
            image:"./Images/Wed1.png",
            title:"Chairs",
            description :"From elegant banquet chairs to modern acrylic seating. Includes tie-back covers and garden-style options.",
        },
         {
            image:"./Images/O6.jpg",
            title:"Sofa Set",
            description :"Comfortable seating with white leatherette finishes. Available in single, 2-seater, and 3-seater options.",
        },
         {
            image:"./Images/t13.jpg",
            title:"VIP Sofa Set",
            description :"Premium wooden sofas in Moroccan and Victorian styles. Available in multiple seating configurations for VIP guests.",
        },
         {
            image:"./Images/s1.png",
            title:"Head Table",
            description :"Brass or wooden finish head tables with matching chairs. Perfect for formal dinners, panels, or ceremonies.",
        },
         {
            image:"./Images/t17.jpg",
            title:"Crockery & Cutlery",
            description :"Buffet, round table, and live station setups available. Stylish and functional dining arrangements for any event.",
        },
         {
            image:"./Images/t22.jpg",
            title:"Portable Washrooms",
            description :"Available in single and double units for guest convenience. Clean, mobile, and ideal for outdoor or remote events.",
        },
         {
            image:"./Images/t15.jpeg",
            title:"Generator",
            description :"Reliable power backup tailored to your event’s load. Ensures smooth operations with adjustable KVA capacity.",
        },
        {
            image:"./Images/t16.jpeg",
            title:"Cooling",
            description:"Includes portable 4-ton AC cabinets and blower trucks. Keeps your event space cool and comfortable year-round.",
        },
         {
            image:"./Images/t18.jpeg",
            title:"Heating",
            description:"Choose between gas patio heaters and electric fans. Perfect for winter events, keeping guests warm outdoors.",
        },
                 {
            image:"./Images/t19.jpeg",
            title:"Fan",
            description:"Options include mist fans and regular electric fans. Effective airflow solutions for indoor and outdoor setups.",
        },
                 {
            image:"./Images/t20.jpeg",
            title:"Monument",
            description:"Custom inauguration stands with velvet curtain & SS plate. Ideal for ribbon-cuttings, launches, or ceremonial reveals.",
        },
                 {
            image:"./Images/t21.jpeg",
            title:"Carpets / Runners",
            description:"Stage setups with planks, iron base, and premium carpets. Adds elegance and structure to your event floor design.",
        },
                 {
            image:"./Images/t26.jpg",
            title:"Q-Pole",
            description:"Classic brass and steel poles for organized crowd flow. Ideal for entrances, queues, and VIP zones.",
        },
                 {
            image:"./Images/t27.jpg",
            title:"Umbrella",
            description:"Stylish white umbrellas for shade and weather control. Perfect for outdoor lounges and guest areas.",
        },
             {
            image:"./Images/Dec1.jpg",
            title:"Decor",
            description:"Elegant setups for corporate and special occasions. Tailored themes to elevate your event ambiance.",
        },
             {
            image:"./Images/t23.jpeg",
            title:"Display",
            description:"Kiosks and stalls for exhibitions or brand presence. Great for product showcases, booths, and info desks.",
        },
             {
            image:"./Images/t24.jpeg",
            title:"Branding & Advertising",
            description:"Backdrops, standees, and signage to boost visibility. Full branding solutions from giveaways to display panels.",
        },
             
          
            
          
      
    ]
    const head="Our Services Setup"
     const style = {
  width :"40%"
   }

  return (
    <div>
     <Mainhead head={head} style={style}/>
     <p className='cus-st style my-3'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; At Dynamic Events, we offer a complete spectrum of event management solutions—ranging from essential support to large-scale coordination—to ensure every aspect of your event is seamless and memorable. Whether you're planning an intimate gathering or a major corporate function, our team handles everything with precision and creativity. From concept to execution, we tailor our services to meet your unique needs, ensuring your event runs smoothly and leaves a lasting impression. At Dynamic Event Management, we provide a full suite of multimedia and technical solutions to bring your event to life with professionalism and impact. From crystal-clear audio systems and immersive lighting designs to high-definition video setups and large-format SMD screens, every detail is handled with precision. We offer scenic staging, custom setups, and expert rigging services to ensure your environment is both visually striking and structurally secure. Whether it’s a small private function or a large-scale production, our technical capabilities guarantee a seamless, high-quality experience.</p>
    <Card data={data}/>
    <Conbtn />
    </div>
  )
}

export default Navser
