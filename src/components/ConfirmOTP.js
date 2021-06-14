import React, { useState } from 'react'
import {sha256} from 'js-sha256'  
import Navbar2 from './Navbars/Navbar2'
import Footer from './Footer'
import {useDispatch,useSelector} from 'react-redux'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import vaccine from './images/vaccine1.png'
import {useHistory} from 'react-router-dom'
import { confirmOTP } from '../redux/actions'
function ConfirmOTP() {
  const dispatch=useDispatch()
  const history=useHistory()
  const data=useSelector(state=>state.txnid)
 
  console.log(data)
  const [otp,setOtp]=useState("")
  const onOtpChange=(e)=>{
    setOtp(e.target.value)
  }
  const onOtpSubmit=(e)=>{
    e.preventDefault()
    if(data===""){
      history.push('/generateotp')
    }
    else if(otp.length>6||otp.length<6){
      NotificationManager.error('Invalid OTP', '', 3000);
    }
    else{
      const sha=sha256(otp)
      dispatch(confirmOTP(sha,data,history))
      
    }
  }
  return (
    <div>
    <Navbar2/>
    <div className="container">
      <div className="row p-3">
        <div className="col-12 col-sm-12 col-md-6 offset-md-3 generateCol bg-light" style={{borderRadius:"15px",marginTop:"80px",padding:"70px 30px"}}>
          <div className="text-center">
          <a className="navbar-brand text-dark" href="">
      <img src={vaccine} alt="" width="30" height="30" className=""/>
        Self-Vaxx
        </a>
          </div>
       
        <p className="text-center text-danger mt-2">Note: Only Beneficiaries Can Log In.</p>
        <form className="mt-5" onSubmit={onOtpSubmit}>
        <div className="input-group">
      <input type="number"  className="form-control" placeholder="Enter OTP" aria-describedby="addon-wrapping" value={otp} onChange={onOtpChange}/>
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-success text-light">Confirm OTP</button>
        </div>
        </form>  
        </div>
      </div>
    </div>
    <div style={{marginTop:"180px"}}>
    <Footer/>
    </div>
    <NotificationContainer/>
    </div>
  )
}

export default ConfirmOTP

