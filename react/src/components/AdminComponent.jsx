import React, {Component} from 'react'
import OrderDataService from '../api/pizza/OrderDataService.js'
class AdminComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      orders:[]
    }
    this.getOrders = this.getOrders.bind(this);
    this.markOrderAsCompleted = this.markOrderAsCompleted.bind(this)
  }

  getOrders(){
    OrderDataService.getOrders().then(response => {this.setState({orders: response.data})
    })
  }

  componentDidMount(){
    this.getOrders()
  }

  markOrderAsCompleted(order){
    order.completed = true
    OrderDataService.updateOrder(order.user.id, order.id, order)
    .then(response => this.getOrders())
  }

  render(){
    return(
      <div>
        <h1>Current order List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
             <th>Order number</th>
             <th>Username</th>
             <th>Date</th>
             <th>Complete?</th>
             <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.orders.map(
                order => !order.completed&&<>
                <tr key={order.id}> 
                  <td>{order.id}</td>
                  <td>{order.user.username}</td>
                  <td>{order.orderDate}</td>
                  <td><button onClick={() => this.markOrderAsCompleted(order)} className="btn btn-danger btn-lg">Complete order</button></td>
                </tr></>
              )
              
            }
          </tbody>
        </table>
      </div>
)}
}

export default AdminComponent