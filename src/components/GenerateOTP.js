import React,{useState} from 'react'
import {sha256} from 'js-sha256'  
import Navbar2 from './Navbars/Navbar2'
import Footer from './Footer'
import {useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {generateOTP} from '../redux/actions/index'
import vaccine from './images/vaccine1.png'
function GenerateOTP() {
  const history=useHistory()
  const dispatch=useDispatch()
  const [number,setNumber]=useState("")
  const onNumberChange=(e)=>{
    setNumber(e.target.value)
  }
  const onNumberSubmit=(e)=>{
    e.preventDefault()
    if(number.length>10 ||(number.length>0 && number.length<10)){
      NotificationManager.error('Invalid Number', '', 3000);
    }
    else if( number.length===0){
      NotificationManager.error('Enter the Phone Number', '', 3000);
    }
    else{
      dispatch(generateOTP(number,history))
      
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
        <form className="mt-5" onSubmit={onNumberSubmit}>
        <div className="input-group">
      <span className="input-group-text bg-success text-light" id="addon-wrapping">+91</span>
      <input type="number" onChange={onNumberChange} value={number} className="form-control" placeholder="Phone Number" aria-label="Username" aria-describedby="addon-wrapping"/>
        </div>
        <div className="text-center mt-5">
          <button className="btn btn-success text-light">Generate OTP</button>
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

export default GenerateOTP
