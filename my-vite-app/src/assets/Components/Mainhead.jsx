import React from 'react'

const Mainhead = ({head, style}) => {
  return (
    <div className='mx-auto text-center shadow ' style={{ marginTop:'5%', marginBottom:"2%",width:'30%', padding:'10px',height:'90px',...style}}>
      <h1 className='style p-2' >{head}</h1>
    </div>
  )
}

export default Mainhead
