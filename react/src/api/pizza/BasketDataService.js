import axios from 'axios'


class BasketDataService {
  
  retrieveBasket(name){
    return axios.get(`http://localhost:8080/user/${name}/basket`)
  }
  
  deleteProduct(name, id){
    return axios.delete(`http://localhost:8080/user/${name}/basket/${id}`)
  }

  addToBasket(name,id,product){
    return axios.put(`http://localhost:8080/user/${name}/basket/${id}`, product);
  }
}
export default new BasketDataService()