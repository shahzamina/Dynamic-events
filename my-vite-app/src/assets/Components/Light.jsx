import React from 'react'
import { Link } from 'react-router-dom';
import Slider from './Slider.jsx';
import Mainhead from './Mainhead.jsx';
import Services from './Services.jsx';

const Light = () => {
   const slide=[
    {  src:'./Images/L6.jpg', text: 'Lighting Service' },
    {  src: './Images/L7.jpg', text: 'Lighting Service' },
    {  src: './Images/Light.png', text: 'Lighting Service' },
    {  src: './Images/L1.jpg', text: 'Lighting Service' },
    
    ];
  const heading1="Lighting & Ambiance Design Across Pakistan";
  const para1="At Dynamic Event Management, we understand that lighting is more than just a technical element — it's what brings emotion, atmosphere, and depth to your event. Thoughtfully designed lighting can transform any space into something unforgettable, highlighting key moments and making every photo more enchanting. That's why we offer professional lighting and ambiance solutions tailored to your event's unique mood, theme, and venue. Our expert lighting designers work closely with you to craft experiences that match your vision — whether it’s the warm, whimsical glow of fairy lights for a Mehndi night, the intimate flicker of candles at a wedding reception, bold uplighting for a grand corporate event, or dynamic LED stage lighting for birthdays and concerts. With creativity and precision, we ensure that your event not only looks stunning but feels extraordinary.";
  const heading2="Lighting & Ambiance Design Across Pakistan";
  const para2="Our lighting and ambiance services are designed to transform every type of event with creativity and precision. For weddings and receptions, we offer elegant chandeliers, delicate fairy lights, and soft ambient setups that create a romantic atmosphere. Mehndi and dholki nights come alive with warm, colorful lighting, lanterns, string lights, and festive disco arrangements that energize the celebration. For corporate events, we provide sophisticated lighting solutions like spotlights, LED walls, stage washes, and brand-aligned color schemes to enhance professionalism and visual impact. Birthdays and private parties get a personalized touch with neon signage, playful colored lights, and custom monogram projections. Meanwhile, our outdoor and destination events feature thoughtfully placed pathway lights, glowing garden setups, and rooftop ambiance that elevate open-air experiences. We proudly serve clients across Islamabad, Lahore, Karachi, Peshawar, Multan, Faisalabad, Quetta, and beyond — offering nationwide coverage with a blend of technical expertise, artistic creativity, and full setup support for a flawless, mood-enhancing event.";
  const heading3="Our Lighting & Ambiance Services Include";
  const para3="We offer a comprehensive range of lighting solutions to enhance the atmosphere of your event, whether it's indoors or under the stars. Our services include dynamic stage lighting with moving heads, spotlights, and LED screens for impactful presentations or performances. For a warm and inviting outdoor ambiance, we provide fairy lights, Edison bulbs, and string lighting ideal for garden or rooftop settings. To add elegance and sophistication, we offer decorative chandeliers, uplighting, and illuminated aisle setups. For more intimate or thematic vibes, we incorporate candle arrangements, lanterns, and vintage lighting props that create a cozy and timeless feel. Our ambient lighting can also be synchronized with your event’s music or schedule to heighten emotional moments and transitions. For a modern and personal touch, we design and install monogram projections, LED backdrops, and custom neon quotes or name signage. Every element — from setup to takedown — is professionally handled by our experienced team, ensuring a seamless and stress-free experience.";
  const heading4="Why Choose Our Lighting & Ambiance Design";
  const para4="At Dynamic Event Management, we offer lighting solutions that are not only visually stunning but also thoughtfully personalized to your event’s theme, mood, and venue layout. Our expert team uses high-end equipment with reliable backup systems to ensure uninterrupted performance throughout your celebration. Whether you’re going for soft romance or dramatic flair, our color-coordinated setups and programmable lighting effects are tailored to bring your vision to life. Safety and professionalism are central to our service — from secure wiring to real-time monitoring during the event. We cater to all budgets, offering flexible options from elegant minimalism to high-end luxury installations. Beyond setting the mood, our lighting is designed to elevate your photo and video quality and create an immersive atmosphere your guests will never forget.";
  return (
 <div style={{width:'100%', height:'100%'}}>
      
      <Slider dataset={slide} />
     <Services h1={heading1} h2={heading2} h3={heading3} h4={heading4} p1={para1} p2={para2} p3={para3} p4={para4}/>
    </div>
  )
}

export default Light
