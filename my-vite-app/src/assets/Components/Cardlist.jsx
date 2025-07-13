import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Cardlist.css'; 
import { div } from 'framer-motion/client';

const Cardlist = ({head,dataset,style,description,isdarkbg,readMoreLink}) => {
    
    
   
     const [startIndex, setStartIndex] = useState(0);
     const visibleCount = 3;
     const total = dataset.length;

    const next = () => {
    setStartIndex((prev) => (prev + 1) % total);
    };

    const prev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
    };

    const visibleItems = total > visibleCount
    ? [...dataset, ...dataset].slice(startIndex, startIndex + visibleCount)
    : dataset;


  return (
   
<div  className=" d-flex flex-column p-3 gap-3 flex-wrap mx-4 my-5 shadow" style={{ ...style, minHeight: '300px'}}>
    
 <h1 className='style d-flex justify-content-center mt-5'>{head}</h1>
 <p className='style w-75 cus-st text-center  mx-auto' >{description}</p>
    
  {total > 0 ? (
        <div className="d-flex justify-content-center align-items-center gap-3">

          {total > visibleCount && (
          <button className="arrow-button" onClick={prev}>&larr;</button>
          )}

  <div className="d-flex p-3 gap-2 mb-4">
      {visibleItems.map((item) => (
        <div  key={item.id}    style={{
    width: '450px',
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
      className={`style fs-5 fw-bold p-3 w-25 Card-image btn ${isdarkbg ? 'text-warning bg-black' : 'bg-warning text-black'}`}
      style={{ marginLeft: '38%' }}
    >
      Read more
    </button>
  </Link>
)}

</div>

  );
};

export default Cardlist
