import React, {Component} from 'react'
import OrderDataService from '../api/pizza/OrderDataService.js'
class AdminComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      showAll: false,
      orders:[]
    }
    this.getOrders = this.getOrders.bind(this)
    this.markOrderAsCompleted = this.markOrderAsCompleted.bind(this)
    this.toggleView = this.toggleView.bind(this)
  }

  getOrders(){
    OrderDataService.getOrders().then(response => {this.setState({orders: response.data})
    })
  }

  getTotal(order){
    let total = 0
    for(let i = 0; i<order.products.length;i++){
      total += (order.products[i].price*order.products[i].quantity)
    }
    return <h5>${total}</h5>
  }

  componentDidMount(){
    this.getOrders()
  }

  markOrderAsCompleted(order){
    order.completed = true
    OrderDataService.updateOrder(order.user.id, order.id, order)
    .then(response => this.getOrders())
  }

  getProducts(order){
    let productString = ''
    for(let i = 0; i<order.products.length;i++){
      if(i !== order.products.length - 1)
      productString += (order.products[i].quantity) + ' ' +(order.products[i].name) + ', '
      else{
        productString += (order.products[i].quantity) + ' ' +(order.products[i].name)
      }
    }
    return productString
  }

toggleView(){
  let view = this.state.showAll
  console.log(this.state.showAll)
  this.setState({showAll: !view})
}

  render(){
    return(
      <div>
        <h1>Order list</h1>
        <button onClick={this.toggleView} className="btn btn-danger btn-sm">Toggle view of completed orders</button>
        {this.state.showAll && 
        <table className="table table-striped">
          <thead>
            <tr>
             <th>Order number</th>
             <th>Username</th>
             <th>Date</th>
             <th>Products</th>
             <th>Total</th>
             <th>Complete?</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.orders.reverse().map(
                order => !order.completed&&<>
                <tr key={order.id}> 
                  <td>{order.id}</td>
                  <td>{order.user.username}</td>
                  <td>{order.orderDate}</td>
                  <td>{this.getProducts(order)}</td>
                  <td>{this.getTotal(order)}</td>
                  <td><button onClick={() => this.markOrderAsCompleted(order)} className="btn btn-danger btn-sm">Complete order</button></td>
                </tr></>
              )
              
            }
          </tbody>
        </table>}
        {!this.state.showAll && 
        <table className="table table-striped">
          <thead>
            <tr>
             <th>Order number</th>
             <th>Username</th>
             <th>Date</th>
             <th>Products</th>
             <th>Total</th>
             <th>Complete?</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.orders.reverse().map(
                order =>
                <tr key={order.id}> 
                  <td>{order.id}</td>
                  <td>{order.user.username}</td>
                  <td>{order.orderDate}</td>
                  <td>{this.getProducts(order)}</td>
                  <td>{this.getTotal(order)}</td>
                  <td>{!order.completed&&<button onClick={() => this.markOrderAsCompleted(order)} className="btn btn-danger btn-sm">Complete order</button>}{order.completed && <div className ='text-success'> Order completed</div>}</td>
                </tr>
              )
              
            }
          </tbody>
        </table>}
      </div>
)}
}

export default AdminComponent