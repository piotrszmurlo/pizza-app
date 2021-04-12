import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import margharita from './images/margharita.png'
import pepperoni from './images/pepperoni.png'
import error from './images/error.jpg'
import './components/ProductCard.css'
import './components/Button.css'
import './components/Login.css'
import propTypes from 'prop-types'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Router>
          <>
            <Switch>
              <Route path="/" exact component={MenuComponent}/>
              <Route path="/menu" component={MenuComponent}/>
              <Route path="/login" component={LoginComponent}/>
              <Route component={ErrorComponent}/>
              {/* <Route path="/basket" component={BasketComponent}/> */}
            </Switch>
          </>
        </Router>
      </div>
    )
  }
}

export default App;

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
        <img src={error} className='error_image' alt='error' ></img>
      </div>
    )
  }
}
class Button extends Component {
  render() {
    return(
      <div>
        <button className="button">Add to cart</button>
        
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
        <Button></Button>
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
        User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} className="field"/><br />
        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="field"/><br /><br />
        <button onClick={this.loginClicked} className="button">Login</button>
    </div>
      )
  }


}