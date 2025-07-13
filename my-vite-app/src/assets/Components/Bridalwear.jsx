import React from 'react'
import { Link } from 'react-router-dom';
import Slider from './Slider.jsx';
import Mainhead from './Mainhead.jsx';
import Services from './Services.jsx';

const Bridalwear = () => {
  const slide=[
    {  src:'./Images/d2.jpg', text: 'Bridal & Groom Wear' },
    {  src: './Images/d3.jpg', text: 'Bridal & Groom Wear' },
    {  src: './Images/d5.jpg', text: 'Bridal & Groom Wear' },
    {  src: './Images/d6.jpg', text: 'Bridal & Groom Wear' },
    {  src: './Images/d7.jpg', text: 'Bridal & Groom Wear' },
   {  src: './Images/d8.jpg', text: 'Bridal & Groom Wear' },
   {  src: './Images/d9.jpg', text: 'Bridal & Groom Wear' },
   {  src: './Images/d10.jpg', text: 'Bridal & Groom Wear' },
    {  src: './Images/d11.jpg', text: 'Bridal & Groom Wear' },
  ];
  const heading1="Bridal & Groom Wear Curation Across Pakistan";
  const para1="At Dynamic Event Management, we believe that the bride and groom deserve to look as unforgettable as the day itself. That’s why our Bridal & Groom Wear services go beyond just clothing — they’re about curating a style that tells your story. Whether you’re dreaming of a traditional, cultural ensemble or a bold, modern statement, we offer exclusive access to handpicked wedding collections that match your theme, personality, and celebration. Working closely with some of Pakistan’s top designers, boutiques, and expert tailors, we bring you a premium selection — from intricately embroidered lehengas and elegant gowns to majestic sherwanis and custom-tailored suits. Our team provides end-to-end styling support, helping with fittings, accessories, and outfit coordination for a seamless, stress-free experience. Whether it’s your Mehndi, Baraat, or Valima, we make sure both bride and groom walk in with confidence, class, and complete style.";
  const heading2="Available Nationwide & For Destination Weddings";
  const para2="Our wedding styling and attire services are available nationwide and perfectly suited for both local and destination weddings. We proudly assist clients in Islamabad, Lahore, Karachi, Multan, Faisalabad, Peshawar, Quetta, and virtually every region across Pakistan, ensuring a seamless and personalized experience no matter where you're based. From styling consultations and outfit selections to delivery coordination and fitting appointments, we handle it all either in person or remotely. Whether you're planning your event in your hometown or at a scenic destination, our team ensures timely support, expert guidance, and a stress-free process to make you look your absolute best when it matters most.";
  const heading3="Our Bridal & Groom Wear Services Include";
  const para3="We offer a complete and curated wardrobe experience for both brides and grooms, covering every element of wedding styling. Our Bridal Wear Selection includes a wide range of traditional and contemporary options such as lehengas, maxis, gowns, sarees, shararas, and angrakhas tailored to suit different ceremonies and personal tastes. For grooms, we provide an equally diverse lineup featuring sherwanis, prince coats, kurta shalwars, waistcoats, and turbans to create a regal, well-coordinated look.Beyond the outfits, we take care of complete styling, including dupatta draping, accessories, footwear, and jewelry coordination. Our team specializes in theme-based wardrobe curation, matching your attire with event décor, seasonal palettes, or cultural motifs. We also offer designer and boutique recommendations, whether you’re looking for luxury rentals or custom-stitched ensembles. With bridal trial sessions, groom fittings, and on-demand adjustments, we ensure your outfits fit perfectly and reflect your vision. Plus, we help you plan coordinated looks for your Mehndi, Barat, Walima, and pre-wedding shoots to ensure stunning visuals across your wedding journey.";
  const heading4="Why Choose Our Wardrobe Curation Service";
  const para4="Save time and reduce wedding planning stress by working with pre-vetted designers and trusted vendors who understand your vision. Whether you're looking for trending bridal or groom looks, there are stylish options available for every budget. Experienced styling experts are on hand to guide you through outfit matching, layering techniques, and cultural detailing to ensure a cohesive and meaningful look. Scheduling fittings, pickups, and deliveries is made easy and convenient, so you can focus on enjoying the moment. From coordinating family outfits and bridesmaids/groomsmen ensembles to planning picture-perfect photoshoot looks, you’ll receive personalized support every step of the way—so you feel confident, comfortable, and radiant on your big day.";

  return (
    <div style={{width:'100%', height:'100%'}}>
      
      <Slider dataset={slide} />
     <Services h1={heading1} h2={heading2} h3={heading3} h4={heading4} p1={para1} p2={para2} p3={para3} p4={para4}/>
      
  
    </div>
  )
}

export default Bridalwear
