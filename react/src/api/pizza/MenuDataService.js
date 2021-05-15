import axios from 'axios'


class MenuDataService {
  
  retrieveAllProducts(){
    let username = 'admin1'
    let password = 'admin'
    let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)
    return axios.get('http://localhost:8080/menu', {headers: {authorization: basicAuthHeader}})
  }
}
export default new MenuDataService