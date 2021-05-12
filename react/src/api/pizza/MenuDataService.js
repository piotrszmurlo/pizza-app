import axios from 'axios'


class MenuDataService {
  retrieveAllProducts(){
    return axios.get('http://localhost:8080/menu')
  }
}
export default new MenuDataService