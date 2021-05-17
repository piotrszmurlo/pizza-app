import React, {Component} from 'react'
import SignupDataService from '../api/pizza/SignupDataService.js'
import AuthenticationService from '../components/AuthenticationService.js'
class SignupComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      name: '',
      surname: '',
      number: '',
      city: '',
      street: '',
      streetNumber: ''
    }
    this.handleRegistration= this.handleRegistration.bind(this)
    this.signupClicked = this.signupClicked.bind(this)
  }
  
  signupClicked(){

    SignupDataService.registerNewUser(this.state.username, this.state)
    .then(
      AuthenticationService
      .executeJwtAuthenticationService(this.state.username, this.state.password)
      .then((response) => {
        AuthenticationService.registerSuccesfulLoginForJwt(this.state.username, response.data.token);
        this.props.history.push(`/welcome/${this.state.username}`)
      })
    )
    // this.props.history.push("/login")
  }

  handleRegistration(event){
    console.log(this.state);
    this.setState(
      {
        [event.target.name]:
        event.target.value})
  }

  render(){
    return (
    <div className='span2'>
      <div className='signup-outer-card'>
      <div className="signup-card">
          <h3 className='singup-header'>Registration</h3><br /><br />
          Username: <input  type="text" name="username" placeholder="your new username" onChange={this.handleRegistration} className="form-control"/><br />
          Password: <input type="password" name="password" placeholder="••••••••" onChange={this.handleRegistration} className="form-control"/><br />
          First name: <input  type="text" name="name" placeholder="input your first name" onChange={this.handleRegistration} className="form-control"/><br /><br />
          Surname: <input  type="text" name="surname" placeholder=" your surname" onChange={this.handleRegistration} className="form-control"/><br /><br />
          Phone number: <input  type="text" name="number" placeholder="your phone number" onChange={this.handleRegistration} className="form-control"/><br /><br />
          City: <input  type="text" name="city" placeholder="city" onChange={this.handleRegistration} className="form-control"/><br /><br />
          Street: <input  type="text" name="street" placeholder="street name" onChange={this.handleRegistration} className="form-control"/><br /><br />
          Street number: <input  type="text" name="streetNumber" placeholder="street number" onChange={this.handleRegistration} className="form-control"/><br /><br />
          <button onClick={this.signupClicked} className="btn btn-danger btn-lg">Signup</button>
        </div>
      </div>
    </div>
  )
  }
}
export default SignupComponent