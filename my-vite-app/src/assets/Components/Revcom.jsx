import React from 'react';
import { FaBriefcase, FaThumbsUp, FaSmile } from 'react-icons/fa';

function Revcom() {
  const boxStyle = {
    minHeight: '260px',
  };

   const counterData = [
    {
      icon: <FaBriefcase size={40} color="#f8b500" />,
      number: '15',
      description: 'Years Of Experience in designing exceptional, unforgettable events with creativity and care.',
      bg: '#fbe4af',
    },
    {
      icon: <FaThumbsUp size={40} color="#f8b500" />,
      number: '1235',
      description: 'Promise To Satisfaction is our top priority — your happiness is our success.',
      bg: '#c6c8d6',
    },
    {
      icon: <FaSmile size={40} color="#f8b500" />,
      number: '5000',
      description: 'Happy Clients who trusted us to turn their ideas into beautifully executed events.',
      bg: '#e1c0c0',
    },
  ];

  return (
    <div className="container py-5">
     <div className='display gap-5'>
      {counterData.map((item, index) => (
        <div key={index} className="col-md-4 d-flex Card-image ">
          <div
            className="p-4 rounded w-100 d-flex flex-column justify-content-center align-items-center h-100"
            style={{ ...boxStyle, backgroundColor: item.bg }}
          >
            {item.icon}
            <h2 className=" fw-bold ">
              {item.number} <span className="mt-3 fw-bold fs-4">+</span>
            </h2>
            <p className=" style fst-italic text-secondary mt-3 p-1 ">{item.description}</p>
          </div>
        </div>
      ))}

     </div>

      <div className=" text-center mt-5 px-3">
        <p className="text-uppercase text-secondary fw-bold small fs-5 style ">
          We at A2Z Events Solutions, offer reasonable
        </p>
       

    

       
      </div>
    </div>
  );
}

export default Revcom;




