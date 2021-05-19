import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from '../components/AuthenticationService.js'
class WelcomeUserComponent extends Component {
  render() {
    return(
      <>
        <h1>Hello {this.props.match.params.name}!</h1>
        {!AuthenticationService.isLoggedInUserAdmin() &&
        <div className="container">
        Welcome to Pepe's pizza. Click <Link to="/menu">here</Link> to browse menu and place an order.
        </div>}
        {AuthenticationService.isLoggedInUserAdmin() &&
        <div className="container">
        You are logged in as an admin. Click <Link to="/adminPanel">here</Link> to manage orders.
        </div>}
      </>
    )
  }
}
export default WelcomeUserComponent