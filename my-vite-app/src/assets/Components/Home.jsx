import React from 'react'
import { Link } from 'react-router-dom';
import Conbtn from "./Conbtn.jsx";
import Cardlist from "./Cardlist.jsx";
import Slider from "./Slider.jsx";
import Mainhead from './Mainhead.jsx';
import Packcom from './Packcom.jsx';


function Home() {

   const photographers =[
        { id: 1,  image: './Images/Photo1.png'},
        { id: 2,  image: './Images/Photo2.png'},
        { id: 3,  image: './Images/Photo4.jpg'},
        { id: 4,  image: './Images/Photo6.png'},

        { id: 5, image: './Images/Photo7.jpeg'},
        { id: 6, image: './Images/Photo8.jpeg'},
        
        
       ];
        const Soundsystem =[
        { id: 1,  image: './Images/Sound4.jpeg'},
        { id: 2,  image: './Images/Sound5.jpeg'},
        { id: 3,  image: './Images/Sound6.jpeg'},
        { id: 4,  image: './Images/Sound7.jpeg'},
       ];
        const  HennaArtist =[
        { id: 1,  image: './Images/Henna3.jpeg'},
        { id: 2,  image: './Images/Henna4.jpeg'},
        { id: 3,  image: './Images/Henna5.jpeg'},
        { id: 4,  image: './Images/Henna6.jpeg'},

        
       ];
        const  WeddingVenues =[
        { id: 1,  image: './Images/Wed1.png'},
        { id: 2,  image: './Images/Wed4.png'},
        { id: 3,  image: './Images/Wed5.png'},
        { id: 4,  image: './Images/Wed6.png'},

        { id: 5, image: './Images/Wed7.png'},
        { id: 6, image: './Images/Ven13.jpg'},
        { id: 7, image: './Images/Ven14.jpg'},
        { id: 8, image: './Images/Ven12.jpg'},
        
       ];
        const   Decor =[
        { id: 1,  image: './Images/Dec6.jpg'},
        { id: 2,  image: './Images/Dec7.jpg'},
        { id: 3,  image: './Images/Dec8.jpg'},
        { id: 4,  image: './Images/Dec9.jpg'},
        { id: 5, image: './Images/Dec10.jpg'},
       
        
       ];
        const  Catering =[
        { id: 1,  image: './Images/C1.jpg'},
        { id: 2,  image: './Images/Catering.png'},
        { id: 3,  image: './Images/Cat9.png'},
        { id: 4,  image: './Images/Cat10.png'},
        { id: 5, image: './Images/Cat11.png'},
        { id: 6, image: './Images/Cat12.png'},
        { id: 7, image: './Images/Cat13.png'}
        
       ];
        const  BridalWear =[
        { id: 1,  image: './Images/Bw1.jpeg'},
        { id: 2,  image: './Images/Bw2.jpeg'},
        { id: 3,  image: './Images/G4.jpeg'},
        { id: 4,  image: './Images/G2.jpeg'},

        { id: 5, image: './Images/G5.jpeg'},
        
       ];
        const   BridalMakeup =[
        { id: 1,  image: './Images/bride.png'},
        { id: 2,  image: './Images/B.png'},
        { id: 3,  image: './Images/Bridwea.png'},
        { id: 4,  image: './Images/Bridalmakeup.png'},

        { id: 5, image: './Images/Gm1.jpeg'},
        { id: 6, image: './Images/Gm2.jpeg'},
        { id: 7, image: './Images/Gm3.jpeg'},
       ];
        const  Carrental =[
        { id: 1,  image: './Images/Cr1.jpeg'},
        { id: 2,  image: './Images/Cr2.jpeg'},
        { id: 3,  image: './Images/Cr3.jpeg'},
        { id: 4,  image: './Images/Cr4.jpeg'},

        { id: 5, image: './Images/Cr5.jpeg'},
        
       ];
        const  Lighting  =[
        { id: 1,  image: './Images/L1.jpg'},
        { id: 2,  image: './Images/L2.jpg'},
        { id: 3,  image: './Images/L3.jpg'},
        { id: 4,  image: './Images/L4.jpg'},
        { id: 5, image: './Images/L5.jpg'},
    
       ];
        const  WedStationary  =[
        { id: 1,  image: './Images/S1.jpeg'},
        { id: 2,  image: './Images/S3.jpeg'},
        { id: 3,  image: './Images/S5.jpeg'},
        { id: 4,  image: './Images/S6.jpeg'},
        { id: 5, image: './Images/S4.jpeg'},
        { id: 6, image: './Images/S8.jpeg'},
       ];
        const slide=[
      {  src:'./Images/Co4.jpg', text: 'Corporate Events' },
     {  src:'./Images/Ven1.jpg', text: 'Corporate Events' },
        {  src:'./Images/Co6.jpg', text: 'Corporate Events' },
        {  src:'./Images/Co7.jpg', text: 'Corporate Events' },
        {  src:'./Images/Co8.jpg', text: 'Corporate Events' },
        {  src:'./Images/Off1.png', text: 'Corporate Events' },
      {  src:'./Images/O1.jpg', text: 'Corporate Events' },
      {  src: './Images/Mehindi.png', text: 'Mehndi Events' },
      {  src: './Images/Photo1.png', text: 'Mehndi Events' },
      {  src: './Images/L1.jpg', text: 'Mehndi Events' },
      {  src: './Images/L2.jpg', text: 'Mehndi Events' },
       {  src: './Images/L4.jpg', text: 'Mehndi Events' },
        {  src: './Images/L5.jpg', text: 'Mehndi Events' },
      {  src: './Images/Edu.png', text: 'Educational Events' },
      {  src: './Images/Edu.png', text: 'Barat Events' },
      {  src: './Images/O7.jpg', text: 'Barat Events' },

       {  src: './Images/b1.jpg', text: 'Birthday Events' },
        {  src: './Images/b2.jpg', text: 'Birthday Events' },
         {  src: './Images/b3.jpg', text: 'Birthday Events' },
          {  src: './Images/b4.jpg', text: 'Birthday Events' },
           {  src: './Images/b5.jpg', text: 'Birthday Events' },

      {  src: './Images/O3.jpg', text: 'Outdoor Events' },
      {  src: './Images/Wed8.png', text: 'Outdoor Events' },
      {  src: './Images/O2.jpg', text: 'Outdoor Events' },
      {  src: './Images/O4.jpg', text: 'Outdoor Events' },
      
      
      ];
const heading1="Photography & Videography Services";
const heading2="Sound System";
const heading3="Henna Artist";
const heading4="Venues";
const heading5="Decor";
const heading6="Catering";
const heading7="Bridal and Groom Wear";
const heading8="Bridal and Groom Makeup";
const heading9="Car Rental";
const heading10="Lighting and Ambiance";
const heading11="Wedding Stationery";
const head1="Our Services";

const head3="Our Packages";
const description1="Our photography services blend creativity and precision to preserve your most cherished moments. From weddings and events to portraits and commercial shoots, we deliver stunning visuals that tell your story beautifully";
const description2="We provide high-quality sound systems for all kinds of events, making sure music and speeches are clear and powerful. Our team sets everything up professionally, so your event sounds amazing and leaves a lasting impression";
const description3="Our expert henna artists craft elegant, intricate designs for all occasions.We use high-quality natural henna for safe, rich staining, Perfect for weddings, festivals, and personal celebrations.";
const description4="Our venues cater to all types of events—from weddings and receptions to corporate functions, parties, and cultural gatherings. With versatile indoor and outdoor spaces, elegant décor, and modern amenities, we provide the perfect setting for any occasion. Whatever the event, our venues ensure a memorable experience for you and your guests.";
const description5="Decor services transform ordinary spaces into stunning, immersive experiences tailored to your event's theme and mood. Whether it's a romantic wedding, a festive celebration, or a formal gathering, we blend creativity with detail to craft the perfect ambiance. From floral arrangements to lighting and stage design, we make every detail count.";
const description6="Our catering services offer a blend of flavor, presentation, and professionalism to make your event unforgettable. Whether you're hosting a wedding, party, or corporate gathering, we provide customized menus and exceptional service that suit every taste and occasion. From appetizers to desserts, every dish is crafted with care.";
const description7="Our wedding wear collection blends elegance, tradition, and modern flair — designed to make both brides and grooms look and feel exceptional on their special day. From timeless bridal lehengas and contemporary gowns to regal sherwanis and tailored suits, each outfit is crafted with premium fabrics, intricate detailing, and a focus on individuality. Whether you're aiming for a classic desi look or a fashion-forward ensemble, we ensure a flawless fit and finish that reflects your unique personality and enhances your presence as a couple.";
const description8="Our bridal and groom makeup services are thoughtfully designed to bring out the best in you, ensuring you look radiant, confident, and flawless from start to finish. For brides, we offer a wide range of looks—from soft, natural elegance to bold, glamorous transformations—customized to suit your personal style, skin tone, and wedding attire. Each session includes the use of high-quality, skin-friendly products that ensure long-lasting, photo-ready results, even under the spotlight.";
const description9="Make your event arrival as memorable as the celebration itself with our premium car rental services available across Pakistan. Whether you're looking for a luxurious ride for the bride and groom, transport for family members, or guest shuttles for a large gathering, we offer a wide selection of well-maintained vehicles tailored to your needs.";
const description10="Our lighting and ambiance services transform any venue into a captivating space that matches your event's mood and theme. From soft romantic glows to vibrant party lighting, we tailor every setup to enhance the experience and elevate the atmosphere. The right lighting doesn't just illuminate—it creates unforgettable moments.";
const description11="Our wedding stationery services offer beautifully crafted invitations, save-the-dates, menus, and signage that reflect your unique love story. Every design is thoughtfully tailored to match your theme and tone—setting the perfect first impression for your celebration. From elegant minimalism to intricate artwork, we bring your vision to life on paper.";
  return (
    <div>
    
       <Slider dataset={slide}/>
       
       <Mainhead head={head3}/>
       <Packcom/>
       
        <Mainhead head={head1}/>
        <Cardlist head={heading1} dataset={photographers} description={description1} style={{ backgroundColor: 'orange' }} isdarkbg={true} readMoreLink="/Photographer"/>
        <Cardlist head={heading2} dataset={Soundsystem } description={description2}  style={{ backgroundColor: 'white'}}  isdarkbg={false} readMoreLink="/Soundsys"/>
        <Cardlist head={heading3} dataset={HennaArtist} description={description3}  style={{ backgroundColor: 'orange' }} isdarkbg={true} readMoreLink="/Henaartist"/>
        <Cardlist head={heading4} dataset={WeddingVenues} description={description4}  style={{ backgroundColor: 'white' }} isdarkbg={true} readMoreLink="/Venues1"/>
        <Cardlist head={heading5} dataset={ Decor} description={description5}  style={{ backgroundColor: 'orange' }} isdarkbg={true} readMoreLink="/Decor"/>
        <Cardlist head={heading6} dataset={Catering} description={description6}  style={{ backgroundColor: 'white' }} isdarkbg={true} readMoreLink="/Catering"/>
        <Cardlist head={heading7} dataset={BridalWear} description={description7}  style={{ backgroundColor: 'orange' }} isdarkbg={true} readMoreLink="/Bridalwear"/>
        <Cardlist head={heading8} dataset={BridalMakeup} description={description8}  style={{ backgroundColor: 'white' }} isdarkbg={true} readMoreLink="/Bridalmakeup"/>
        <Cardlist head={heading9} dataset={Carrental} description={description9}  style={{ backgroundColor: 'orange' }} isdarkbg={true} readMoreLink="/Carrental"/>
        <Cardlist head={heading10} dataset={Lighting} description={description10}  style={{ backgroundColor: 'white' }} isdarkbg={true} readMoreLink="/Light"/>
        <Cardlist head={heading11} dataset={ WedStationary} description={description11}  style={{ backgroundColor: 'orange' }} isdarkbg={true}  readMoreLink="/Wedsta"/>  
       <Conbtn/>


    </div>
  )
}

export default Home
