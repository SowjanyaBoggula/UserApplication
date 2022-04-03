import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contacts from './components/Pages/Contacts';
import Navbar from './components/Layouts/Navbar';
import User from './components/Users/User';
 import AddUser from './components/Users/AddUser';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EditUser from './components/Users/EditUser';

ReactDOM.render(
   
  
    <BrowserRouter>
    
    <Navbar />
    
    <Routes>
    <Route path="/" element={<Home />}>Home</Route>
      <Route path="/home" element={<Home />}>Home</Route>
      <Route path="/about" element={<About />}>About</Route>
      <Route path="/contacts" element={<Contacts />}>Contacts</Route>
      <Route path="/users/add" element={<AddUser />}>AddUser</Route>
      <Route path="/users/:id" element={<User />}>User</Route>
      <Route path="/users/edit/:id" element={<EditUser />}>EditUser</Route>
      </Routes>
      </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

