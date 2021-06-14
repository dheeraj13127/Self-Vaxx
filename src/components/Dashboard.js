import React, { useState,useEffect } from 'react'
import {useSelector} from 'react-redux' 
import '../App.css'
import {useHistory} from 'react-router-dom'
import Navbar3 from './Navbars/Navbar3'

function Dashboard () {
  const history=useHistory()
  useEffect(()=>{
  const token=localStorage.getItem('covToken')
  if(token===""){
    history.push('/generateotp')
  }
  },[])
  const pinData=useSelector(state=>state.pinData)

  
 
  
  return (
    <div>
      <Navbar3/>
      <div className="container pt-2 pb-2" style={{marginTop:"120px"}}>
        <div className="row pl-2 pr-2">
          <div className="col-12 col-sm-12 col-md-6 offset-md-3">
            <div className="cards text-center bg-success text-light p-4">
              <h2>Welcome To Self Vaxx</h2>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop:"50px"}}>
          <div className="col-12 col-sm-12 col-md-6 mt-3">
          <div className="card bg-primary cards text-light p-3">
            <div className="text-center">
            <i className="fas fa-search-location" style={{fontSize:"65px"}}></i>
            </div>
         
            <div className="card-body mt-2">
              <h4 className="card-title" style={{fontWeight:"bold"}}>Search By Pincode</h4>
              <p className="card-text">Get Vaccination Sessions By Entering Pincode</p>
              <div className="text-center">
                <a href="/searchByPin" className="btn btn-success px-5 bg-light"><i className="fas fa-arrow-right text-primary" style={{fontSize:"17px"}}></i></a>
              </div>
            </div>
       </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 mt-3">
          <div className="card bg-primary cards text-light p-3">
          <div className="text-center">
            <i className="fas fa-map-marked-alt" style={{fontSize:"65px"}}></i>
            </div>
            <div className="card-body">
            <h4 className="card-title mt-2" style={{fontWeight:"bold"}}>Search By District</h4>
              <p className="card-text">Get Vaccination Sessions By Entering District ID</p>
              <div className="text-center">
                <a href="/searchByDistrict" className="btn btn-success px-5 bg-light"><i className="fas fa-arrow-right text-primary" style={{fontSize:"17px"}}></i></a>
              </div>
            </div>
       </div>
          </div>
        </div>
        <div className="row mt-3">
        <div className="col-12 col-sm-12 col-md-6 mt-3">
          <div className="card bg-primary cards text-light p-3">
            <div className="text-center">
            <i className="far fa-calendar-alt" style={{fontSize:"65px"}}></i>
            </div>
         
            <div className="card-body mt-2">
              <h4 className="card-title" style={{fontWeight:"bold"}}>Search By Calendar and Pincode</h4>
              <p className="card-text">Get Vaccination Sessions For Next 7 Days</p>
              <div className="text-center">
                <a href="/searchByCalPin" className="btn btn-success px-5 bg-light"><i className="fas fa-arrow-right text-primary" style={{fontSize:"17px"}}></i></a>
              </div>
            </div>
       </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 mt-3">
          <div className="card bg-primary cards text-light p-3">
          <div className="text-center">
            <i className="fas fa-file-download" style={{fontSize:"65px"}}></i>
            </div>
            <div className="card-body">
            <h4 className="card-title mt-2" style={{fontWeight:"bold"}}>Download Certificate</h4>
              <p className="card-text">Download vaccination Certificate In PDF Format</p>
              <div className="text-center">
                <a href="/downloadPDF" className="btn btn-success px-5 bg-light"><i className="fas fa-arrow-right text-primary" style={{fontSize:"17px"}}></i></a>
              </div>
            </div>
       </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Dashboard 
