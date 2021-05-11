import React, {Component} from 'react'

class SignupComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      address: '',
    }
    this.handleRegistration= this.handleRegistration.bind(this)
    this.signupClicked = this.signupClicked.bind(this)
  }
  
  signupClicked(){
    this.props.history.push("/menu")
    console.log('Trying to signup')
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
        Username: <input  type="text" name="username" placeholder="input your username" onChange={this.handleRegistration} className="form-control"/><br />
        Password: <input type="password" name="password" placeholder="••••••••" value={this.state.password} onChange={this.handleRegistration} className="form-control"/><br />
        Address: <input  type="text" name="address" placeholder="input your address" onChange={this.handleRegistration} className="form-control"/><br /><br />
          <button onClick={this.signupClicked} className="btn btn-danger btn-lg">Signup</button>
    </div>
    </div>
    </div>
  )
  }
}
export default SignupComponent