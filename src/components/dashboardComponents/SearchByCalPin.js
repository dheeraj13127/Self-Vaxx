import React,{useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import '../../App.css'
import Navbar4 from '../Navbars/Navbar4'
import {useDispatch,useSelector} from 'react-redux'
import {searchByCalPin} from '../../redux/actions/index'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Footer from '../Footer'
function SearchByCalPin() {
  const history=useHistory()
  const dispatch=useDispatch()
  const calPinData=useSelector(state=>state.calPinData)
  const [pin,setPin]=useState("")
  const [date,setDate]=useState("")
  const [auth,setAuth]=useState(false)
  const [fee,setFee]=useState("")
  console.log(calPinData)
  useEffect(()=>{
   
  const token=localStorage.getItem('covToken')
  if(token===""){
    history.push('/generateotp')
  }
  },[])
  const onFormSubmit=(e)=>{
    e.preventDefault()
    if(date===""||pin===""){
      NotificationManager.error('Details are required', '', 2000);
    }
    else if(pin.length>6 || pin.length<6){
      NotificationManager.error('Invalid District ID', '', 2000);
    }
    else{
      const newDate=date.toString().split("-").reverse().join("-")
      dispatch(searchByCalPin(pin,newDate))
    }
  
  }
  
  const filterArray=(array, filters)=> {
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
      // validates all filter criteria
      return filterKeys.every(key => {
        // ignores non-function predicates
        if (typeof filters[key] !== 'function') return true;
        return filters[key](item[key]);
      });
    });
  }
  const filters={
    fee_type:auth?fee_type=>fee_type===fee:"",
  }

  const data=filterArray(calPinData,filters)

const onFeeChange=(val)=>{
setFee(val)
setAuth(true)
}

  return (
    <div className="">
      <Navbar4/>
      <div className="p-2">
      <div className="container p-2 searchByPinContainer" style={{marginTop:"100px",borderRadius:"15px"}}>
        
        <div className="row ">
  <div className="col-12 col-sm-12 col-md-6 offset-md-3">
  <div className="text-end">
        <p>
        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1"><i className="fas fa-filter"></i></button>
        </p>
        </div>
    <div className="collapse multi-collapse" id="multiCollapseExample1">
      <div className="card cards card-body text-light" style={{background:"orange"}}>
        <div className="d-flex">
        <p>Fee Type :</p>
        <div className="form-check" style={{marginLeft:"8px"}}>
          <input className="form-check-input" type="radio"  onChange={()=>onFeeChange('Free')} name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label" htmlFor="flexRadioDefault1">Free</label>
          </div>
          <div className="form-check" style={{marginLeft:"8px"}}>
          <input className="form-check-input text-danger"  type="radio" name="flexRadioDefault" onChange={()=>onFeeChange('Paid')} id="flexRadioDefault1"/>
          <label className="form-check-label" htmlFor="flexRadioDefault1">Paid</label>
          </div>
        </div>
       
       
      </div>
    </div>
  </div>
</div>
        <div className="row mt-5">
          <div className="col-12 col-sm-12 col-md-6 offset-md-3">
          <div className="card bg-primary cards text-light p-3">
            <div className="text-center">
            <i className="far fa-calendar-alt" style={{fontSize:"35px"}}></i>
           
             </div>
            <form onSubmit={onFormSubmit}>
            <div className="input-group mt-3">
          <input type="text" className="form-control" placeholder="Pincode" onChange={e=>setPin(e.target.value)}/>
         
          </div>
          <div className="input-group mt-3 d-flex align-items-center">
          <input type="date" className="form-control" onChange={e=>setDate(e.target.value)}/>
          <i className="fas fa-calendar-check" style={{fontSize:"25px",marginLeft:"5px"}}></i>
          </div>
          <div className="text-center mt-3">
            <button className="btn btn-light text-primary">Submit</button>
          </div>
            </form>
           
       </div>
          </div>
        </div>
         {data.length!==0?(
          <div className="row mt-3">
        <div className="col col-sm-12 col-xs-12">
          <div className="table-responsive">
          <table className="table  table-bordered">
        <thead className="table-dark">
          <tr>
              <th scope="col">Hospital Name</th>
              <th scope="col">Data for next 7 days&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
              <th scope="col">Fee Type</th>
              <th scope="col">Min Age Limit</th>
              <th scope="col">Capacity</th>
              <th scope="col">Dose1</th>
              <th scope="col">Dose2</th>
              <th scope="col">Vaccine</th>
            
          </tr>
        </thead>
        <tbody className="table-primary">
            {data.map((pin,i)=>{
              return(
                <tr key={i}>
                <td>{pin.name}</td>
                <td>{pin.sessions.map((p,i)=>{
                  return(
                    <span>
                      <span key={i}>{p.date}</span><br />
                    </span>
                  )
                })}</td>
                <td>{pin.fee_type}</td>
                <td>{pin.sessions.map((p,i)=>{
                     return(
                      <span>
                        <span key={i}>{p.min_age_limit}</span><br />
                      </span>
                    )
                })}</td>
                <td>{pin.sessions.map(p=>{
                   return(
                    <span>
                      <span>{p.available_capacity}</span><br />
                    </span>
                  )
                })}</td>
                 <td>{pin.sessions.map((p,i)=>{
                   return(
                    <span key={i}>
                      <span>{p.available_capacity_dose1}</span><br />
                    </span>
                  )
                })}</td>
                 <td>{pin.sessions.map((p,i)=>{
                   return(
                    <span key={i}>
                      <span>{p.available_capacity_dose2}</span><br />
                    </span>
                  )
                })}</td>
                  <td>{pin.sessions.map((p,i)=>{
                   return(
                    <span key={i}>
                      <span>{p.vaccine}</span><br />
                    </span>
                  )
                })}</td>
            
                

                </tr>
              )
            })}
        </tbody>
      </table>
          </div>
        </div>
      </div>
        ):(
          <div className="text-center mt-3 col-12 col-sm-12 col-md-2 offset-md-5" >
            <p className="text-light bg-primary" style={{borderRadius:"12px"}}>No Results Found</p>
          </div>
        )} 
            
      </div>
      </div>
      
      <div style={{marginTop:"100px"}}>
      <Footer/>
      </div>
      
      <NotificationContainer/>
    </div>
  )
}

export default SearchByCalPin
