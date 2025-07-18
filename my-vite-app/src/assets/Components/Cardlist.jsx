import React, { useState } from 'react'
import { Link } from 'react-router-dom';


import './Cardlist.css'; 
import { div } from 'framer-motion/client';

const Cardlist = ({head,dataset,style,description,isdarkbg,readMoreLink}) => {
    
    
   
     const [startIndex, setStartIndex] = useState(0);
     const [visibleCount, setVisibleCount] = useState(window.innerWidth < 768 ? 1 : 3);
     //const visibleCount = 3;
     const total = dataset.length;

    const next = () => {
    setStartIndex((prev) => (prev + 1) % total);
    };

    const prev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
    };
React.useEffect(() => {
  const handleResize = () => {
    setVisibleCount(window.innerWidth < 768 ? 1 : 3); // sm < 768px → show 1
  };

  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);

    const visibleItems = total > visibleCount
    ? [...dataset, ...dataset].slice(startIndex, startIndex + visibleCount)
    : dataset;


  return (
   
<div  className=" d-flex flex-column  card-class  gap-3 flex-wrap  my-5 shadow " style={{ ...style, minHeight: '300px'}}>
    
 <h2 className='style d-flex mx-md-5 mx-sm-2 justify-content-center text-sm-center  mt-5'>{head}</h2>
 <p className='style w-75 cus-st text-center  mx-md-auto mx-sm-5 ' >{description}</p>
    
  {total > 0 ? (
        <div className="d-flex justify-content-center align-items-center gap-3">

          {total > visibleCount && (
          <button className="arrow-button" onClick={prev}>&larr;</button>
          )}

  <div className="d-flex p-3 gap-2 mb-4">
      {visibleItems.map((item) => (
        <div  key={item.id}   style={{
        
    width: visibleCount === 1 ? '200px' : '350px',
    
    height: '350px',
      overflow: 'hidden',
  }}>
           <img  className='Card-image'  src={item.image} alt={item.image}  style={{ width: "100%", height: "100%"}}/>
        </div>
      ))}
  </div>
  {total > visibleCount && (
            <button className="arrow-button" onClick={next}>&rarr;</button>
          )}
      
        </div>
  ):(
    <p>No photographers found.</p>
  )
        
}
   {readMoreLink && (
  <Link to={readMoreLink}>
    <button
      className={`style fs-5 fw-bold p-md-3 p-sm-1 card-com Card-image btn ${isdarkbg ? 'text-warning bg-black' : 'bg-warning text-black '}`}
     
    >
      Read more
    </button>
  </Link>
)}

</div>

  );
};

export default Cardlist
