import axios from 'axios'


class BasketDataService {
  
  retrieveBasket(name){
    return axios.get(`http://localhost:8080/user/${name}/basket`)
  }
}
export default new BasketDataService()