import React from 'react'
import { Link } from 'react-router-dom';
import './Packcom.css'; 
const Packcom = () => {
    const Package=[
        {
            id:1,
            pack:"PACKAGE 1",
            price:"RS.2750/-",
            limit:"For Minimum 350 Guests",
            description:"Rs. 2750/-(Chicken) Rs. 3000/-(Inclusive Photography)",
            item1:"Decor",
            item2:"Cutlery",
            item3:"Carpet",
            item4:"Event Lighting",
            item5:"VIP Lounges for 20 Persons",
            item6:"Event planners",
            item7:"Catering",
            item8:"Fan",
            item9:"Event Recording",
            item10:"Dj System",
            book:'Book Now',
            link: '/Contact'
        },
          {
            id:1,
            pack:"PACKAGE 2",
            price:"RS.2850/-",
            limit:"For Minimum 350 Guests",
            description:"Rs. 2850/-(Chicken) Rs. 3100/-(Inclusive Photography)",
            item1:"Crockery",
            item2:"Cutlery",
            item3:"Carpet",
            item4:"Lighting Product Selection",
            item5:"VIP Lounges for 30 Persons",
            item6:"Event planners",
            item7:"Catering",
            item8:"Generator",
            item9:"Camera & Video Switching",
            item10:"Dj System",
            book:'Book Now ',
            link: '/Contact',
        },
        {
            id:3,
            pack:"PACKAGE 3",
            price:"RS.2950/-",
            limit:"For Minimum 350 Guests",
            description:"Rs. 2950/-(Chicken) Rs. 3200/-(Inclusive Photography)",
            item1:"Crockery",
            item2:"Cutlery",
            item3:"Carpets / Runners",
            item4:"Projection Mapping",
            item5:"VIP Lounges for 40 Persons",
            item6:"Event planners",
            item7:"Catering",
            item8:"Marquees / Dera & Tent",
            item9:"Cooling",
            item10:"Dj System",
            book:'Book Now',
            link: '/Contact'
        },
    ];
  return (     
    
    <div className='ms-md-5 your-class d-flex flex-md-row gap-3 d-sm-flex flex-sm-column gap-sm-3' style={{marginBottom:'60px',marginTop:'50px',height: "100%"}}>
      {Package.map((item)=>(
        <div className=" pack-class Card-image  ms-sm-1  shadow" key={item.id}  style={{  marginTop:'20px',  maxWidth:"500px"}}>
        <div className='  bg-warning w-100 p-4' >
            <h3 className='style m-1 p-2 fw-bold text-center'>{item.pack}</h3>
            <h4  className='style fs-1 m-1 text-center '>{item.price}</h4>
            <h5 className='style m-1 text-center '>{item.limit}1</h5>
            <p className='style m-1 fs-5 p-3 text-center'>{item.description}</p>
        </div>
        <ul  className='list-unstyled m-0 text-center ' style={{backgroundColor:'rgba(212, 202, 202, 0.2)'}}>
            <li className='Card-image p-3 border style fs-4'>{item.item1}</li>
            <li className='Card-image p-3 border style fs-4'>{item.item2}</li>
            <li className='Card-image p-3 border style fs-4'>{item.item3}</li>
            <li className='Card-image p-3 border style fs-4'>{item.item4}</li>
            <li className='Card-image p-3 border style fs-4'>{item.item5}</li>
            <li className='Card-image p-3 border style fs-4'>{item.item6}</li>
            <li className='Card-image p-3 border style fs-4'>{item.item7}</li>
            <li className='Card-image p-3 border style fs-4'>{item.item8}</li>
            <li className='Card-image p-3 border style fs-4'>{item.item9}</li>
            <li className='Card-image p-3 border style fs-4'>{item.item10}</li>
            
            <li className='rounded-bottom Card-image p-3 style fs-3 bg-warning'>
              <Link to={item.link} className='text-dark text-decoration-none'>
              {item.book}
             </Link>
            </li>

            </ul>
        
         
    
           
        
      </div>
      ))

      }
    </div>
  )
}

export default Packcom
