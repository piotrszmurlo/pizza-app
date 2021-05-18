import React, {Component} from 'react'
import {IMG_PATH} from '../constants.js'
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js'
import BasketDataService from '../api/pizza/BasketDataService.js'
class BasketComponent extends Component {
  constructor(props){
    super(props);

    var today = new Date();
    this.state = {
      products : [],
      message : null,
      total : 0,
      orderDate : today.getFullYear() + '-' + today.getMonth()+ '-' + today.getDate() + ', '+ today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(),
  }
  this.deleteProductClicked = this.deleteProductClicked.bind(this);
  this.checkoutClicked = this.checkoutClicked.bind(this); 
  this.addOne = this.addOne.bind(this);
  this.minusOne = this.minusOne.bind(this);
}


  componentDidMount(){
    this.refreshBasket()
  }

  refreshBasket(){
  let username = AuthenticationService.getLoggedInUsername()
  BasketDataService.retrieveBasket(username)
    .then(response => {
      console.log(response)
      this.setState({products: response.data})
      let newTotal=0;
      this.state.products.map(product=>newTotal=newTotal+product.quantity*product.price)
      this.setState({total:newTotal})
    })
    
  }

  deleteProductClicked(productname, id) {
    console.log('a')
    let username = AuthenticationService.getLoggedInUsername()
    BasketDataService.deleteProduct(username, id)
    . then(
      responde => {
        this.setState({ message: `Delete of product ${productname} Succesful`})
        this.refreshBasket()
      }
    )
  }

  checkoutClicked(){
  let username = AuthenticationService.getLoggedInUsername()
  //komenda move to basket history
  this.state.products.map(product=>{
    BasketDataService.deleteProduct(username, product.id)
    . then(
      response => {
        this.refreshBasket()
        console.log(this.state.orderDate)
      }
    )
    this.setState({ message: `You just ordered succesfuly`})
    
  })
  }

  addOne(product){
    let username_ = AuthenticationService.getLoggedInUsername()
    BasketDataService.retrieveBasket(username_)
      .then(response => {
      for(let i = 0; i < response.data.length; i += 1){
        if(response.data[i].name === product.name){
          BasketDataService.deleteProduct(username_, response.data[i].id)
          BasketDataService.addToBasket(username_,{id: product.id, name: product.name, price: product.price, username: username_, quantity: response.data[i].quantity+1})
          .then(response=>
          this.refreshBasket())
          break
        }
    }
  })}

  minusOne(product){
    let username_ = AuthenticationService.getLoggedInUsername()
    BasketDataService.retrieveBasket(username_)
      .then(response => {
      for(let i = 0; i < response.data.length; i += 1){
        if(response.data[i].name === product.name){
          BasketDataService.deleteProduct(username_, response.data[i].id)
          .then(response=>this.refreshBasket())
          if (response.data[i].quantity>1){
          BasketDataService.addToBasket(username_,{id: product.id, name: product.name, price: product.price, username: username_, quantity: response.data[i].quantity-1})
          .then(response=>
          this.refreshBasket())
          break
        }

    }}
  })}
  
  render()
  {
    return(
      
      <div className="container">
        {this.state.message &&<div className="alert alert-success">{this.state.message}</div>}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.orders.map(
                product =>
                <tr key={product.id}> 
                  <td>{product.quantity}</td>
                  <td>${product.price}</td>
                  <td>${product.quantity*product.price}</td>
                  <th><button className="btn btn-warning" onClick={() => this.minusOne(product)}>-</button> 
                    <button className="btn btn-success" onClick={() => this.addOne(product)}>+</button> 
                    <button className="btn btn-danger" onClick={() => this.deleteProductClicked(product.name, product.id)}>Remove</button>
                  </th>
                </tr>
              )
              
            }
  </tbody>
</table>
<h3>Total: ${this.state.total}</h3>
<th><button className="btn btn-success" onClick={this.checkoutClicked}>Checkout</button></th>
      </div>  
    )
  }
}
export default BasketComponent