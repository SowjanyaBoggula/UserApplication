import React from 'react';
import { Link } from 'react-router-dom';
import '../Layouts/Styles.css';
 
const Navbar=()=>{
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
        <a className="navbar-brand" ><b>EthamesUsers</b></a>
         
           
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
           
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
               
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contacts">Contacts</Link>
              </li>
               
               
            </ul>
             
          </div>
          <Link className='btn btn-warning' to="/users/add">Add User</Link>
        </div>
         
      </nav>
      
    )
}
export default Navbar;