import React, { useEffect } from "react";
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';
import { useState } from "react";
import {Link} from 'react-router-dom';

const EditUser=()=>{
    let navigate=useNavigate();
   const {id}=useParams();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:""
    });
    const {name, username,email,phone}=user;
    const onInputChange=e=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})

    };
    useEffect(()=>{
       
      loadUser()
       
    },[]);
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:3004/users/${id}`,user);
        navigate.push("/")

    }
    const loadUser=async()=>{
      const result=await axios.get(`http://localhost:3004/users/${id}`);
      console.log(result.data);
      setUser(result.data);
  };
    return(
        <div className="container">
         <Link className="btn btn-primary" to="/home">
                 back to Home
             </Link>
         <h2 className="text-center mb-4"> EditItem</h2> 
         <form class="row g-3" onSubmit={e=>onSubmit(e)}>
        
  <div class="col-mb-3">
    <label for="InputId" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" name="name"   placeholder="enter the id" value={name} onChange={e=>onInputChange(e)} />

  </div>
  <div class="mb-3">
    <label for="InputName" class="form-label">User Name</label>
    <input type="text" class="form-control" id="name"  name="username" placeholder="enter the name" value={username} onChange={e=>onInputChange(e)} />

  </div>
  <div class ="mb-3">
    <label for="exampleInputPrice" class="form-label">Email</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  name="email" placeholder="enter email" value={email} onChange={e=>onInputChange(e)} />

  </div>
  <div class="mb-3">
    <label for="InputUrl" class="form-label">Phone</label>
    <input type="text" class="form-control" id="phone"  name="phone" placeholder="enter the url" value={phone} onChange={e=>onInputChange(e)} />

  </div>
   
   
  <div class="col-12">
  <button type="submit" class="btn btn-primary">Edit User</button>
  </div>
</form>        
        </div>
        
    )
}
export default EditUser;
