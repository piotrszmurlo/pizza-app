import axios from 'axios'
import {API_URL} from '../../constants.js'
import AuthenticationService from '../../components/AuthenticationService.js'

class MenuDataService {
  
  retrieveAllProducts(){
    if (!AuthenticationService.isUserLoggedIn()){
      return axios.get(`${API_URL}/menu/`, {headers: {authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTYyMTc4MjU1MywiaWF0IjoxNjIxMTc3NzUzfQ.PRHwYjAdhGUXR5kL9yILiRqzO8bpl6US6AqFuUwWWyO1aNGA0-nB-ykQuepNSMloxFww5BKjO-_8JzE0hGkrQw"}})
    }
    else return axios.get(`${API_URL}/menu`)
  }

  retrieveProduct(id)
  {
    return axios.get(`${API_URL}/menu/${id}`)
  }
  
}
export default new MenuDataService