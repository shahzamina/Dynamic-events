import React from 'react'
import { Link } from 'react-router-dom';
import Slider from './Slider.jsx';
import Mainhead from './Mainhead.jsx';
import Services from './Services.jsx';

const Catering = () => {
  const slide=[
    {  src: './Images/C8.jpg', text: 'Catering Service' },
    {  src: './Images/C7.jpg', text: 'Catering Service' },
    {  src: './Images/C6.jpg', text: 'Catering Service' },
    {  src: './Images/C5.jpg', text: 'Catering Service' },
    {  src: './Images/C4.jpg', text: 'Catering Service' },
    {  src: './Images/C3.jpg', text: 'Catering Service' },
    {  src: './Images/C2.jpg', text: 'Catering Service' },
    ];
  const heading1="Catering Services for Events Across Pakistan";
  const para1="Delicious food is at the heart of every celebration and at Dynamic Event Management, we ensure every bite is unforgettable. Our premium catering services are crafted to satisfy every palate, impress every guest, and perfectly match the style and scale of your event anywhere in Pakistan. From traditional Pakistani feasts to elegant continental menus, live cooking stations to themed dessert tables we offer a wide range of customizable catering solutions for weddings, corporate events, private parties, and cultural celebrations. Whether you're hosting an intimate family gathering or a grand event with over 1,000 guests, we deliver flavor, freshness, and flawless presentation to your table.";
  const heading2="Catering Services Available Nationwide For";
  const para2="At Dynamic Event Management, our catering services are tailored to suit every occasion and audience. For weddings and engagements, we offer full-course desi menus, live BBQ stations, dessert tables, and refreshing welcome drinks that add a festive touch. Birthdays and private gatherings are made special with fun kids' menus, snacks, cakes, and interactive food stations that guests love. For corporate events, we provide formal buffets, tea breaks, lunch boxes, and conference meals that meet professional standards. Our cultural and religious events catering includes Iftar dinners, Eid celebrations, Mehndi nights, and Nikkah lunches all crafted with cultural authenticity. We also specialize in destination and outdoor events, offering on-site cooking, reliable food transport, and trained staff to manage everything smoothly on location.We proudly cater in Islamabad, Lahore, Karachi, Faisalabad, Multan, Peshawar, Quetta, and throughout Pakistan, using mobile kitchen setups, hygiene-certified practices, and experienced culinary teams to ensure a seamless experience from kitchen to table.";
  const heading3="Our Catering Services Include";
  const para3="Our catering services go beyond just food, we offer a complete, professional dining experience tailored to your event. We provide custom menu planning across a variety of cuisines, including Pakistani, Mughlai, Chinese, Continental, and BBQ. Add excitement to your event with live cooking stations like BBQ grills, naan tandoors, chaat corners, and pasta bars. Choose your preferred service style from buffet setups and plated service to convenient individual meal boxes.Our trained waitstaff, servers, and uniformed food handlers ensure smooth and courteous service. We also take care of crockery, cutlery, table arrangements, linens, and food décor to create a polished and inviting setup. Most importantly, we maintain full hygiene assurance with temperature-controlled food handling, so your guests enjoy safe, fresh, and delicious meals every time.";
  const heading4="Why Choose Our Catering?";
  const para4="We pride ourselves on delivering delicious, fresh, and crowd-pleasing food that enhances every celebration. Our menus offer wide variety and full customization, tailored to your guests' tastes and dietary preferences. With trained chefs and experienced serving staff, we ensure professional execution from the kitchen to the dining area.Every dish is prepared, stored, and delivered with the highest standards of hygiene and safety. Whether you're planning a simple gathering or a luxury event, we offer flexible packages to match your style and budget. Our team guarantees reliable service, with punctual setup and seamless cleanup, so you can focus on enjoying your event.";

  return (
   <div >
      
      <Slider dataset={slide} />
   
     <Services h1={heading1} h2={heading2} h3={heading3} h4={heading4} p1={para1} p2={para2} p3={para3} p4={para4}/>
    </div>
  )
}

export default Catering
