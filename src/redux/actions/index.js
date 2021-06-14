import {FETCH_PIN_DATA,GENERATE_OTP,CONFIRM_OTP,FETCH_PINCODE_DATA,FETCH_CALPIN_DATA,FETCH_DISTRICT_DATA,DOWNLOAD_PDF} from '../constants/covConstants'
import axios from 'axios'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
export const getPinData=()=>async(dispatch,getState)=>{
  axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=294&date=12-06-2021')
  .then(data=>dispatch({
    type:FETCH_PIN_DATA,
    payload:data.data.sessions,
  }))
  
}
export const searchByPincode=(pincode,date)=>async(dispatch,getState)=>{
  await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`)
  .then(res=>{
   
    dispatch({
      type:FETCH_PINCODE_DATA,
      payload:res.data.sessions
    })
  })
  .catch(err=>console.log(err))
}
export const searchByDistrict=(did,date)=>async(dispatch,getState)=>{
  await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${did}&date=${date}`)
  .then(res=>{
   
    dispatch({
      type:FETCH_DISTRICT_DATA,
      payload:res.data.sessions
    })
  })
  .catch(err=>console.log(err))
}
export const searchByCalPin=(pin,date)=>async(dispatch,getState)=>{
  await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pin}&date=${date}`)
  .then(res=>{
   
    dispatch({
      type:FETCH_CALPIN_DATA,
      payload:res.data.centers
    })
  })
  .catch(err=>console.log(err))
}

export const getCertificate=(benfId,token)=>async(dispatch,getState)=>{
  
  await axios.get(`https://cdn-api.co-vin.in/api/v2/registration/certificate/public/download?beneficiary_reference_id=${benfId}`,
 {
    responseType:'blob',
    headers:{
      'Authorization': `Bearer ${token}`,
     'Accept':'application/pdf' 
    }
    
  })
  .then(res=>{
    console.log(res)
    const url=window.URL.createObjectURL(new Blob([res.data]))
    const link=document.createElement('a')
    link.href=url
    link.setAttribute('download','cowin.pdf')
    document.body.appendChild(link)
    link.click()
  })
    .catch(err=>{
      NotificationManager.success('Unauthenticated Access !', '', 2000);
      dispatch({
      type:DOWNLOAD_PDF,
      payload:err.response.data
    })})
}
export const generateOTP=(number,history)=>async(dispatch,getState)=>{
  axios.post("https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP",{
    mobile:number
  },
  {
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json',
    }
  }).then(res=>{
    dispatch({
      type:GENERATE_OTP,
      payload:res.data.txnId
    })
    NotificationManager.success('An OTP has been sent to your number', '', 2000);
    setTimeout(()=>{
      history.push('/confirmotp')
    },2000)
  })
  .catch(err=>NotificationManager.error(err.response.data, '', 3000))
}
export const confirmOTP=(otp,txnid,history)=>async(dispatch,getState)=>{
  
  axios.post("https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP",{
    otp:otp,
    txnId:txnid
  },
  {
    headers:{
      'Content-Type':'application/json',
      'Accept':'application/json',
    }
  }).then(res=>{
    dispatch({
      type:CONFIRM_OTP,
      payload:res.data.token
    })
    localStorage.setItem('covToken',res.data.token)
    // localStorage.setItem("covToken",res)
    NotificationManager.success('You have successfully logged in !', '', 2000);
    setTimeout(()=>{
      history.push('/dashboard')
    },2000)
  })
  .catch(err=>NotificationManager.error(err.response.data.error, '', 2000))
}