
import { useForm } from "react-hook-form";
import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom';



import './Formsubmit.css'; 

const Formsubmit = ({h,name , email ,phone, com}) => {
  
    const [item, setItem] = useState([]);
    const [form, setForm] = useState({ name: "", email: "" , phone : "" , comment : ""});
 

    const {
    register,
    handleSubmit,
    formState: { errors , isSubmitting},
    reset,
  } = useForm()

      const fetchData = async () => {
    try {
      const res = await fetch('http://localhost:5000');
      const data = await res.json();
      setItem(data.items);
      console.log(data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const onSubmit = async (data) => {
    

  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}`, {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      alert("Form submitted successfully!");
      reset(); // Clears the form
      fetchData(); // Refresh list
    } else {
      alert("Submission failed: " + result.error);
      console.error("Server error:", result.error);
    }
  } catch (err) {
    alert("Something went wrong!");
    console.error("Submission error:", err);
  }
};

 

return (
  <div >
   
   <p className='cus-st style mt-5'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This form is an integral part of our Event Management System, designed to streamline the registration and coordination process for various events. Users are required to provide their basic information, such as name, contact details, and any additional comments or preferences. The collected data enables organizers to effectively plan logistics, communicate with attendees, and ensure a personalized and smooth event experience. Whether it's a corporate conference, workshop, or social gathering, this form helps facilitate efficient event execution while enhancing participant engagement.</p>
   <div className="bg-warning rounded shadow dis-col my-5 w-50 mx-auto " >
  <h2 className="style mt-5 text-center">{h}</h2>
  <form className="dis-col my-3 " onSubmit={handleSubmit(onSubmit)}>

    <div className="dis-col gap-2 my-2 w-75 " >
      <label className=" stylefs-5 fw-bold form-label ">{name}</label>
    <input
    className="form-control p-3"
    style={{width:"150%"}}
      type="text"
      placeholder="Name"
      {...register("name", { required: "Field is required" })}
    />
    {errors.name && <div className="text-danger">{errors.name.message}</div>}
    </div>

    <div className="dis-col gap-2 my-2 w-75" >
       <label  className=" style fs-5 fw-bold form-label ">{email}</label>
    <input
    className="form-control p-3"
    style={{width:"150%"}}
      type="email"
      placeholder="Email"
      {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: "Invalid email address",
        },
      })}
    />
    {errors.email && <div className="text-danger">{errors.email.message}</div>}

    </div>

    <div className="dis-col gap-2 my-2 w-75" >
       <label  className=" style fs-5 fw-bold form-label ">{phone}</label>
    <input
    className="form-control p-3"
    style={{width:"150%"}}
      type="tel"
      placeholder="Phone Number"
      {...register("phone", {
        required: "Phone number is required",
        pattern: {
        value: /^03[0-9]{9}$/,
            message: "Phone number must start with 03 and be 11 digits"
        },
      })}
    />
    {errors.phone && <div className="text-danger">{errors.phone.message}</div>}
       </div>
        <div className="dis-col gap-2 y-2 w-75" >
           <label  className="  style fs-5 fw-bold form-label ">{com}</label>
    <textarea
    className="form-control p-3"
    style={{width:"150%"}}
      placeholder="Your comment..."
      {...register("comment")}
    />
      </div>
         <div>
        <input className=" w-25 text-center fs-5 style p-2 my-5 bg-black text-white" style={{width: "100px", marginLeft:"80px"}} type="submit" value="Submit" disabled={isSubmitting} />
      </div>
     </form>
</div>



 
  </div>


);


 
}

export default Formsubmit
