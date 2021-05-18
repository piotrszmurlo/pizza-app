import axios from 'axios'
import {JPA_API_URL} from '../../constants.js'

class BasketDataService {
  
  retrieveBasket(name){
    return axios.get(`${JPA_API_URL}/user/${name}/basket`)
  }
  
  deleteProduct(name, id){
    return axios.delete(`${JPA_API_URL}/user/${name}/basket/${id}`)
  }

  deleteBasket(name){
    return axios.delete(`${JPA_API_URL}/user/${name}/basket`)
  }

  retrieveBasketProduct(name, id){
    return axios.get(`${JPA_API_URL}/user/${name}/basket/${id}`)
  }

  // addToBasket(name,product, quantity){
  //   return axios.post(`${JPA_API_URL}/user/${name}/basket/`, product);
  // }
  addToBasket(name,product){
    return axios.post(`${JPA_API_URL}/user/${name}/basket/`, product);
  }

  createProductsOrder(userId, orderInfo){
    return axios.post(`${JPA_API_URL}/user/${userId}/order`, orderInfo)
  }

  getUserOrders(userId){
    return axios.get(`${JPA_API_URL}/user/${userId}/order`)
  }

  createSoldProduct(username, soldProduct){
    return axios.post(`${JPA_API_URL}/user/${username}/sale`, soldProduct)
  }

  
  
}
export default new BasketDataService()