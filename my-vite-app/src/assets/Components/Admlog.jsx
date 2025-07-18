import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Mainhead from './Mainhead.jsx'
import './Admlog.css'


const Admlog = () => {
   
  const [message, setMessage] = useState('');
const navigate = useNavigate();
const head="Admin Login "

  const {
    register,
    handleSubmit,
    formState: { errors  },
    reset
  } = useForm();

  const onSubmit = (data) => {
    const { username, password } = data;


    const validUsername = 'Admin_123';
    const validPassword = 'Strong@123'; 

    if (username === validUsername && password === validPassword) {
      setMessage('Login Successfully!');
      alert('Login Successfully!');
      reset(); 
        navigate('/cusview');
    } else {
      setMessage('Invalid username or password');
      
      setTimeout(() => setMessage(''), 3000);
      alert('Enter Valid Credentials!');
    }
  };

  return (
    <>
<Mainhead head={head}/>
     <p className='cus-st style text-start my-5 about-class p-3' > Welcome to the Admin Panel Login.
Please enter your secure credentials to access the management dashboard. Authorized personnel only. This secure login page is reserved for authorized administrators.
Use your assigned username and password to access backend tools, manage data, and oversee event operations.
For security purposes, make sure to log out after use.</p>
 
    <div className="adm-com border border-black  container mt-5 p-4 shadow  rounded " style={{ height:"100%",marginBottom:"5%", backgroundImage: "url('./Images/b4.jpg')", backgroundSize: "cover",backgroundRepeat: "no-repeat",backgroundPosition: "center"}}>
     
      <form autoComplete="off" className="dis-col my-3 " onSubmit={handleSubmit(onSubmit)}>
        <div  className="dis-col gap-3 my-2 w-75 "  >
         

         
          <input
            className="p-3 rounded form-control"
              name="real_username"
            style={{width:"150%"}}
            placeholder='Username'
              autoComplete="new-username"
            type="text"
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 6,
                message: 'Minimum 6 characters required'
              },
              pattern: {
                value: /^[A-Za-z][A-Za-z0-9_]{5,}$/,
                message: 'Only letters, numbers, underscores allowed, must start with a letter'
              }
            })}
          />
          {errors.username && (
            <span className="text-danger fw-bold">{errors.username.message}</span>
          )}
        </div>

        <div className="dis-col gap-3 my-2 w-75 ">
         
          <input
              className="p-3 rounded "
               name="real_password"
                 autoComplete="new-password"
                 placeholder='Password'
            style={{width:"150%"}}
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Minimum 8 characters required'
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                message:
                  'Password must contain uppercase, lowercase, number & special character'
              }
            })}
          />
          {errors.password && (
            <span className="text-danger fw-bold">{errors.password.message}</span>
          )}
        </div>

        <button className="btn btn-warning w-50 mt-4 p-3 fw-bold" type="submit" style={{cursor:"pointer", marginLeft:"25%"}}>
          Login
        </button>
      </form>

     
    </div>
    </>
  );
};

export default Admlog;
