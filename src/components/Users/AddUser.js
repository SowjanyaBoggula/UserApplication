
import React from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";

const AddUser=()=>{
    let navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:""
    });
    const {name,username,email,phone}=user;
    const onInputChange=e=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})

    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post(`http://localhost:3004/users`,user);
        navigate.push("/")

    }
    return(
        <div className='container'>
             
          
         <form class="row g-3" onSubmit={e=>onSubmit(e)}>
        
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="name" name="name" aria-describedby="emailHelp" placeholder="enter the name" value={name} onChange={e=>onInputChange(e)} />

  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">UserName</label>
    <input type="password" class="form-control" id="username" name="username" placeholder="enter the username" value={username} onChange={e=>onInputChange(e)} />

  </div>
  <div class ="mb-3">
    <label for="exampleInputEmail1" class="form-label">email</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  name="email" aria-describedby="emailHelp" placeholder="enter the email" value={email} onChange={e=>onInputChange(e)} />

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">phone no</label>
    <input type="text" class="form-control" id="phone" aria-describedby="emailHelp" name="phone" placeholder="enter the phone no" value={phone} onChange={e=>onInputChange(e)} />

  </div>
  <div class="col-12">
  <button type="submit" class="btn btn-primary">Add User</button>
  </div>
</form>        
        </div>
        
    )
}
export default AddUser;
