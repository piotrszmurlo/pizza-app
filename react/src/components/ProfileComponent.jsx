import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
import SignupDataService from '../api/pizza/SignupDataService.js'

class ProfileComponent extends Component {

  constructor(props){
  super(props)
  this.state={
    username: "",
    name: '',
    surname: '',
    number: '',
    city: '',
    street: '',
    streetNumber: '',
  }}

  componentDidMount(){
  let username = AuthenticationService.getLoggedInUsername()
  SignupDataService.doesUserExist(username)
  .then(response=>{
    this.setState({
      username:response.data.username,
      name: response.data.name,
      surname: response.data.surname,
      number: response.data.number,
      city: response.data.city,
      street: response.data.street,
      streetNumber: response.data.streetNumber,
      
    })
  })
  
  }

  render(){
    return(
    <div>
      <h1>Hey {this.state.name}</h1>
      <th></th>
    <h3>Your login is: {this.state.username}</h3>
    <h3>Adress of delivery is: {this.state.street} {this.state.streetNumber}, {this.state.city}</h3>

    <h3>Before delivery we will call you on the number: {this.state.number}</h3>

    </div>)
  }
}

export default ProfileComponent