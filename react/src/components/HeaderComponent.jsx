import AuthenticationService from './AuthenticationService.js'
import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom';
import logo from './images/logo.jpg'
import basket_image from './images/basket.png'

class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn()
    const isAdmin = AuthenticationService.isLoggedInUserAdmin()
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
            {!isAdmin && isUserLoggedIn && <Link className="nav-link" to={`/basket/${AuthenticationService.getLoggedInUsername()}`}><img src={basket_image} className='basket_image_header' alt='basket' height='25px' ></img></Link>}
            {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
            {!isAdmin && isUserLoggedIn && <li><Link className="nav-link" to={`/profile/${AuthenticationService.getLoggedInUsername()}`}>Profile</Link></li>}
            {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
            {isAdmin && isUserLoggedIn && <li><Link className="nav-link" to="/adminPanel">Admin Panel </Link></li>}
          </ul>
        </nav>
      </header>
      </div>
    )
  }
}

  export default withRouter(HeaderComponent)