import React from 'react'
import { Link } from 'react-router-dom';
import Slider from './Slider.jsx';
import Mainhead from './Mainhead.jsx';
import Services from './Services.jsx';

const Decor = () => {
    const slide=[
    {  src:'./Images/Dec1.jpg', text: 'Decor Service' },
    {  src: './Images/Dec2.jpg', text: 'Decor Service' },
    {  src: './Images/Dec3.jpg', text: 'Decor Service' },
    {  src: './Images/Dec4.jpg', text: 'Decor Service' },
    {  src: './Images/Dec5.jpg', text: 'Decor Service' },
    ];
  
 const heading1="Event Decoration & Styling Services Across Pakistan";
  const para1="At Dynamic Event Management, we believe that the right décor doesn’t just enhance an event — it defines it. That’s why our premium event decoration services are crafted to turn your celebration into a visually stunning and emotionally memorable experience. Whether you envision a romantic wedding under a canopy of flowers, a vibrant Mehndi night full of color and tradition, a sleek corporate gala with refined aesthetics, or a joyful birthday party with themed décor, we bring that vision to life with unmatched creativity and attention to detail. Our team of experienced designers blends artistic flair with cultural sensitivity, ensuring every element — from stage setup to table arrangements — resonates with your event’s purpose and personality. We work with a wide palette of styles: lush fresh floral arrangements, dramatic LED stage backdrops, elegant draping, intricate themed props, and even luxury décor inspired by international trends. Every design is customized to reflect your personal taste, the event’s mood, and your guests’ experience — while ensuring seamless setup and coordination. With us, your space is more than decorated — it's transformed.";
  const heading2="Decoration Services for All Events, Nationwide";
  const para2="Our event decoration services are tailored for every type of celebration, ensuring that your venue reflects the essence and style of your occasion. For weddings and engagements, we design breathtaking floral stages, elegant bridal seating, thematic entrances, and beautifully styled aisles and backdrops that create a magical atmosphere. For birthdays and baby showers, we bring playful creativity with custom themes, balloon arches, vibrant photo corners, and charming centerpieces that add joy to the celebration. Corporate events benefit from our clean, professional aesthetic with minimalist stage décor, branded banners, podium setups, and booth styling that aligns with your organization’s identity. We also cater to cultural and religious events such as Eid, Milad, Nikkah, and national celebrations, offering thematic setups that honor tradition while maintaining visual appeal. For destination and outdoor events, we transform open spaces with marquee draping, ambient garden lighting, stylish canopy tents, and rooftop styling that make the outdoors feel luxurious and comfortable. Our team operates in Islamabad, Lahore, Karachi, Multan, Faisalabad, Peshawar, Quetta, and throughout Pakistan, ensuring consistent quality and impressive presentation, wherever your event takes place.";
  const heading3="Our Decoration Services Include";
  const para3="Our decoration services cover every detail to create an immersive and visually striking event experience. We offer floral stage designs using both fresh and high-quality artificial flowers, tailored to match your theme and budget. Every setup is customized with thoughtful themes, props, and color palettes, ensuring your event reflects your personality or brand identity. From elegant table settings and centerpieces to beautifully styled guest seating areas, we make sure every corner of your venue feels intentional and inviting. We enhance the ambiance with dramatic backdrops, intelligent lighting, LED displays, custom signage, and entrance arches that leave a lasting first impression. For Mehndi events, we add traditional flair with dholki-themed elements, truck art, colorful umbrellas, and fairy lights that bring energy and joy. We also offer event branding, including printed décor, banners, and personalized monograms to elevate corporate and formal functions. Most importantly, our professional team handles the complete setup and removal, ensuring a stress-free experience from start to finish.";
  const heading4="Why Choose Our Décor Services";
  const para4="Our decoration service is defined by unique, creative, and fully personalized designs that bring your vision to life with flair and elegance. Whether you're going for something simple and graceful or bold and extravagant, we offer a wide variety of theme options to suit every taste and occasion. We use fresh flowers, premium materials, and meticulous detailing to ensure every element looks and feels high-end. Our team guarantees on-time setup, complete support and coordination, and smooth execution so you can focus on enjoying your event. With packages tailored to every budget—from cozy home gatherings to luxurious large-scale events—we make beautiful décor accessible to all. Backed by experienced designers who understand both Pakistani traditions and modern international trends, we blend culture with creativity to deliver truly unforgettable spaces.";

  return (
    <div style={{width:'100%', height:'100%'}}>
      
      <Slider dataset={slide} />
     <Services h1={heading1} h2={heading2} h3={heading3} h4={heading4} p1={para1} p2={para2} p3={para3} p4={para4}/>
    </div>
  )
}

export default Decor
