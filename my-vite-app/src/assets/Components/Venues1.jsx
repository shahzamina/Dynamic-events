import React from 'react'
import { Link } from 'react-router-dom';
import Slider from './Slider.jsx';
import Mainhead from './Mainhead.jsx';
import Services from './Services.jsx';

const Venues1 = () => {
  const slide=[
    {  src:'./Images/Ven1.jpg', text: 'Venues' },
    {  src: './Images/Ven2.jpg', text: 'Venues' },
    {  src: './Images/Ven4.jpg', text: 'Venues' },
    {  src: './Images/Wed10.png', text: 'Venues' },
    {  src: './Images/Wed11.png', text: 'Venues' },
    {  src: './Images/Ven3.jpg', text: 'Venues' },
    {  src: './Images/Ven15.jpg', text: 'Venues' },
    ];
 

  const heading1="Event & Wedding Venues Across Pakistan";
  const para1="At Dynamic Event Management, we believe that a venue is more than just a setting—it’s where memories are made and stories come to life. That’s why we offer a wide range of top-tier venues throughout Pakistan, thoughtfully selected to suit every budget, vision, and cultural tradition. Whether you're organizing a lavish wedding in Lahore, a corporate launch in Karachi, a scenic destination event in Hunza or Murree, or an intimate nikkah ceremony in Islamabad, we make it effortless to find a space that perfectly aligns with your dream. Our diverse venue options include everything from grand banquet halls and luxury hotels to serene garden marquees and beachside resorts. For those looking for something more unique, we also offer access to heritage forts, cultural venues, mountain retreats, and private farmhouses. With both indoor and outdoor settings available, we can accommodate events of all sizes and styles. Backed by strong nationwide partnerships and deep industry expertise, we open doors to exclusive locations that combine beauty, convenience, and atmosphere—ensuring your event is both seamless and unforgettable.";
  const heading2="Venue Availability in All Major Regions";
  const para2="We proudly offer venue options across all major regions of Pakistan, including cities like Lahore, Rawalpindi, Multan, Faisalabad, and Bahawalpur in Punjab; Karachi, Hyderabad, and Sukkur in Sindh; Peshawar, Abbottabad, and Swat in Khyber Pakhtunkhwa; and Quetta and Gwadar in Balochistan. We also cater to stunning destinations in Gilgit-Baltistan and AJK such as Hunza, Skardu, Muzaffarabad, and Neelum Valley, along with the Islamabad Capital Territory. To make your planning stress-free, we provide comprehensive venue support—from guided tours and booking assistance to theme-based setups, technical arrangements, seating plans, and guest coordination. Our team collaborates with you every step of the way to ensure the venue not only aligns with your vision but also elevates your event with smooth logistics and sophisticated styling.";
  const heading3="Our Venue Services Include";
  const para3="We offer a wide and versatile selection of event spaces—whether you're looking for indoor or outdoor venues, urban or rural settings, or modern elegance versus traditional charm. Every detail is tailored to your event, with custom décor and stage setups designed to reflect your chosen theme and style. Our team handles seamless coordination with venue management and all service providers, including catering, sound, lighting, and décor, ensuring every element comes together beautifully. On the day of your event, dedicated on-site managers provide hands-on support to guarantee smooth execution. From weddings, engagements, and corporate events to birthdays, anniversaries, and cultural programs, we cover it all. Plus, our flexible packages are designed to suit a range of budgets—from refined simplicity to full-scale luxury experiences.";
  const heading4="Why Choose Us";
  const para4="At Dynamic Event Management, we offer nationwide coverage with access to some of the most premium and exclusive venues across Pakistan. Our process begins with a personalized consultation to understand your unique style, preferences, and event requirements. From there, our expert planners handle every detail—ensuring seamless coordination and eliminating last-minute stress. We pride ourselves on transparent pricing, flexible packages, and streamlined vendor management, so you can stay focused on the joy of the occasion. Our unwavering commitment is to make your venue as breathtaking as the event itself. Whether you dream of a romantic hilltop setting, a regal traditional theme, or a sleek modern venue with all the latest amenities, Dynamic Event Management turns your vision into reality—anywhere in Pakistan.";
  return (
    <div style={{width:'100%', height:'100%'}}>
      
      <Slider dataset={slide} />
     <Services h1={heading1} h2={heading2} h3={heading3} h4={heading4} p1={para1} p2={para2} p3={para3} p4={para4}/>
    </div>
  )
}

export default Venues1
