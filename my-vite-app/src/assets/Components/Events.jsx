import React from 'react'
import { Link } from 'react-router-dom';
import Card from "./Card.jsx";
import Services from "./Services.jsx";
import Conbtn from './Conbtn'
import Mainhead from './Mainhead.jsx';
//import Galcom from './Galcom.jsx';
const Events = () => {
   const data=[
      
         {
        id: 1,
        image : './Images/Co8.jpg',
        title:"Corporate Events",
        },
         {
        id: 2,
        image : './Images/Ven1.jpg',
        title:"Industry Events",
        },
         {
        id: 3,
        image : './Images/Wed8.png',
        title:"Special events",
        },
         {
        id: 4,
        image : './Images/b1.jpg',
        title:"Birthday Events",
        },
         {
        id: 5,
        image : './Images/O6.jpg',
        title:"Aqiqah events",
        },
         {
        id: 6,
        image : './Images/wed9.png',
        title:"Wedding events",
        },
         {
        id: 7,
        image : './Images/Wed1.png',
        title:"Farewell Dinners",
        },
         {
        id: 8,
        image : './Images/Wed3.png',
        title:"Welcome Parties",
        },
         {
        id: 9,
        image : './Images/concert1.jpeg',
        title:"Concerts ",
        },
     
      ]
      const head="Our Events"
    //  const head1="Our Gallery"
      const h2="Corporate Events"
      const p2="At Dynamic Event Management, we partner with organizations to deliver impactful corporate events that drive real results. Our team of experienced planners and strategists enhances attendee engagement through thoughtfully designed programs and seamless logistics. Whether it’s an annual general meeting, leadership summit, product launch, or corporate gala, we tailor every detail to align with your business objectives. Using industry-leading strategies, innovative formats, and professional coordination, we ensure your event delivers strong returns and leaves a lasting impression on your audience."
      const h3="Industry Events"
      const p3="Industry events are more than just gatherings, they are platforms for thought leadership, innovation, and progress. We specialize in organizing events that educate, promote, and influence within specific industries. Whether you're hosting a conference, trade show, seminar, or panel discussion, our team ensures your message is delivered with clarity and impact. By striking the right balance between promotion and persuasion, we help you shape industry conversations, build authority, and spark transformation. With a creative approach and strong technical expertise, we make every industry event sharply effective, highly professional, and truly memorable."
      const h4="Special Events"
      const p4="When you want to create more than just a moment, when you want to build momentumthat’s where our special event planning comes in. From grand openings and award nights to themed galas, brand activations, and innovative launch parties, Dynamic Event Management delivers experiences that make a bold statement. We combine creative vision with proven execution strategies to design ambitious and exciting experiences that capture attention, engage guests, and strengthen brand presence. Every special event we plan is custom-crafted to reflect your message and leave a lasting impact on your audience."
      const h5="Birthday Events"
      const p5="At Dynamic Event Management, we turn birthdays into beautiful, joyful memories. Whether it’s a child’s themed celebration, a milestone birthday, or an intimate gathering with loved ones, we plan every detail to reflect your personality and style. From vibrant décor and customized cakes to engaging entertainment and flawless coordination, we ensure your special day is stress-free and full of delight. Let us bring your birthday vision to life — fun, meaningful, and absolutely unforgettable."
      const h6="Aqiqah Events"
      const p6="At Dynamic Event Management, we honor your child's special milestone with a thoughtfully planned Aqiqah celebration. From elegant venue setups and traditional decor to curated catering and smooth coordination, we ensure your event reflects the spiritual significance and joy of the occasion. Whether it's a small family gathering or a grand event, we handle every detail with care and respect, creating a warm and welcoming experience for your guests. Let us help you celebrate this blessed moment with grace and gratitude."
      const h7="Wedding Events"
      const p7="At Dynamic Event Management, we believe every love story deserves a magical celebration. From intimate nikkah ceremonies to grand wedding receptions, we specialize in creating unforgettable moments tailored to your vision. Our expert team handles everything from venue styling and floral design to catering, entertainment, and seamless coordination — so you can focus on the joy of your big day. With a blend of creativity, cultural understanding, and flawless execution, we turn your dream wedding into a beautifully timeless experience."
      const h8="Farewell Dinners"
      const p8="Farewells mark both an ending and a new beginning and at Dynamic Event Management, we make sure they’re remembered for all the right reasons. Whether you're organizing a farewell for a colleague, teacher, student, or loved one, we create warm and meaningful events that celebrate achievements, memories, and future journeys. From personalized themes and décor to speeches, entertainment, and smooth coordination, we handle every detail with care. Let us help you give a beautiful goodbye one that feels just right."
      const h9="Welcome parties"
      const p9="At Dynamic Event Management, we turn welcome parties into joyful and memorable celebrations. Whether you're greeting a new team member, welcoming home a loved one, or celebrating the arrival of a special guest, we create vibrant events filled with warmth, excitement, and thoughtful details. From themed décor and entertainment to custom catering and smooth coordination, we design experiences that make everyone feel valued and appreciated from the very first moment. Let us help you say “welcome” in unforgettable style."
      const h10="Concerts"
      const p10="At Dynamic Event Management, we specialize in producing high-energy concerts that captivate audiences and elevate performers. From artist bookings and stage design to sound engineering, lighting, crowd management, and on-site coordination, we handle every detail to ensure a seamless and spectacular show. Whether it’s an indoor showcase, outdoor festival, or private musical night, we create concert experiences that leave the crowd cheering for more. Let us bring your musical vision to life with precision, passion, and show-stopping production."
  return (
    <div>
      <Mainhead head={head}/>
       <Card data={data}/>
      <Services h2={h2} h3={h3} h4={h4} p2={p2} p3={p3} p4={p4}/>
    <Services h2={h5} h3={h6} h4={h7} p2={p5} p3={p6} p4={p7}/>
     <Services h2={h8} h3={h9} h4={h10} p2={p8} p3={p9} p4={p10}/>
       
      
     <Conbtn />
    </div>
  )
}

export default Events
