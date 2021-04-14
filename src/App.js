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
        <img src={pizzaiolo}></img>
        Welcome to Pepe's Pizzeria
        
      </div>
    )
  }
}

class MenuComponent extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state ={
  //     productcards=[
  //       {id: 1, }
  //     ]
  //   }
  // }
  render() {
    return(
      <div>
      <h3 className='header'>Menu</h3>
      <center>
      <table  cellPadding="8" cellSpacing="0" colspan="3" width="150" height="150">
      <tr>
        <td><ProductCard name='Margharita' ingredients='ciasto, sos, ser' picture={margharita} price="20"></ProductCard></td>
        <td><ProductCard name='Pepperoni' ingredients='ciasto, sos, ser, pepperoni' picture={pepperoni} price="20"></ProductCard></td>
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
  render() {
    return(
      <div className="productcard">
        <img src={this.props.picture} className='picture' alt='pizza' ></img>
        <p className='name'>{this.props.name}</p>
        <p className='ingredients'>Ingredients: {this.props.ingredients}</p>
        <Button onClick={BasketComponent.add_to_basket} className='MenuButton'></Button>
        <a className='price'>{this.props.price}</a>

      </div>
    )
  }
}
ProductCard.propTypes = {name: propTypes.string.isRequired}
ProductCard.propTypes = {ingredients: propTypes.string.isRequired}
ProductCard.propTypes = {picture: propTypes.string.isRequired}
ProductCard.propTypes = {price: propTypes.string.isRequired}


class LoginComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: 'Your name',
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
     <div className="Login">
        <h3 className='Login-header'>Logowanie</h3><br /><br />
        Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="field"/><br />
        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="field"/><br /><br />
        <button onClick={this.loginClicked} className="button">Login</button>
    </div>
      )
  }
}


class BasketComponent extends Component {
  constructor(){
    super();

    this.state = {
      menu : [][5]
    }
    this.add_to_basket = this.add_to_basket.bind(ProductCard);
  }
  add_to_basket(ProductCard)
  {
    this.setState(this)
      {
        let menu_length = this.state.menu.length;
        let flag = 1;
        for (let i=0; i<menu_length; i++){
          if (this.state.menu[i][1]==ProductCard.props.name){
          flag=0;
          this.state.menu[i][5]++;
          }
        }
        if (flag)
        {
          this.state.menu[menu_length + 1]=[ProductCard.props.name,
            ProductCard.props.ingredients,
            ProductCard.props.picture,
            ProductCard.props.price,
            1]
        }
      }
      console.log('aaaa')
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
      <header>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div><a href="localhost:3000/" className="navbar-brand">
            <img src={logo} width="50" height="50" alt=""></img>
            <Link className="nav-link" to="/">Pepe's Pizza</Link></a>
          </div>
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

