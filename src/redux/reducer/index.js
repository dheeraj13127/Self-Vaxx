import {FETCH_PIN_DATA,GENERATE_OTP,CONFIRM_OTP,FETCH_PINCODE_DATA, FETCH_DISTRICT_DATA, FETCH_CALPIN_DATA, DOWNLOAD_PDF} from '../constants/covConstants'
const initState={
  pinData:[],
  txnid:"",
  token:"",
  pincodeData:[],
  districtData:[],
  calPinData:[],
  pdfError:""
}                                                                          
function rootReducer(state=initState,action){
 switch(action.type){
   case FETCH_PIN_DATA:
     return Object.assign({},state,{
       pinData:action.payload
     })
   case GENERATE_OTP:
      return Object.assign({},state,{
        txnid:action.payload
      })
   case CONFIRM_OTP:
        return Object.assign({},state,{
          token:action.payload
        })
   case FETCH_PINCODE_DATA:
          return Object.assign({},state,{
            pincodeData:action.payload
          })
   case FETCH_DISTRICT_DATA:
            return Object.assign({},state,{
              districtData:action.payload
            })
   case FETCH_CALPIN_DATA:
              return Object.assign({},state,{
                calPinData:action.payload
              })
  case DOWNLOAD_PDF:
                return Object.assign({},state,{
                  pdfError:action.payload
                })
    default:
      return state
 }
 
}
export default rootReducer
