import axios from 'axios'
import {API_URL} from '../../constants.js'

class MenuDataService {
  
  retrieveAllProducts(){
    // let username = 'guest'
    // let password = 'guest'
    // let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
    return axios.get(`${API_URL}/menu`)
  }

  retrieveProduct(id)
  {
    return axios.get(`${API_URL}/menu/${id}`)
  }
  
}
export default new MenuDataService