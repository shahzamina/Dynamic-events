import { div } from 'framer-motion/client';
import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'
const Card = ({data=[], h1}) => {
 
 

    
  return (

    <>

     <h1 className='card1 style text-center  my-3 '>{h1}</h1>
   
    <div className='card-comp  row justify-content-center g-1 col-12 ' style={{ minheight: "80%", marginBottom:'60px', marginTop:'40px'}}>
       {data.map((item) => (
          <div key={item.id} className='card-comp1 Card-image me-5 my-4 border-start rounded  border-orange col-md-3 col-sm-7 ' style={{ boxShadow:"1px 2px 8px rgb(190, 161, 29)", minHeight: "10px", }} >
           
            <div className='text-center'>
              {item.image ? (
               
                <img
                  src={item.image}
                  alt={item.title}
                  className='mt-5'
                    style={{ width: "300px", height: "300px",margin: "0 auto"  }}
                /> 
              ) : (

          <Link to={item.link} target={item.target} > <i className={item.icon} style={{color:"orange",fontSize: '40px',  marginBottom:'15px', marginTop:'30px', marginLeft:'5px' }}></i> </Link>
              )}
</div>
      <div>
          
          <p className='style fw-bold fs-5 mb-1 mt-2 p-2 h-50 text-center' >{item.title}</p>
          <p className='style cus-st fs-5 mb-4 p-3 mx-3  h-50 text-center'>{item.description}</p>
          <div/>
    </div>
    </div>
    ))}
    
    </div>
</>
     
  )
}

export default Card
