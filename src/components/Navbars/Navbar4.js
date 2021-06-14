import React from 'react'
import '../../App.css'
import vaccine from '../images/vaccine1.png'


function Navbar4() {
  
  const onHandleCLick=()=>{
    localStorage.setItem('covToken',"")
    window.location.reload(false)
  }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg " style={{background:"orange"}}>
  <div className="container-fluid">
  <a className="navbar-brand text-light" href="">
      <img src={vaccine} alt="" width="30" height="30" className="d-inline-block align-text-top"/>
     Self-Vaxx
    </a>
    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-light"> <i className="fas fa-bars"></i></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav ml-auto p-2">
      <li className="nav-item">
          <a href="/dashboard" className="nav-link text-light" aria-current="page" >Dashboard</a>
        </li>
        <li className="nav-item">
          <a onClick={onHandleCLick} className="nav-link btn btn-success text-light">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar4
