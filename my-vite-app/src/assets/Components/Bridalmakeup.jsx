import React from 'react'
import { Link } from 'react-router-dom';
import Slider from './Slider.jsx';
import Mainhead from './Mainhead.jsx';
import Services from './Services.jsx';

const Bridalmakeup = () => {
   const slide=[
    {  src:'./Images/d4.jpg', text: 'Bridal & Groom Makeup' },
    {  src: './Images/d13.jpg', text: 'Bridal & Groom Makeup' },
    {  src: './Images/d14.jpg', text: 'Bridal & Groom Makeup' },
    {  src: './Images/d15.jpg', text: 'Bridal & Groom Makeup' },
    {  src: './Images/t51.jpg', text: 'Bridal & Groom Makeup' },
    {  src: './Images/d9.jpg', text: 'Bridal & Groom Makeup' },
    {  src: './Images/t53.jpg', text: 'Bridal & Groom Makeup' },
    {  src: './Images/t54.jpg', text: 'Bridal & Groom Makeup' },
    ];
   const heading1="Bridal & Groom Makeup Services Across Pakistan";
  const para1="At Dynamic Event Management, we understand that your wedding day look should be more than flawless—it should be unforgettable. Our Bridal & Groom Makeup Services are thoughtfully crafted to highlight your natural beauty, complement your personal style, and ensure you shine in every moment and photograph. We partner with some of Pakistan’s most renowned makeup artists and beauty salons, giving you exclusive access to a trusted network of professionals. From traditional bridal glam and soft, elegant glow to bold, high-fashion statements, our artists specialize in creating looks that reflect your vision. Whether it's a detailed bridal transformation or polished groom grooming, we ensure timely, location-based service so you can feel confident, beautiful, and completely prepared for your big day.";
  const heading2="Makeup Services Available Nationwide";
  const para2="Our professional makeup coordination services are available across all major cities in Pakistan, including Islamabad, Lahore, Karachi, Peshawar, Multan, Faisalabad, Quetta, and more. To make your experience as smooth and stress-free as possible, we offer both at-home and on-site bridal makeup appointments—bringing top-tier beauty services right to your doorstep for maximum comfort and convenience.";
  const heading3="Our Makeup & Styling Services Include";
  const para3="We offer a full range of bridal and groom makeup and styling services designed to make you look and feel your absolute best on every occasion. For brides, we provide expert makeup in a variety of finishes including HD, traditional, matte, dewy, and airbrush—customized to your skin tone, outfit, and event style. Grooms can benefit from professional grooming services, which include facial touch-ups, hairstyling, and shine control to ensure a clean, polished appearance. We also specialize in pre-wedding makeup looks for engagements, Nikkah, Mayun, Mehndi, and receptions, with each look thoughtfully crafted to match the mood and significance of the event. Our hairstyling services range from intricate braids and elegant buns to flowing waves and precise dupatta setting, tailored to complement your overall look. Whether you're drawn to soft glam, regal Mughal-inspired styles, or a contemporary, theme-based appearance, our artists are skilled in creating signature looks that leave a lasting impression. For your convenience, we offer both at-home and salon appointments, connecting you with top-rated makeup professionals in your city. Additional services like nail care, false lashes, colored lens coordination, and jewelry setting are also available to complete your transformation with perfection.";
  const heading4="Why Choose Our Makeup Services";
  const para4="We offer exclusive access to some of the top makeup artists and stylists across Pakistan, ensuring that you receive expert care and high-quality service for your big day. To help you feel fully prepared, we provide trial sessions and personalized consultations tailored to your skin type, event, and style preferences. All products used are safe, skin-friendly, and sourced from internationally trusted beauty brands, so you can enjoy a flawless look without compromising your skin’s health. Our professional teams are trained in maintaining high standards of punctuality and hygiene while delivering polished, camera-ready results. Every aspect of your styling is carefully coordinated to complement your outfit, venue ambiance, lighting setup, and photography requirements—ensuring a cohesive and stunning appearance from every angle. From head to toe and look to feel, we manage your complete beauty experience for a confident, radiant presence on your special day.";
  return (
   <div style={{width:'100%', height:'100%'}}>
      
      <Slider dataset={slide} />
     <Services h1={heading1} h2={heading2} h3={heading3} h4={heading4} p1={para1} p2={para2} p3={para3} p4={para4}/>
    </div>
  )
}

export default Bridalmakeup
