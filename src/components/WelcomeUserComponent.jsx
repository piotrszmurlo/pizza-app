import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class WelcomeUserComponent extends Component {
  render() {
    return(
      <>
        <h1>Hello {this.props.match.params.name}!</h1>
        <div className="container">
        Welcome to Pepe's pizza. Click <Link to="/menu">here</Link> to browse menu and place an order.
        </div>
      </>
    )
  }
}
export default WelcomeUserComponent