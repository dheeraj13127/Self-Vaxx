import React, { useEffect, useState } from 'react'
import './App.css';     
import {BrowserRouter as Router,Route,useHistory,Switch} from 'react-router-dom'
import {getPinData} from './redux/actions/index'  
import {useDispatch,useSelector} from 'react-redux'    
import GenerateOTP from './components/GenerateOTP';
import ConfirmOTP from './components/ConfirmOTP';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import SearchByPin from './components/dashboardComponents/SearchByPin';
import SearchByDistrict from './components/dashboardComponents/SearchByDistrict';
import SearchByCalPin from './components/dashboardComponents/SearchByCalPin';
import DownloadPDF from './components/dashboardComponents/DownloadPDF';


    
     

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getPinData())
  },[])

  return (
    <Router>
       <div>
       <Route path="/" exact component={Landing} />
       <Route path="/generateotp" exact component={GenerateOTP} />
       <Route path="/confirmotp" exact component={ConfirmOTP}/>
       <Route path="/dashboard" exact component={Dashboard}/>
       <Switch>
       <Route path="/searchByPin" exact component={SearchByPin}/>
       <Route path="/searchByDistrict" exact component={SearchByDistrict}/>
       <Route path="/searchByCalPin" exact component={SearchByCalPin}/>
       <Route path="/downloadPDF" exact component={DownloadPDF}/>
       </Switch>
      
       </div>
    </Router>
   
  );
}

export default App;
