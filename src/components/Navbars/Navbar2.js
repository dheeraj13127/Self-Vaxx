import React from 'react'
import '../../App.css'
import vaccine from '../images/vaccine1.png'
function Navbar2() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{background:"orange"}}>
  <div className="container-fluid">
  <a className="navbar-brand text-light" href="#">
      <img src={vaccine} alt="" width="30" height="30" className="d-inline-block align-text-top"/>
     Self-Vaxx
    </a>
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-light"> <i className="fas fa-bars"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a href="/" className="nav-link text-light" aria-current="page" >Home</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link text-light" >About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar2
