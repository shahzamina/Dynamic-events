import React from 'react'
import { Link } from 'react-router-dom';
import Slider from './Slider.jsx';
import Mainhead from './Mainhead.jsx';
import Services from './Services.jsx';
const Soundsys = () => {

       const slide=[
    {  src:'./Images/Sound3.jpeg', text: 'Sound System'},
    {  src: './Images/Sound1.jpg', text: 'Sound System'},
    {  src: './Images/Sound2.jpg', text: 'Sound System'},
    ];
  const heading1="Professional Sound System & Audio Services Across Pakistan";
  const para1="At Dynamic Event Management, we understand that sound can make or break an event. Whether it’s a soulful wedding ceremony, an electrifying dance floor, a powerful corporate speech, or a lively birthday celebration the right sound system sets the tone, enhances emotion, and energizes the atmosphere. That’s why we provide premium sound system services designed to deliver crystal-clear audio, rich bass, and zero distortion, no matter the event type or location in Pakistan. Every setup is managed by our trained sound engineers, who ensure flawless performance from beginning to end. Whether you're hosting an intimate indoor gathering or a large open-air event, our scalable sound solutions are tailored to perfectly match the size, style, and acoustics of your venue.";
  const heading2="Available Nationwide For All Types of Events";
  const para2="Our sound system services are tailored to meet the unique needs of every event type. For weddings and engagements, we provide ceremony music, entrance tracks, background melodies, and live DJ setups to enhance every moment. Birthdays and private events come alive with party sound systems, game audio, mic setups, and curated entertainment soundtracks. At corporate events, we offer professional stage mic arrangements, support for panel discussions, AV presentations, and voiceovers — all with clear, reliable sound. We also specialize in cultural and religious events, including Mehndi, Mayun, Nikkah, Eid Milad, and other public gatherings, where sound clarity is essential. For concerts and live shows, we deliver full-range professional audio setups and stage support to ensure powerful, immersive performances. We operate across Islamabad, Lahore, Karachi, Multan, Faisalabad, Peshawar, Quetta, and other cities in Pakistan, using travel-ready equipment and experienced sound technicians to provide seamless audio services for events of every scale.";
  const heading3="Our Sound System Services Include";
  const para3="Our sound system services include everything needed to deliver a flawless audio experience. We use high-quality speakers, subwoofers, and wireless microphones to ensure clear, powerful sound across any venue. Our setups feature DJ systems, mixers, amplifiers, and surround sound configurations tailored to your event's requirements. Whether indoors or outdoors, we provide customized audio solutions that adapt to your space and crowd size. For live performances or speeches, we offer stage monitors and feedback control to keep sound balanced and consistent. Every event is supported by an on-site sound engineer who handles testing, sound checks, live balancing, and real-time adjustments. Plus, we come prepared with backup equipment to guarantee uninterrupted performance, even in unexpected situations.";
  const heading4="Why Choose Our Audio Services";
  const para4="We offer nationwide availability with professional-grade sound equipment, ensuring top-tier audio at events of all sizes and types. Our team of expert sound technicians provides real-time monitoring throughout your event, guaranteeing smooth, uninterrupted audio delivery. Whether it's a speech, musical performance, video presentation, or DJ set, we ensure crystal-clear sound output every time. Our services are available in customizable packages to suit weddings, birthdays, conferences, concerts, and more. Every booking includes hassle-free setup and breakdown, handled entirely by our team. Best of all, we offer affordable pricing without compromising on quality — delivering exceptional service that fits your budget.";
  return (
    <div>
      <Slider dataset={slide} />
     <Services h1={heading1} h2={heading2} h3={heading3} h4={heading4} p1={para1} p2={para2} p3={para3} p4={para4}/>
  
    </div>
  )
}

export default Soundsys
