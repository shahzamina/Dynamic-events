import React from 'react'
import { Link } from 'react-router-dom';
import Slider from './Slider.jsx';
import Mainhead from './Mainhead.jsx';
import Services from './Services.jsx';
const Henaartist = () => {
   const slide=[
    {  src:'./Images/d18.jpg', text: 'Hena Artist' },
    {  src: './Images/Henaartist1.png', text: 'Hena Artist' },
    {  src: './Images/m4.jpg', text: 'Hena Artist' },
    {  src: './Images/m2.jpg', text: 'Hena Artist' },
   
    ];
  const heading1="Professional Henna & Mehndi Artist Services Across Pakistan";
  const para1="At Dynamic Event Management, we believe Mehndi is more than just a ritual, it’s a cherished celebration of culture, beauty, and tradition. Our professional henna artist services are designed to bring grace and creativity to your special events, whether it's a bridal Mehndi, a festive gathering, or a cultural function. We work with skilled and experienced artists who specialize in a wide range of Mehndi styles, including intricate bridal designs, elegant Arabic patterns, traditional Pakistani motifs, and modern fusion styles. Every design is carefully crafted to reflect the personality of the wearer and the tone of the occasion. We use only high-quality, natural, and skin-safe henna, ensuring rich color, detailed patterns, and long-lasting stains — perfect for photographs and lasting memories. Whether you're planning an intimate celebration or a large-scale event, we offer flexible Mehndi services including personal appointments, guest applications, live booths, and custom requests. With a focus on hygiene, artistry, and customer experience, we ensure every hand we decorate adds to the beauty and spirit of your event.";
  const heading2="Henna Artist Services Available for All Events, Nationwide";
  const para2="Our henna services cater to a wide range of occasions and audiences, ensuring that everyone—from brides to guests—experiences the joy and artistry of Mehndi. For brides, we offer detailed full-hand and full-feet designs featuring name-embedding, symmetrical patterns, and even portrait-style art to mark their big day with elegance and symbolism. At Mehndi nights and Dholkis, we set up group Mehndi stations with quick yet stylish designs for guests, friends, and family members, making it a lively part of the celebration. We also bring festive flair to events like Eid, Diwali, Chand Raat, Sangeet, and other cultural gatherings with vibrant and thematic henna patterns. For kids and guests, our artists provide lighter, minimalist, or floral designs that are simple yet beautiful. We also cater to corporate and promotional events by offering henna booths at cultural fairs, women’s day programs, or brand activations—adding a unique and interactive cultural element to any setting. Our professional henna artists are available across Islamabad, Lahore, Karachi, Peshawar, Multan, Faisalabad, Quetta, and other cities in Pakistan, ready to bring color, joy, and tradition to your celebration.";
  const heading3="What’s Included in Our Henna Artist Services";
  const para3="Our Mehndi services are led by a team of highly experienced and creative female henna artists who bring both skill and passion to every event. For brides, we offer trial sessions and personalized design consultations to ensure their Mehndi is exactly as they envision it—unique, meaningful, and beautifully executed. At larger events like weddings and festivals, we set up group Mehndi stations so guests can enjoy quick, elegant designs while adding to the festive ambiance. We exclusively use premium, chemical-free henna that’s safe for all skin types, ensuring rich color without compromising safety. Our team provides on-site service with travel options across Pakistan, making it convenient to book us for events in any major city or venue. To enhance the experience, we also offer optional add-ons like glitter Mehndi, colored henna, and customized bridal Mehndi cones for photo styling and guest giveaways, making your event even more memorable and visually stunning.";
  const heading4="Why Choose Our Henna Artists";
  const para4="We take pride in combining artistic excellence with cultural sensitivity and modern creativity, ensuring each Mehndi design is both meaningful and visually stunning. Our henna leaves a long-lasting, rich stain with a smooth, natural finish, ideal for both close-up photography and lasting memories. Our team is made up of patient, detail-oriented professionals who approach every application with care, precision, and a genuine passion for the art. Whether you're a solo bride looking for an intimate session or planning a full-group Mehndi party, we offer flexible packages to suit your event's size and style. With reliable booking systems, punctual artist arrivals, and elegant setup presentations, we guarantee a seamless, beautiful experience from start to finish.";
  return (
    <div>
      <Slider dataset={slide} />
     <Services h1={heading1} h2={heading2} h3={heading3} h4={heading4} p1={para1} p2={para2} p3={para3} p4={para4}/>
    </div>
  )
}

export default Henaartist
