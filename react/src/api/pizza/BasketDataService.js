import axios from 'axios'


class BasketDataService {
  
  retrieveBasket(name){
    return axios.get(`http://localhost:8080/user/${name}/basket`)
  }
  
  deleteProduct(name, id){
    return axios.delete(`http://localhost:8080/user/${name}/basket/${id}`)
  }

  addToBasket(name,product){
    return axios.post(`http://localhost:8080/user/${name}/basket/`, product);
  }
}
export default new BasketDataService()