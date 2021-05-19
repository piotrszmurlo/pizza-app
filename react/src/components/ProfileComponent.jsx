import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
import SignupDataService from '../api/pizza/SignupDataService.js'
import OrderDataService from '../api/pizza/OrderDataService.js'
class ProfileComponent extends Component {

  constructor(props) {
  super(props)
  this.state={
    userId: '',
    username: '',
    name: '',
    surname: '',
    number: '',
    city: '',
    street: '',
    streetNumber: '',
    orders: []
  }}

  componentDidMount() {
  let username = AuthenticationService.getLoggedInUsername()
  SignupDataService.doesUserExist(username)
  .then(response=>{
    this.setState({
      userId: response.data.id,
      username:response.data.username,
      name: response.data.name,
      surname: response.data.surname,
      number: response.data.number,
      city: response.data.city,
      street: response.data.street,
      streetNumber: response.data.streetNumber,
    })
      OrderDataService.getOrdersforUser(response.data.id)
      .then(response => {
        this.setState({orders: response.data})
    }
    )
      }
    )
  }

  getTotal(order){
    let total = 0
    for(let i = 0; i<order.products.length;i++){
      total += (order.products[i].price*order.products[i].quantity)
    }
    return <h5>${total}</h5>
  }

  getProducts(order){
    let productString = ''
    for(let i = 0; i<order.products.length;i++){
      if(i !== order.products.length-1)
      productString += (order.products[i].quantity) + ' ' +(order.products[i].name) + ', '
      else{
        productString += (order.products[i].quantity) + ' ' +(order.products[i].name)
      }
    }
    return productString
  }

  getOrders(){
    OrderDataService.getOrdersForUser(this.s).then(response => {this.setState({orders: response.data})
    })
  }

  render() {
    return(
    <div>
      <h1>Hey {this.state.name}</h1>
      <th></th>
    <h3>Your login is: {this.state.username}</h3>
    <h3>Adress of delivery is: {this.state.street} {this.state.streetNumber}, {this.state.city}</h3>
    <h3>Before delivery we will call you on the number: {this.state.number}</h3>
    <div>
        <h1>Your past order list</h1>
        <table className="table table-striped">
          <thead>
            <tr>
             <th>Order number</th>
             <th>Date</th>
             <th>Completed?</th>
             <th>Product list</th>
             <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.orders.reverse().map(
                order => 
                <tr key={order.id}> 
                  <td>{order.id}</td>
                  <td>{order.orderDate}</td>
                  <td>{order.completed && <div className ='text-success'> Order completed</div>} {!order.completed && <div className ='text-warning'>Order in progress</div>}</td>
                  <td >{this.getProducts(order)}</td>
                  <td>{this.getTotal(order)}</td>
                </tr>
              )
              
            }
          </tbody>
        </table>
      </div>
    </div>)
  }
}

export default ProfileComponent