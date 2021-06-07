import axios from 'axios'
import {JPA_API_URL, GUEST_TOKEN} from '../../constants.js'
import AuthenticationService from '../../components/AuthenticationService.js'

class SignupDataService {
  
  doesUserExist(username){
    return axios.get(`${JPA_API_URL}/user/${username}`, {headers: {authorization: GUEST_TOKEN}})
  }
  
  getUsers(){
    if(AuthenticationService.isLoggedInUserAdmin()){
      return axios.get(`${JPA_API_URL}/users`)
    }
    else {
      return null
    }
  }

  registerNewUser(name, details){
    return axios.post(`${JPA_API_URL}/user/${name}`, details, {headers: {authorization: GUEST_TOKEN}});
  }

  // getUser(username){
  //   if(AuthenticationService.isLoggedInUserAdmin()){
  //     return axios.get(`${JPA_API_URL}/user/username`)
  //   }
  // }

  deleteUser(id){
    if(AuthenticationService.isLoggedInUserAdmin()){
      return axios.delete(`${JPA_API_URL}/user/${id}`)
    }
    else {
      return null
    }
  }
}
export default new SignupDataService()