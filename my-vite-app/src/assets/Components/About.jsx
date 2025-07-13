import React from 'react'
import { Link } from 'react-router-dom';
import Mainhead from './Mainhead'
import Imgcom from './Imgcom'
import Cardlist from './Cardlist'
import Conbtn from './Conbtn'
import Revcom from './Revcom'
const About = () => {
   //<div className='display my-5  p-1 mx-5' style={{ boxShadow:"1px 2px 8px rgb(190, 161, 29)"}}>}

 const data=[
  {
    show1:"one",
    h:"Our Approach",
    p:"What is your business about? What are your challenges? What are the issues that your members or clients are dealing with? By thoroughly understanding your company leadership culture, how your organization operates and your long-term strategic plans, we become a part of your team. We take the time to learn about your business and the goals of your event so you can rest assured that everything will be on target and in line with your objectives. Leave the planning and management to us—we’ll look after the details that come with organizing an event. Finally, this is where our event management expertise comes into play. At our core, we love events. We handle the on-site details, production plans, schedules, deadlines, and to-do lists that come with managing an event so you can sit back and relax.",
    image : "./Images/ap.jpg",
  },
  {
    show2:"two",
    h:"Corporate Experience",
     p:"We bring experience and creativity together to deliver events that surpass expectations through the integrated use of our team’s unique set of skills. We operate with integrity, energy, and attention to detail.In 2023, we provided multimedia solutions for the Spring Get-Together event held at FWO Engineering Mess. We organized a lunch event at the Institute of Regional Studies, and arranged the groundbreaking ceremony of the Hyderabad–Sukkur Motorway for the National Highway Authority (NHA), with the Prime Minister of Pakistan, Mian Muhammad Shahbaz Sharif, as the chief guest. We also managed the mega project opening in D.I. Khan District for NHA and WAPDA, again graced by the Prime Minister. Additionally, we arranged the HI Official Conference at Guns & Country Club for Friedrich-Ebert-Stiftung (FES) Pakistan, and organized an Iftar dinner at the Head Office, Blue Area, also for Friedrich-Ebert-Stiftung (FES) Pakistan.",
    image : "./Images/ce.jpg",
  },
   {
    show1:"one",
    h:"Corporate Experience",
    p:"In 2023, we organized an event at FWO APS Rawalpindi and provided multimedia solutions at FWO Headquarters, Engineers-in-Chief Branch, GHQ. We conducted multiple book launching events and lunches at the Institute of Regional Studies (IRS), as well as a combined book launching event and lunch & dinner at ISSI for Friedrich-Ebert-Stiftung (FES) Pakistan. Additionally, we arranged a book launching event and dinner at the Head Office, Blue Area, and a book launch with hi-tea at Quaid-e-Azam Auditorium, also organized for Friedrich-Ebert-Stiftung (FES) Pakistan.",
    image : "./Images/ce1.jpg",
  },
  {
    show2:"two",
    h:"Corporate Experience",
     p:"In 2022, we set up multimedia at FWO Engineers Officers Mess for a dine-out event organized by the Engineers-in-Chief's Branch of the Pakistan Army in honor of Lt. General (Retd.) Moazzam Ijaz. We also provided multimedia solutions for a get-together at FWO Headquarters and arranged a building lighting project for the 14th August celebration at Pak China Mall. Our team played a key role in the execution of the FWO Engineers Spring Festival held at Farhad Sports Complex. Additionally, we managed the inauguration of JSR (Jaglot-Skardu Road) and the placement of monuments at Zero Point (Gilgit) and Skardu (Kachura Chock). In 2023, we organized an inaugural event at the Institute of Regional Studies Islamabad titled “Contemporary Traditional & Non-Traditional Security Threats in South Asia,” with the President of Pakistan, Dr. Arif Alvi, as the chief guest.",
    image : "./Images/ce2.jpg",
  },
  {
    show1:"one",
    h:"Corporate Experience",
    p:"In 2021, we provided support for several high-profile national events, including the groundbreaking ceremony of the Sialkot (Sambarial) – Kharian Motorway Project, the 93 District Courts in Islamabad, and the inauguration of Jaglot–Skardu Road and Skardu International Airport — all graced by the Prime Minister of Pakistan, Mr. Imran Khan. We also managed the inauguration ceremony of the Hakla (M-1) – D.I. Khan Motorway Project spanning 293 km. Additionally, we arranged a musical night (NSWC – 2022) performed by Aima Baig and Asim Azhar at the National Defense University, Islamabad (NDU). We hosted a book launch titled Pakistan–Afghanistan Relations: Pitfalls and the Way Forward in collaboration with Friedrich-Ebert-Stiftung.",
    image : "./Images/ce3.jpg",
  },
  {
    show2:"two",
    h:"Corporate Experience",
    p:"In 2021, we managed a wide range of prestigious national-level events. These included the launching and groundbreaking ceremony of Rashakai Special Economic Zone & Century Steel Pvt. Ltd., officiated by Prime Minister Imran Khan, and the groundbreaking ceremony of Pak Steel Re-Rolling Mills at Hattar Special Economic Zone, led by Chief Minister of KPK, Mr. Mahmood Khan. Additionally, we coordinated the launching of the Kissan Card and the inauguration of the Gomal Zam Dam Command Area, the University of Agriculture D.I. Khan, and project completion ceremonies under the Pakistan Agriculture Research Council, all held in Dera Ismail Khan and graced by Prime Minister Imran Khan.",
    image : "./Images/ce4.jpg",
  },
   {
    show1:"one",
    h:"Corporate Experience",
    p:"In 2019, we played a key role in the inauguration of the CPEC Havelian–Thakot Project (Havelian–Mansehra Section). Throughout 2020, we supported multiple inauguration and marketing events for Imtiaz Super Market in various locations including G.T. Road Islamabad, Liberty Market Lahore, and DHA Phase 2 Lahore, along with the CPEC Havelian–Thakot (Mansehra–Thakot Section) project.In 2021, we were involved in the groundbreaking ceremony for the Chitral–Booni–Mastuj–Shandur Road (153 km) and the inauguration of the Peshawar–Dara Adam Khel Road Project, both officiated by Prime Minister Imran Khan.",
    image : "./Images/ce5.jpg",
  },
  
]
const dataset=[
    { id: 1,  image: './Images/cl1.jpg'},
        { id: 2,  image: './Images/cl2.jpg'},
        { id: 3,  image: './Images/cl3.jpg'},
]
const head3="Our Performance"

  const description11 = "We take pride in having collaborated with a diverse and prestigious portfolio of clients across various industries. Our clientele includes leading financial institutions, international technology companies, prominent consumer and retail brands, and major players in the automotive sector. We have also worked closely with educational institutions, government bodies, and innovative technology firms. With a strong commitment to excellence, we continue to deliver high-impact solutions tailored to the evolving needs of our clients across the country."
  const head1="Our Clients"
  const head2="Our Experience"
  const head="About Dynamic Events "
  const style = {
  width :"40%"
   }
  
  return (
    <div>
      
      <Mainhead head={head} style={style}/>
      <p className='cus-st style'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We are a company that manages an event to achieve a stated goal as determined by the client. We will come up with ideas, develop a critical path, write a budget for an event, seek sponsorship and provide a series of experts in various fields of entertainment, education, design, strategic planning, food & beverage, presentation and copy writing, or whatever is required.<br /> <b> DYNAMIC Event Management</b> works with individuals and companies or as part of a committee. We are happy to act as sole organiser or become part of the steering team. We can provide all of the ideas or become another resource in a brainstorming team. In all cases we undertake the responsibility and management of the day to day minutiae that go into organising any event.</p>
      <Mainhead head={head2} />
      <Imgcom data={data}/>
        <Mainhead head={head1} />
      <Cardlist head={head1} dataset={ dataset} description={description11}  style={{ backgroundColor: 'orange' }}  />  
      <Mainhead head={head3} style={style}/>
      <Revcom />

      <Conbtn/>
    </div>
  )
}

export default About
