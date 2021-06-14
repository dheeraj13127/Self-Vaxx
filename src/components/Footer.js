import React from 'react'

function Footer() {
  return (
    <div className="container-fluid">
      <div className="row p-4" style={{background:"orange"}}>
        <footer>
        <div className="col ">
        <h2 className="text-center text-light">Contact Me</h2>
        <div className="d-flex justify-content-center mt-3">
        <div className="col-4 col-sm-4 col-md-4 text-center">
        <a href="https://github.com/dheeraj13127/"><i className="fab fa-github text-light" style={{fontSize:"50px"}}></i></a>
        </div>
        <div className="col-4 col-sm-4 col-md-4 text-center">
        <a href="https://www.instagram.com/dheeraj_msdian/"><i className="fab fa-instagram text-light" style={{fontSize:"50px"}}></i></a>
        </div>
        <div className="col-4 col-sm-4 col-md-4 text-center">
        <a href="https://twitter.com/Dheeraj93231271"><i className="fab fa-twitter text-light" style={{fontSize:"50px"}}></i></a>
        </div>
        </div>
        <div className="text-center mt-3">
        <h6 className="text-light">&copy; Copyrights Self-Vaxx</h6>
        </div>
        </div>
        </footer>
       
      </div>
    </div>
  )
}

export default Footer
