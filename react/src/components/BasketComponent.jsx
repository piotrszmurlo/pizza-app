import React, {Component} from 'react'
import {IMG_PATH} from '../constants.js'
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js'
import BasketDataService from '../api/pizza/BasketDataService.js'
class BasketComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      products : [],
      message : null,
      total : 0
    
  }
  this.deleteProductClicked = this.deleteProductClicked.bind(this);
  this.CheckoutClicked = this.CheckoutClicked.bind(this);  
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
    //console.log(id + " " +username);
    BasketDataService.deleteProduct(username, id)
    . then(
      responde => {
        this.setState({ message: `Delete of product ${productname} Succesful`})
        this.refreshBasket()
      }
    )
  }

  CheckoutClicked(){
  let username = AuthenticationService.getLoggedInUsername()
  //komenda move to basket history
  this.state.products.map(product=>{
    BasketDataService.deleteProduct(username, product.id)
    . then(
      response => {
        this.refreshBasket()
      }
    )
    this.setState({ message: `You just ordered succesful`})
  })
  }

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
              this.state.products.map(
                product =>
                <tr key={product.id}> 
                  <th>
                  <img src={require(`${IMG_PATH}${product.name}.png`).default} alt={product.name} width="60"></img>
                  {product.name}
                  </th>
                  <td>{product.quantity}</td>
                  <td>${product.price}</td>
                  <td>${product.quantity*product.price}</td>
                  <th> <button className="btn btn-danger" onClick={() => this.deleteProductClicked(product.name, product.id)}>Remove</button>
                  </th>
                </tr>
              )
              
            }
  </tbody>
</table>
<h3>Total: ${this.state.total}</h3>
<th><button className="btn btn-success" onClick={this.CheckoutClicked}>Checkout</button></th>
      </div>  
    )
  }
}
export default BasketComponent