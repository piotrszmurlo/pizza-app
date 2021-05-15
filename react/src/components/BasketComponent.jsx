import React, {Component} from 'react'
import margharita from './images/margharita.png'
import pepperoni from './images/pepperoni.png'
import {Link} from 'react-router-dom';
import AuthenticationService from './AuthenticationService.js'
import BasketDataService from '../api/pizza/BasketDataService.js'
class BasketComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      products : [],
      message : null
    
  }
  this.deleteProductClicked = this.deleteProductClicked.bind(this);
  this.refreshTodos = this.refreshTodos.bind(this);  
  this.addToBasket = this.addToBasket.bind(this);  
}

  addToBasket(id){
  console.log({id} + " + basket")
  }

  componentDidMount(){
    this.refreshTodos()
  }

  refreshTodos(){
  let username = AuthenticationService.getLoggedInUsername()
  BasketDataService.retrieveBasket(username)
    .then(response => {
      console.log(response)
      this.setState({products: response.data})
    })
  }

  deleteProductClicked(productname, id) {
    let username = AuthenticationService.getLoggedInUsername()
    //console.log(id + " " +username);
    BasketDataService.deleteProduct(username, id)
    . then(
      responde => {
        this.setState({ message: `Delete of product ${productname} Succesful`})
        this.refreshTodos()
      }
    )
  }


  render()
  {
    return(
      
      <div className="container">
        {this.state.message &&<div class="alert alert-success">{this.state.message}</div>}
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
                <tr>
                  <th>
                  <img src={require(`${product.img_src}`).default} alt={product.name} width="60"></img>
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
<Link className="nav-link" to="/login"><button className="btn btn-success">Checkout</button></Link>
      </div>  
    )
  }
}
export default BasketComponent