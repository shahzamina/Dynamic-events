// src/assets/Components/FormTable.jsx

import React, { useState , useEffect }  from 'react';
import { Link } from 'react-router-dom';
import Mainhead from './Mainhead.jsx'
import './Cusview.css'
const Cusview = () => {
  const [item, setItem] = useState([]);
   const [selectedItem, setSelectedItem] = useState(null);
   const [deleteCandidate, setDeleteCandidate] = useState(null);
  const [editCandidate, setEditCandidate] = useState(null);
const [editForm, setEditForm] = useState({ name: "", email: "", phone: "", comment: "" });
const [createModalOpen, setCreateModalOpen] = useState(false);
const [createForm, setCreateForm] = useState({
  name: '',
  email: '',
  phone: '',
  comment: ''
});
const head="Welcome to the Admin Panel!"
const head1="Submitted Records"
const style={
  width:"50%"
}
const fetchData = async () => {
  try {
    const res = await fetch('http://localhost:5000'); 
    const data = await res.json();
    setItem(data.items);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};
useEffect(() => {
  fetchData();
}, []);


const handleCreateSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^03\d{9}$/; // Pakistani 11-digit starting with 03

  

  if (!emailRegex.test(createForm.email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!phoneRegex.test(createForm.phone)) {
    alert("Phone number must be 11 digits and start with 03.");
    return;
  }

  try {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}`,  {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(createForm)
    });

    const result = await res.json();

    if (res.ok) {
      alert("Record created!");
      setCreateModalOpen(false);
      fetchData(); // Refresh the table
    } else {
      alert("Create failed: " + result.error);
    }
  } catch (err) {
    console.error("Create error:", err.message);
    alert("Network error: " + err.message);
  }
};



  const handleDelete = async (id) => {
  try {
    const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const res = await fetch(`${BASE_URL}/api/record/${id}`, {
  method: "DELETE",
});

const result = await res.json();


    if (res.ok) {
      alert("Record deleted!");
      setDeleteCandidate(null); // close the popup
      fetchData(); // refresh the list
    } else {
      alert("Delete failed: " + result.error);
    }
  } catch (err) {
    console.error("Delete error:", err.message);
    alert("Network error: " + err.message);
  }
};

const handleUpdateSubmit = async () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^03\d{9}$/;

  if (!editForm.name.trim()) {
    alert("Name is required");
    return;
  }

  if (!emailRegex.test(editForm.email)) {
    alert("Invalid email format");
    return;
  }

  if (!phoneRegex.test(editForm.phone)) {
    alert("Phone number must start with 03 and be 11 digits");
    return;
  }

  try {
    const BASE_URL = import.meta.env.VITE_BACKEND_URL;
    const res = await fetch(`${BASE_URL}/api/record/${editCandidate._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editForm),
    });

    const result = await res.json();

    if (res.ok) {
      alert("Record updated!");
      setEditCandidate(null);
      fetchData(); // Refresh the list
    } else {
      alert("Update failed: " + result.error);
    }
  } catch (err) {
    console.error("Update error:", err.message);
    alert("Network error: " + err.message);
  }
};

 if (!item || item.length === 0) {
    return <p>No data found.</p>;    
  }

  
  return (
    <>
 <Mainhead head={head} style={style}/>
<p className='style cus-st'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b> Welcome to the Admin Panel.</b>This admin dashboard provides a centralized view of all customer records. You can add, update, or remove data to efficiently manage event-related customer information. This page provides access to all customer records submitted through the event registration form. As an administrator, you have full control to view detailed customer information, add new entries, update existing records, and permanently delete unnecessary data. This ensures your customer database remains accurate and well-organized, supporting smooth and efficient event coordination.
</p>


    <div className="container mt-4">
      <Mainhead head={head1} style={style}/>
     <div className=" mt-1 " style={{marginLeft:"80%"}}>
  <button className="btn btn-success p-3 styleauto fs-4 style fw-bold w-75 "  onClick={() => setCreateModalOpen(true)}>Create New</button>
</div>
      <div className="table-responsive mb-5">
        <table className="table table-bordered table-striped mt-5">
          <thead className="table-dark">
            <tr>
              <th  className="p-3 fs-5 fw-normal style text-center">#</th>
              <th  className="p-3 fs-5 fw-normal style text-center">Name</th>
              <th  className="p-3 fs-5 fw-normal style text-center">Email</th>
              <th  className="p-3 fs-5 fw-normal style text-center">Phone</th>
              <th  className="p-3 fs-5 fw-normal style text-center">Comment</th>
              <th  className="p-3 fs-5 fw-normal style text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {item.map((i, index) => (
              <tr key={index}>
                <td  className="p-3 fw-normal style text-center">{index + 1}</td>
                <td  className="p-3 fw-normal style text-center">{i.name}</td>
                <td  className="p-3 fw-normal style text-center">{i.email}</td>
                <td  className="p-3 fw-normal style text-center">{i.phone}</td>
                <td  className="p-3 fw-normal style text-center">{i.comment || "No comment"}</td>
                <td>
                    
                      < button  onClick={() => setSelectedItem(i)} className="btn btn-sm btn-info p-3 style ms-5 fw-bold" style={{width:"20%"}}>Read</button>
                       <button className="btn btn-sm btn-danger  p-3 style ms-3 fw-bold "onClick={() => setDeleteCandidate(i)} style={{width:"20%"}}>Delete</button>
                       <button className="btn btn-sm btn-warning p-3 style ms-3 fw-bold "
                        onClick={() => {
                       setEditCandidate(i);
                       setEditForm({ name: i.name, email: i.email, phone: i.phone, comment: i.comment });}} style={{width:"20%"}}>Update</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

   {selectedItem && (
  <div className="modal-overlay">
    <div className="modal-content">
      <h3 className="mb-3 style text-center ">Selected Record</h3>
      <table className="table table-bordered">
        <tbody>
          <tr><th className='p-3 style text-center'>Name</th><td className='p-3 style text-center'>{selectedItem.name}</td></tr>
          <tr><th className='p-3 style text-center'>Email</th><td className='p-3 style text-center'>{selectedItem.email}</td></tr>
          <tr><th className='p-3 style text-center'>Phone</th><td className='p-3 style text-center'>{selectedItem.phone}</td></tr>
          <tr><th className='p-3 style text-center'>Comment</th><td className='p-3 style text-center'>{selectedItem.comment || "No comment"}</td></tr>
        </tbody>
      </table>
      <div className="text-start">
        <button className="btn btn-warning ms-4 mt-3 style " style={{width:"20%" }} onClick={() => setSelectedItem(null)}>Ok</button>
      </div>
    </div>
  </div>
)}

{deleteCandidate && (
  <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-75 z-3">
    <div className="bg-white p-4 rounded shadow w-50">
      <h4 className="mb-3 style my-3 text-center">Are you sure you want to delete this record?</h4>
      <table className="table table-bordered">
        <tbody>
          <tr><th className='p-3 style text-center'>Name</th><td className='p-3 style text-center'>{deleteCandidate.name}</td></tr>
          <tr><th className='p-3 style text-center'>Email</th><td className='p-3 style text-center'>{deleteCandidate.email}</td></tr>
          <tr><th className='p-3 style text-center'>Phone</th><td className='p-3 style text-center'>{deleteCandidate.phone}</td></tr>
          <tr><th className='p-3 style text-center'>Comment</th><td className='p-3 style text-center'>{deleteCandidate.comment || "No comment"}</td></tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-end gap-2 me-5">
        <button
          className="btn btn-warning  " style={{width:"15%" }} onClick={() => setDeleteCandidate(null)} >Cancel</button>
        <button className="btn btn-outline-warning" style={{width:"15%" }} onClick={() => handleDelete(deleteCandidate._id)}> Delete</button>
      </div>
    </div>
  </div>
)}

{editCandidate && (
  <div className="modal-overlay" style={{marginTop:"4%"}}>
    <div className="modal-content">
      <h4 className="mb-3 text-center style">Edit Record</h4>
      <form>
        <div className="mb-2">
          <label className='fw-bold fs-5 style my-2 ms-3'>Name</label>
          <input
            type="text"
            className="form-control p-2 style w-75"
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <label className='fw-bold fs-5 style my-2 ms-3'>Email</label>
          <input
            type="email"
            className="form-control p-2 style w-75"
            value={editForm.email}
            onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <label className='fw-bold fs-5 style my-2 ms-3's>Phone</label>
          <input
            type="tel"
            className="form-control p-2 style w-75"
            value={editForm.phone}
            onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <label className='fw-bold fs-5 style my-2 ms-3'>Comment</label>
          <textarea
            className="form-control p-2 style w-75"
            value={editForm.comment}
            onChange={(e) => setEditForm({ ...editForm, comment: e.target.value })}
          ></textarea>
        </div>
      </form>
      <div className="d-flex justify-content-start gap-2 ms-3 mt-3">
        <button className="btn btn-warning w-25" onClick={() => setEditCandidate(null)}>Cancel</button>
        <button className="btn btn-outline-warning w-25" onClick={handleUpdateSubmit}>Update</button>
      </div>
    </div>
  </div>
)}

{createModalOpen && (
  <div className="modal-overlay">
    <div className="modal-content">
      <h4 className="mb-3 text-success">Create New Record</h4>
      <form>
        <div className="mb-2">
          <label className='fw-bold fs-5 style my-2 ms-3'>Name</label>
          <input
            type="text"
            className="form-control p-2 style w-75 "
            value={createForm.name}
            onChange={(e) => setCreateForm({ ...createForm, name: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <label className='fw-bold fs-5 style my-2 ms-3'>Email</label>
          <input
            type="email"
            className="form-control p-2 style w-75"
            value={createForm.email}
            onChange={(e) => setCreateForm({ ...createForm, email: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <label className='fw-bold fs-5 style my-2 ms-3'>Phone</label>
          <input
            type="tel"
            className="form-control p-2 style w-75"
            value={createForm.phone}
            onChange={(e) => setCreateForm({ ...createForm, phone: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <label className='fw-bold fs-5 style my-2 ms-3'>Comment</label>
          <textarea
            className="form-control p-2 style w-75"
            value={createForm.comment}
            onChange={(e) => setCreateForm({ ...createForm, comment: e.target.value })}
          ></textarea>
        </div>
      </form>
      <div className="d-flex justify-content-start gap-2 ms-3 mt-3">
        <button className=" btn btn-warning w-25" onClick={() => setCreateModalOpen(false)} >Cancel</button>
        <button className="btn btn-outline-warning w-25" onClick={handleCreateSubmit} >Create</button>
      </div>
    </div>

</div>
)}

    </>
  );
};

export default Cusview;

