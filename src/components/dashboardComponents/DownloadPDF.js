import React,{useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import '../../App.css'
import Navbar4 from '../Navbars/Navbar4'
import {getCertificate} from '../../redux/actions/index'
import {useDispatch} from 'react-redux'
import Footer from '../Footer'
import {NotificationContainer, NotificationManager} from 'react-notifications';
function DownloadPDF() {
  const dispatch=useDispatch()
  const history=useHistory()
  const [benfID,setBenfID]=useState("")
  
  useEffect(()=>{
  const token=localStorage.getItem('covToken')
  if(token===""){
    history.push('/generateotp')
  }
  },[])
const onFormSubmit=(e)=>{
  e.preventDefault()
  if(benfID===""){
    NotificationManager.error('Beneficiary ID is required', '', 2000);
  }
  else{
    const token=localStorage.getItem('covToken')
  
    dispatch(getCertificate(benfID,token))
  }
 
}
  return (
    <div>
      <Navbar4/>
      <div className="p-2">
      <div className="container p-2 searchByPinContainer1" style={{marginTop:"100px",borderRadius:"15px"}}>
        
      <div className="row" style={{marginTop:"100px"}}>
          <div className="col-12 col-sm-12 col-md-6 offset-md-3">
          <div className="card bg-primary cards text-light p-3">
            <div className="text-center">
            <i className="fas fa-file-download" style={{fontSize:"35px"}}></i>
             </div>
          <form onSubmit={onFormSubmit}>
          <div className="input-group mt-3">
          <input type="text" className="form-control" value={benfID} placeholder="Beneficiary ID" onChange={e=>setBenfID(e.target.value)}/>
         
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-light text-primary">Download PDF</button>
          </div>
          </form> 
       </div>
          </div>
        </div>
   
      </div>
      </div>
      <div style={{marginTop:"80px"}}>
      <Footer/>
      </div>
      <NotificationContainer/>
    </div>
  )
}

export default DownloadPDF
