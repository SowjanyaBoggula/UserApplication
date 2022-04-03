import React,{useState,useEffect} from "react";
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
const User=()=>{
    const [user,setUsers]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {id}=useParams();
    useEffect(()=>{
        loadUsers();
    })
    
    const loadUsers=async()=>{
        const result=await axios.get(`http://localhost:3004/users/${id}`);
        setUsers(result.data);
    };
     
    
    return(
         <div className="container py-4">
             <Link className="btn btn-primary" to="/home">
                 back to Home
             </Link>
             <h1 className="display-4">User Id:{id}</h1>
             <hr />
             <ul className="list-group w-50">
                 <li class="list-group-item">name:{user.name}</li>
                 <li class="list-group-item">username:{user.username}</li>
                 <li class="list-group-item">email:{user.email}</li>
                 <li class="list-group-item">phone:{user.phone}</li>
                 <li class="list-group-item">website:{user.website}</li>
             </ul>
         </div>
                         
            
        
    )
}
export default User;