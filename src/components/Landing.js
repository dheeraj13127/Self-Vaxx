import React from 'react'
import '../App.css'
import Navbar1 from './Navbars/Navbar1'
import image1 from './images/landing1.jpg'
import image2 from './images/landing2.jpg'
import image3 from './images/landing3.jpg'
import Footer from './Footer'
function Landing() {
  return (
    <div>
      <Navbar1/>
    <div className="container">
      <div className="row p-3">
      <div className="row text-center" style={{marginTop:"100px"}}>
        <div className="col-12 col-sm-12 col-md-6 offset-md-3">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{borderRadius:"15px"}}>
    <div className="carousel-inner slide" style={{border:"2px solid white",borderRadius:"15px"}}>
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" style={{width:"180px",height:"250px"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="..." style={{width:"180px",height:"250px"}}/>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="..." style={{width:"180px",height:"250px"}}/>
    </div>
      </div>
      </div>
        </div>
      
     </div>
     <div className="mt-5">
       <h5 className="text-dark text-center">Get your nearest vaccination center and slots availability</h5>
     </div>
     <div className="landingButtons text-center p-2 row mt-5" style={{marginLeft:"5px"}}>
       <div className="col-12 col-sm-4 ">
       <button className="btn btn-success mt-4" style={{borderRadius:"20px"}}>Search by PIN</button>
       </div>
       <div className="col-12 col-sm-4">
       <button className="btn btn-success mt-4" style={{borderRadius:"20px",fontSize:"15px"}}>Search by Date</button>
       </div>
       <div className="col-12 col-sm-4">
       <button className="btn btn-success mt-4" style={{borderRadius:"20px"}}>Search by Fee</button>
       </div>
     </div>
    
      <div className="row mt-4 p-4 d-flex justify-content-center" style={{marginLeft:"5px"}}>
        <div className="col-12 col-sm-12 col-md-4 mt-3 p-3" >
          <div className="text-center">
          <i className="fas fa-sign-in-alt" style={{fontSize:"70px",color:"orange"}}></i>
          <h5 className="text-center mt-1" style={{fontWeight:"bold"}}>Login Yourself</h5>
          <p className="text-center">Login by entering right otp.</p>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 mt-3 p-3" >
          <div className="text-center">
          <i className="fas fa-hospital" style={{fontSize:"70px",color:"orange"}}></i>
          <h5 className="text-center mt-1" style={{fontWeight:"bold"}}>Find Vaccine Locations</h5>
          <p className="text-center">Search Your Nearby Vaccination centers and Get Vaccinated.</p>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-4 mt-3 p-3" >
          <div className="text-center">
          <i className="far fa-edit" style={{fontSize:"70px",color:"orange"}}></i>
          <h5 className="text-center mt-1" style={{fontWeight:"bold"}}>Check For Slots</h5>
          <p className="text-center">Get Notified About The Slots.</p>
          </div>
        </div>
      </div>
      </div>
      
     
    </div>
    <Footer/>
    </div>
   
  )
}

export default Landing
