import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "./Slider.jsx";
const Galcom = () => {
     const slide=[

           {  src: './Images/s1.png'},
        {  src: './Images/s3.png' },
         {  src: './Images/ce.jpg' },
          {  src: './Images/ce1.jpg'},
           {  src: './Images/b5.jpg'},

      {  src:'./Images/Co4.jpg' },
     {  src:'./Images/Ven1.jpg' },
        {  src:'./Images/Co6.jpg'},
        {  src:'./Images/Co7.jpg' },
        {  src:'./Images/Co8.jpg' },
        {  src:'./Images/Off1.png' },
      {  src:'./Images/O1.jpg'},
    
       {  src: './Images/ce2.jpg'},
        {  src: './Images/ce3.jpg' },
         {  src: './Images/ce4.jpg' },
          {  src: './Images/ce5.jpg'},
           {  src: './Images/b5.jpg'},

      {  src: './Images/O3.jpg' },
      {  src: './Images/Wed8.png' },
      {  src: './Images/O2.jpg' },
      {  src: './Images/O4.jpg' },
      
      
      ];

      const style={
        display:"hide"
      }
  return (
    <div>
      <Slider dataset={slide} style={style}/>
    </div>
  )
}

export default Galcom
