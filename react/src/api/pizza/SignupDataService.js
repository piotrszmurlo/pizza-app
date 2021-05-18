import axios from 'axios'
import {JPA_API_URL, GUEST_TOKEN} from '../../constants.js'

class SignupDataService {
  
  doesUserExist(username){
    return axios.get(`${JPA_API_URL}/user/${username}`, {headers: {authorization: GUEST_TOKEN}})
    // .then(response => {
    //     if(response.data == ''){
    //       return false
    //     }
    //     return true
    // })
  }
  
  // deleteProduct(name, id){
  //   return axios.delete(`${JPA_API_URL}/user/${name}/basket/${id}`)
  // }

  // addToBasket(name,product, quantity){
  //   return axios.post(`${JPA_API_URL}/user/${name}/basket/`, product);
  // }
  registerNewUser(name, details){
    return axios.post(`${JPA_API_URL}/user/${name}`, details, {headers: {authorization: GUEST_TOKEN}});
  }
}
export default new SignupDataService()