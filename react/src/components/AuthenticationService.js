import axios from 'axios'
import {API_URL, JPA_API_URL} from '../../src/constants.js'
export const USER_NAME_SESSION_ATTRIBUTE_NAME = "authenticatedUser"

class AuthenticationService {

  executeJwtAuthenticationService(username, password){
    return axios.post(`${API_URL}/authenticate`,{
      username,
      password
    })
  }

  isLoggedInUserAdmin(){
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    if(user === "admin") return true
    return false
  }

  getUser(username){
    return axios.get(`${JPA_API_URL}/user/${username}`)

  }

  registerSuccesfulLoginForJwt(username, token){
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    this.setupAxiosInterceptors(this.createJwtToken(token))
  }

  createJwtToken(token){
    return 'Bearer ' + token
  }

  logout(){
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    if(user === null) return false
    return true
  }

  getLoggedInUsername(){
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
    if(user === null) return ''
    return user
  }
  
  setupAxiosInterceptors(token){
    axios.interceptors.request.use(
      (config) =>  {
        if(this.isUserLoggedIn()) {
          config.headers.authorization = token
        }  
        return config
      }
    )
  }
}
export default new AuthenticationService()