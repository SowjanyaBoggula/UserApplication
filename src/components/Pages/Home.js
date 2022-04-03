import React,{useState,useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
const Home=()=>{
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        console.log("From Use Effect")
        loadUsers();
    },[]);
    const loadUsers=async()=>{
        const result=await axios.get(`http://localhost:3004/users`);
        console.log(result.data);
        //setUsers({ result:[...data]})

        setUsers(result.data);
    }
    const deleteUser=async id=>{
        await axios.delete(`http://localhost:3004/users/${id}`)
        loadUsers();
    }
    return(
        <div className="container">
            <div className="py-2">
                <h1>Home Page</h1>
                <table class="table border shadow">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=>(
                               <tr>
                                   <th scope='row'>{index+1}</th>
                                   <td>{user.name}</td>
                                   <td>{user.username}</td>
                                   <td>{user.email}</td>
                                   <td>{user.phone}</td>
                                   <td>
                                       <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>View</Link>
                                       <Link class="btn btn-secondary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
                                       <button class="btn btn-danger mx-2 btn-sm" onClick={()=>deleteUser(user.id)}>Delete</button> 
                                   </td>
                               </tr> 
                            )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home;