import React from 'react'
import Packcom from './Packcom.jsx'
import Mainhead from './Mainhead.jsx'
const Packages = () => {
  const head="Our Packages"
  return (
    <div>
      <Mainhead head={head}/>
      <p className='cus-st style'> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
All packages listed on our website come with a fixed price, and customers who choose any of these standard packages will be charged accordingly. However, if a customer wishes to book a customized event or package that does not follow the predefined options, the payment details will be provided later at the time of event booking. In such cases, the charges will be determined separately based on the nature, location, and customization of the event.

</p>
      <Packcom />
    </div>
  )
}

export default Packages
