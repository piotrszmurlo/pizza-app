import axios from 'axios'
import {JPA_API_URL} from '../../constants.js'
import AuthenticationService from '../../components/AuthenticationService.js'

class OrderDataService {

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