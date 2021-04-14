import './App.css';
import React, { Component } from 'react';
import margharita from './images/margharita.png'
import pepperoni from './images/pepperoni.png'
import error_image from './images/error.jpg'
import logo from './images/logo.jpg'
import pizzaiolo from './images/pizzaiolo.jpg'
import basket_image from './images/basket.png'
import './components/ProductCard.css'
import './components/Button.css'
import './components/Login.css'
import './components/Basket.css'
import propTypes from 'prop-types'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom';
import './bootstrap.css'
import { render } from '@testing-library/react';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
              <HeaderComponent/>
            <Switch>
              <Route path="/" exact component={WelcomeComponent}/>
              <Route path="/menu" component={MenuComponent}/>
              <Route path="/login" component={LoginComponent}/>
              <Route path="/basket" component={BasketComponent}/> 
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
        <img src={pizzaiolo} className='welcome_image' alt='welcome'></img>
        Welcome to Pepe's Pizzeria
        
      </div>
    )
  }
}

class MenuComponent extends Component {
  render() {
    return(
      <div>
      <h3 className='header'>Menu</h3>
      <center>
      <table  cellPadding="8" cellSpacing="0" colspan="3" width="150" height="150">
      <tr>
        <td><ProductCard id={1} name='Margharita' ingredients='ciasto, sos, ser' picture={margharita} price="20"></ProductCard></td>
        <td><ProductCard id={2} name='Pepperoni' ingredients='ciasto, sos, ser, pepperoni' picture={pepperoni} price="20"></ProductCard></td>
        <td><ProductCard id={3} name='Pepperoni' ingredients='ciasto, sos, ser, pepperoni' picture={pepperoni} price="20"></ProductCard></td>
      </tr>
      <tr>
        <td><ProductCard id={4} name='Margharita' ingredients='ciasto, sos, ser' picture={margharita} price="20"></ProductCard></td>
        <td><ProductCard id={5} name='Pepperoni' ingredients='ciasto, sos, ser, pepperoni' picture={pepperoni} price="20"></ProductCard></td>
        <td><ProductCard id={6} name='Pepperoni' ingredients='ciasto, sos, ser, pepperoni' picture={pepperoni} price="20"></ProductCard></td>
      </tr>
      <tr>
        <td><ProductCard id={7} name='Margharita' ingredients='ciasto, sos, ser' picture={margharita} price="20"></ProductCard></td>
        <td><ProductCard id={8} name='Pepperoni' ingredients='ciasto, sos, ser, pepperoni' picture={pepperoni} price="20"></ProductCard></td>
        <td><ProductCard id={9} name='Pepperoni' ingredients='ciasto, sos, ser, pepperoni' picture={pepperoni} price="20"></ProductCard></td>
      </tr>
        
      </table>
      </center>
        
      </div>
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
class Button extends Component {
  render() {
    return(
      <div>
        <button className="btn btn-danger">Add to cart</button>
      </div>
    )
  }
}


class ProductCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="productcard">
          <div className='menu-button'>
            <button className="btn btn-danger" onClick={BasketComponent.addToBasket} value={this.props.id}>Add to cart</button>
            <a className='price'>{this.props.price}$</a>
          </div>
        <div className='product-card-in'>
          <img src={this.props.picture} className='picture' alt='pizza' ></img>
        </div>
          <div>
          <p className='name'>{this.props.name}</p>
          <p className='ingredients'>Ingredients: {this.props.ingredients}</p>
          </div>
      </div>
    )
  }
}
ProductCard.propTypes = {name: propTypes.string.isRequired}
ProductCard.propTypes = {ingredients: propTypes.string.isRequired}
ProductCard.propTypes = {picture: propTypes.string.isRequired}
ProductCard.propTypes = {price: propTypes.string.isRequired}
ProductCard.propTypes = {id: propTypes.number.isRequired}


class LoginComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange= this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
  }
  
  loginClicked(){
    this.props.history.push("/menu")
    console.log('Trying to log')
  }

  handleChange(event){
    console.log(this.state);
    this.setState(
      {
        [event.target.name]:
        event.target.value})
  }

  render(){
    return (
      <div className='span2'>
        <div className='login-outer-card'>
     <div className="login-card">
        <h3 className='Login-header'>Logowanie</h3><br /><br />
        Username: <input  type="text" name="username" placeholder="input your username" onChange={this.handleChange} className="form-control"/><br />
        Password: <input type="password" name="password" placeholder="••••••••" value={this.state.password} onChange={this.handleChange} className="form-control"/><br /><br />
          <button onClick={this.loginClicked} className="btn btn-danger btn-lg">Login</button>
    </div>
    </div>
    </div>
      )
  }
}


class BasketComponent extends Component {
  constructor(){
    super();

    // this.state = {
    //   menu : [][5]
    // }
    this.addToBasket = this.addToBasket.bind(this);
  }
  static addToBasket(event)
  {
    console.log(event.target.value)
    // this.setState(
      // {
      //   let menu_length = this.state.menu.length;
      //   let flag = 1;
      //   for (let i=0; i<menu_length; i++){
      //     if (this.state.menu[i][1]==ProductCard.props.name){
      //     flag=0;
      //     this.state.menu[i][5]++;
      //     }
      //   }
      //   if (flag)
      //   {
      //     this.state.menu[menu_length + 1]=[ProductCard.props.name,
      //       ProductCard.props.ingredients,
      //       ProductCard.props.picture,
      //       ProductCard.props.price,
      //       1]
      //   }
      // }
      
  }
create_basket()
{
    let menu_length = this.state.menu.length
    for (let i=0; i<menu_length; i++){
      
    
    }  
  }


  render()
  {
    return(
      <div className="Basket">
        <img src={basket_image} className='basket_image' alt='basket' ></img>
        <td><ProductCard name={this.state.menu[0][0]} ingredients={this.state.menu[0][1]} picture={this.state.menu[0][2]} price={this.state.menu[0][3]}></ProductCard></td>
      </div>  
    )
  }
}

class HeaderComponent extends Component {
  render() {
    return(
      <div className='header1'>
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div><a className="navbar-brand">
            <img src={logo} width="50" height="50" alt=""></img>
            </a></div>
            <Link className="nav-link" to="/">Pepe's Pizza</Link>
          <ul className="navbar-nav">
            <Link className="nav-link" to="/menu">Menu</Link>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <Link className="nav-link" to="/basket"><img src={basket_image} className='basket_image_header' alt='basket' height='25px' ></img></Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/">Logout</Link>
          </ul>
        </nav>
      </header>
      </div>
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

