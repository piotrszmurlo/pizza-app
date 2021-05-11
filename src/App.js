import './App.css';
import React, { Component } from 'react';
import margharita from './components/images/margharita.png'
import pepperoni from './components/images/pepperoni.png'
import error_image from './components/images/error.jpg'
import pizzaiolo from './components/images/pizzaiolo.jpg'
import prosciutto from './components/images/prosciutto.png'
import './components/ProductCard.css'
import './components/Button.css'
import './components/Login.css'
import './components/Basket.css'
import propTypes from 'prop-types'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom';
import './bootstrap.css'
import AuthenticationService from './components/AuthenticationService.js'
import AuthenticatedRoute from './components/AuthenticatedRoute.jsx'
import LoginComponent from './components/LoginComponent.jsx'
import BasketComponent from './components/BasketComponent.jsx'
import MenuComponent from './components/MenuComponent.jsx'
import SignupComponent from './components/SignupComponent.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'
class App extends Component {
  render() {
    return (
      <div className="bg-light App">
        <Router>
          <>
              <HeaderComponent/>
            <Switch>
              <Route path="/" exact component={WelcomeComponent}/>
              <Route path="/menu" component={MenuComponent}/>
              <Route path="/login" component={LoginComponent}/>
              <Route path="/signup" component={SignupComponent}/>
              <AuthenticatedRoute path="/basket" component={BasketComponent}/> 
              <AuthenticatedRoute path="/logout" component={LogoutComponent}/> 
              <AuthenticatedRoute path="/welcome/:name" component={WelcomeUserComponent}/> 
              <Route component={ErrorComponent}/>
            </Switch>
            <FooterComponent></FooterComponent>
          </>
        </Router>
      </div>
    )
  }
}

export default App;

class WelcomeComponent extends Component {
  render() {
    return(
      <div>
        <h1>Welcome to Pepe's pizza</h1>
        <img src={pizzaiolo} className='welcome_image' alt='welcome' ></img>
      </div>
    )
  }
}

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

class ErrorComponent extends Component {
  render(){
    return(
      <div>
        <h3>404: Page not found error</h3>
        <img src={error_image} className='error_image' alt='error' ></img>
      </div>
    )
  }
}




class LogoutComponent extends Component {
  render() {
    return(
      <>
      <h1>You have been logged out</h1>
      </>
    )
  }
}
class FooterComponent extends Component {
  render() {
    return(
      <footer className="footer">
        <span className="text-muted"> All Rights Reserved 2021 @pepespizza</span>
      </footer>
    )
  }
}


