import './Header.css'

import React, { useState } from 'react';


function Header() {

    return (
        <header className='principio' >
     
             <div className="inicio">
                
           <img className="perfil" src="public/fotodeperfil.jpg"/>
        <a className="yi" href="#">Photographer portfolio website. Study project.</a>

       </div>
       
       <div className='ji'>
       <a className="por" href="#">Reshat Aliyev</a>
       <a className="pori" href="#">Seguir</a>
       
       
       </div>

       <nav class="barra">
        <h1 class="tomass">TOMAS JACOBSEN</h1>
        <a class="barras" href="#">About</a>
        <a class="barras" href="#">Best Work</a>
        <a class="barras" href="#">Video</a>
        <a class="barras" href="#">Service</a>
        <a class="barras" href="#">Awards</a>
        <a class="barras" href="#">Contact</a>
        </nav>
       
       
     <nav className="navbar navbar-expand-lg navbar-light bg-light">

<div className="container-fluid">
 <a className="navbar-brand" href="#">Tomas Jacobson</a>
 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <span className="navbar-toggler-icon"></span>
 </button>
 <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul className="navbar-nav me-auto mb-2 mb-lg-0">
     <li className="nav-item">
       <a className="nav-link"  href="#About">About</a>
     </li>
     <li className="nav-item">
       <a className="nav-link" href="#Best Works">Best Works</a>
     </li>
     <li className="nav-item">
       <a className="nav-link" href="#Video">Video</a>
     </li>
     <li className="nav-item">
       <a className="nav-link " href="#Contac" >Contac</a>
     </li>
   </ul>
   
 </div>
</div>
 
</nav>
       
       </header>
    )
  }
  
  export default Header

