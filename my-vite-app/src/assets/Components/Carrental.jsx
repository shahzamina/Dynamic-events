import React from 'react'
import { Link } from 'react-router-dom';
import Slider from './Slider.jsx';
import Mainhead from './Mainhead.jsx';
import Services from './Services.jsx';

const Carrental = () => {
   const slide=[
    {  src:'./Images/t62.jpg', text: 'Car Rental' },
    {  src: './Images/Cr1.jpeg', text: 'Car Rental' },
    {  src: './Images/Cr7.jpeg', text: 'Car Rental' },
    {  src: './Images/Cr2.jpeg', text: 'Car Rental' },
    {  src: './Images/Cr8.jpeg', text: 'Car Rental' },
    ];
  const heading1="Luxury & Event Car Rental Services Across Pakistan";
  const para1="Arrive in style and comfort with Dynamic Event Management’s premium car rental services, meticulously crafted to bring elegance, convenience, and sophistication to your special occasions. Whether you're planning the grand entrance of a bride and groom, arranging the arrival of VIP guests, or organizing group transportation for an entire wedding party, we offer reliable, luxurious, and fully coordinated car rental solutions tailored to events of every scale. Our service features a diverse fleet of high-end vehicles, each driven by professional chauffeurs and maintained to the highest industry standards. From timeless vintage classics that exude charm to sleek modern luxury cars, and even unique options like traditional rickshaws or executive sedans — we ensure that every ride not only fits your event’s theme but also enhances the overall experience. With Dynamic Event Management, transportation becomes more than just travel — it becomes a memorable part of your celebration.";
  const heading2="Available Nationwide Across All Major Cities";
  const para2="Dynamic Event Management proudly offers premium car rental and transport services across the entire country. Whether you're hosting an event in the vibrant cityscapes of Islamabad, Lahore, Karachi, or in culturally rich hubs like Peshawar, Multan, Faisalabad, and Quetta, our services are readily available to ensure your guests arrive in style and comfort. We specialize in providing seamless transportation solutions not only for local events but also for destination weddings and multi-day celebrations, where coordination, reliability, and punctuality are key. With a strong operational network and logistics team, we are equipped to handle events in urban centers as well as remote or scenic wedding venues throughout Pakistan. From managing airport pickups for out-of-town guests to organizing elegant convoys for bridal and groom parties, we offer fully supported, end-to-end transport coordination. Wherever your event takes place, we bring our signature professionalism and luxury experience right to your doorstep.";
  const heading3="Our Car Rental Services Include";
  const para3="At Dynamic Event Management, we offer a wide array of luxury and themed transportation options to suit every event need. Our Bridal and Groom car selection features top-tier models such as BMW, Audi, Mercedes, Lexus, Limousines, and Convertibles — perfect for making a grand entrance. For those seeking a touch of tradition or royalty, we provide Vintage Cars that add timeless elegance to any wedding theme. Clients can also choose from uniquely cultural arrival options, including decorated wedding rickshaws, horse carriages (Baggi), and other customized setups for a truly memorable experience. For practical and high-end travel needs, we offer Luxury SUVs and executive sedans ideal for VIPs or family transportation. Our airport transfer and guest transport services ensure seamless travel for out-of-town attendees, while Coaster vans and Hiace vehicles are available for efficient group or staff movement. To add a personal touch, we also offer optional car decoration services featuring fresh flowers, ribbons, and customized signage, making every vehicle a part of your celebration’s aesthetic.";
  const heading4="Why Choose Our Car Rental Services";
  const para4="At Dynamic Event Management, we go beyond basic transport — we deliver a premium experience tailored to your event's scale and style. Our extensive fleet offers a wide range of vehicles to match every budget and aesthetic, from elegant sedans to luxury limousines. All rides are operated by professional, uniformed chauffeurs known for their punctuality and courteous service. Each vehicle is thoroughly cleaned, air-conditioned, and maintained to top standards, ensuring comfort and reliability throughout your journey. We specialize in custom arrival planning, coordinating closely with your event schedule to guarantee flawless timing. For weddings, we offer complimentary decoration packages for bridal cars upon request, complete with floral arrangements, ribbons, or signage. Whether your celebration spans multiple days or locations, our team provides seamless logistics support, making transportation stress-free and stylish from start to finish.";
  
  return (
     <div style={{width:'100%', height:'100%'}}>
      
      <Slider dataset={slide} />
     <Services h1={heading1} h2={heading2} h3={heading3} h4={heading4} p1={para1} p2={para2} p3={para3} p4={para4}/>
    </div>
  )
}
export default Carrental
