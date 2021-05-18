import axios from 'axios'
import {JPA_API_URL, GUEST_TOKEN} from '../../constants.js'
import AuthenticationService from '../../components/AuthenticationService.js'

class OrderDataService {
  
  // doesUserExist(username){
  //   return axios.get(`${JPA_API_URL}/user/${username}`, {headers: {authorization: GUEST_TOKEN}})
  //   // .then(response => {
  //   //     if(response.data == ''){
  //   //       return false
  //   //     }
  //   //     return true
  //   // })
  // }
  
  // getAllUsers(){
  //   if(AuthenticationService.isLoggedInUserAdmin()){
  //     return axios.get(`${JPA_API_URL}/users`)
  //   }
  //   else {
  //     return null
  //   }
  // }

  // registerNewUser(name, details){
  //   return axios.post(`${JPA_API_URL}/user/${name}`, details, {headers: {authorization: GUEST_TOKEN}});
  // }
  getOrders(){
    if(AuthenticationService.isLoggedInUserAdmin()){
    return axios.get(`${JPA_API_URL}/orders`)
    }
    return null
  }
  
  updateOrder(userId, orderId, productsOrder){
    if(AuthenticationService.isLoggedInUserAdmin()){
      return axios.put(`${JPA_API_URL}/user/${userId}/order/${orderId}`, productsOrder)
      }
      return null
  }
}
export default new OrderDataService()