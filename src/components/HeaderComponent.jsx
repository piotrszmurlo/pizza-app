import AuthenticationService from './AuthenticationService.js'
import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom';
import logo from './images/logo.jpg'
import basket_image from './images/basket.png'

class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
    console.log(isUserLoggedIn)
    return(
      <div className='header1'>
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div><h1 className="navbar-brand">
            <img src={logo} width="50" height="50" alt=""></img>
            </h1></div>
            <Link className="nav-link" to="/">Pepe's Pizza</Link>
          <ul className="navbar-nav">
            <Link className="nav-link" to="/menu">Menu</Link>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {isUserLoggedIn && <Link className="nav-link" to="/basket"><img src={basket_image} className='basket_image_header' alt='basket' height='25px' ></img></Link>}
            {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
            {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
          </ul>
        </nav>
      </header>
      </div>
    )
  }
}

export default withRouter(HeaderComponent)