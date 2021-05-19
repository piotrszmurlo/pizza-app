import axios from 'axios'
import {GUEST_TOKEN, JPA_API_URL} from '../../constants.js'
import AuthenticationService from '../../components/AuthenticationService.js'

class MenuDataService {
  
  retrieveAllProducts(){
    if (!AuthenticationService.isUserLoggedIn()){
      return axios.get(`${JPA_API_URL}/menu`, {headers: {authorization: GUEST_TOKEN}})
    }
    else return axios.get(`${JPA_API_URL}/menu`)
  }

  retrieveProduct(id)
  {
    return axios.get(`${JPA_API_URL}/menu/${id}`)
  }
  
}
export default new MenuDataService()