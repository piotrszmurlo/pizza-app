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
      streetNumber: '',
      userAlreadyExists: false,
      badInput: false
    }
    this.handleRegistration= this.handleRegistration.bind(this)
    this.signupClicked = this.signupClicked.bind(this)
  }
  
  signupClicked(){
    if(this.state.username.includes("admin")){
      this.setState({badInput: true})
    }
    else if (this.state.username === '' || this.state.password === '' || this.state.name === '' || this.state.surname === '' || this.state.number === '' || this.state.city === '' || this.state.street === '' || this.state.streetNumber === ''){
      this.setState({badInput: true})
      return
    }
    else{
      this.setState({badInput: false})
      SignupDataService.doesUserExist(this.state.username)
      .then(response => {
        if(response.data != ''){
          this.setState({userAlreadyExists: true})
        }
        else{
        SignupDataService.registerNewUser(this.state.username, this.state)
        .then(() =>{
          AuthenticationService
          .executeJwtAuthenticationService(this.state.username, this.state.password)
          .then((response) => {
            AuthenticationService.registerSuccesfulLoginForJwt(this.state.username, response.data.token);
            this.props.history.push(`/welcome/${this.state.username}`)
      })})}})}
  }

  handleRegistration(event){
    this.setState(
      {
        [event.target.name]:
        event.target.value})
  }

  render(){
    return (
      <div>
        {this.state.userAlreadyExists && <div className="alert alert-warning">Username already exists</div>}
        {this.state.badInput && <div className="alert alert-warning">Fields cannot be empty</div>}
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
            Street number: <input  type="text" name="streetNumber" placeholder="street number" onChange={this.handleRegistration} className="st-number form-control"/><br /><br />
            <button onClick={this.signupClicked} className="btn btn-danger btn-lg">Signup</button>
          </div>
        </div>
      </div>
    </div>
  )
  }
}
export default SignupComponent