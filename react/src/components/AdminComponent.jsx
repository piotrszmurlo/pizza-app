import React, {Component} from 'react'

class AdminComponent extends Component {

  constructor(props){
    super(props);
    this.sendOrder=this.sendOrder.bind(this);
  }

  render(){
    return(
      <div>
          {this.state.orders.map(
            order =>
            <tr key={order.id}>
              <div className="container">
    {this.state.message &&<div className="alert alert-success">{this.state.message}</div>}
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Order number</th>
          <th>Name</th>
          <th>Address</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <td>{order.number}</td>
        <td>{order.name}</td>
        <td>{order.address}</td>
        <td>${order.total}</td>
        <th>
        <button className="btn btn-danger" onClick={() => this.sendOrder}>Done</button>
        </th>
      </tbody>
      </table>
      </div>
      </tr>
          )}
    </div>
    )}
}

export default AdminComponent