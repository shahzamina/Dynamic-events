import React from 'react'
import { Link } from 'react-router-dom';
import Slider from './Slider.jsx';
import Mainhead from './Mainhead.jsx';
import Services from './Services.jsx';

const Wedsta = () => {
   const slide=[
    {  src:'./Images/t28.jpg', text: 'Wedding Stationery' },
    {  src: './Images/t29.jpg', text: 'Wedding Stationery' },
    {  src: './Images/t30.jpg', text: 'Wedding Stationery' },
    {  src: './Images/t31.jpg', text: 'Wedding Stationery' },
    {  src: './Images/t32.jpg', text: 'Wedding Stationery' },
     {  src: './Images/t33.jpg', text: 'Wedding Stationery' },
    ];
   const heading1="Custom Wedding Stationery & Print Design Across Pakistan";
  const para1="First impressions matter—and at Dynamic Event Management, we ensure your wedding invitation sets the perfect tone for what's to come. Our wedding stationery services are crafted to capture your personality, theme, and unique love story in every element, from the initial save-the-date to the final thank you card. We understand that your stationery isn’t just paper, it’s a reflection of your celebration. Whether your style leans toward timeless elegance, rich cultural heritage, clean modern minimalism, or bold and vibrant florals, we design fully customized stationery that feels personal and meaningful. From sleek digital invitations to lavish printed suites, every piece is professionally designed, printed with care, and delivered with artistic precision—so your guests feel the magic of your wedding right from the start.";
  const heading2="Our Stationery Services Are Available Nationwide";
  const para2="We proudly offer complete design, printing, and delivery services for wedding stationery in all major cities across Pakistan, including Islamabad, Lahore, Karachi, Multan, Faisalabad, Peshawar, and Quetta. Whether you need elegant printed suites for a local event or digital invitations for destination weddings and international guests, we ensure timely delivery via trusted courier services and provide convenient digital formats to suit every need and location.";
  const heading3="What We Offer in Wedding Stationery";
  const para3="Our wedding stationery services cover every detail, from the first announcement to the final thank-you. We create beautifully designed Save the Dates in both printed and digital formats, and offer a wide range of invitation cards—whether you prefer classic elegance, modern minimalism, themed designs, or personalized illustrations. For multi-day celebrations, we provide Mehndi, Baraat, and Walima inserts, each with unique event styling. We also design custom Nikkah Nama covers, elegant envelopes, and premium gift boxes to add a refined touch. For your venue setup, we craft coordinating welcome boards, seating charts, and event signage that reflect your wedding theme. Guests can enjoy thoughtful details like menu cards, table numbers, name tags, and more—perfectly aligned with your decor. To add even more charm, we offer custom monograms, wax seals, ribbons, and specialty envelopes. For destination weddings or virtual convenience, our animated digital invitations are ideal for sharing via WhatsApp or email. And to close your celebration with grace, we provide personalized thank-you cards and printed notes with guest favors.";
  const heading4="Why Choose Our Wedding Stationery Service";
  const para4="At Dynamic Event Management, we offer wedding stationery that’s not only visually stunning but also deeply personal. Every design is fully customizable to match your event’s theme, color palette, and cultural aesthetic—ensuring a seamless and meaningful experience from start to finish. We use high-quality printing techniques on premium materials such as matte, textured, acrylic, velvet, and foil-stamped paper, delivering a luxurious feel that guests will remember. All elements—from invitations to signage—are designed to align cohesively, creating consistent and elegant event branding. Our creative team blends cultural understanding with modern design trends, offering expert guidance and thoughtful execution. You’ll receive digital design previews, revision support, and final delivery right to your doorstep, no matter where you are in Pakistan. With flexible packages available to suit every budget, from minimal elegance to luxurious keepsake boxes, we make stunning wedding stationery accessible and unforgettable.";

  return (
    <div style={{width:'100%', height:'100%'}}>
      
      <Slider dataset={slide} />
     <Services h1={heading1} h2={heading2} h3={heading3} h4={heading4} p1={para1} p2={para2} p3={para3} p4={para4}/>
    </div>
  )
}

export default Wedsta
