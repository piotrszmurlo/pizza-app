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
      products : 
      [
      ]
    }
  }

  componentDidMount(){
    let username = AuthenticationService.getLoggedInUsername()
    BasketDataService.retrieveBasket(username)
    .then(response => {
      console.log(response)
      this.setState({products: response.data})
    })
  }

  render()
  {
    return(
      <div className="container">
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
                  {/* <td>{product.quantity}</td> */}
                  <td>${product.price}</td>
                  {/* <td>${product.quantity*product.price}</td> */}
                  <th> <button className="btn btn-danger">Remove</button>
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