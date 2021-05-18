import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      hasLoginFailed: false,
      hasLoginSucceded: false
    }
    this.handleChange= this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
    this.newRegistration = this.newRegistration.bind(this)
  }
  
  loginClicked(){
    // if(this.state.username==='admin' && this.state.password==='admin'){

    //   this.setState({hasLoginSucceded:true})
    //   this.setState({hasLoginFailed:false})

    // }
    // else{
    //   this.setState({hasLoginSucceded:false})
    //   this.setState({hasLoginFailed:true})
    // }
    // AuthenticationService
    // .executeBasicAuthenticationService(this.state.username, this.state.password)
    // .then(() => {
    //   AuthenticationService.registerSuccesfulLogin(this.state.username, this.state.password);
    //   this.props.history.push(`/welcome/${this.state.username}`)
    // }).catch( () => {
    //   this.setState({hasLoginSucceded:false})
    //   this.setState({hasLoginFailed:true})
    // }

    // )
    AuthenticationService
    .executeJwtAuthenticationService(this.state.username, this.state.password)
    .then((response) => {
      AuthenticationService.registerSuccesfulLoginForJwt(this.state.username, response.data.token);
      this.props.history.push(`/welcome/${this.state.username}`)
    }).catch( () => {
      this.setState({hasLoginSucceded:false})
      this.setState({hasLoginFailed:true})
    }

    )
  }

  handleChange(event){
    this.setState(
      {
        [event.target.name]:
        event.target.value})
  }
  newRegistration() {
    this.props.history.push("/signup")
  }



  render(){
    return (
      <div className='container'>
        {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid credentials</div>}
        <div className='login-outer-card'>
          <div className="login-card">
            <h3 className='Login-header'>Logowanie</h3><br /><br />
              Username: <input  type="text" name="username" placeholder="input your username" onChange={this.handleChange} className="form-control"/><br />
              Password: <input type="password" name="password" placeholder="••••••••" value={this.state.password} onChange={this.handleChange} className="form-control"/><br /><br />
              <button onClick={this.loginClicked} className="btn btn-danger btn-lg">Login</button>
              <div className='signup'>
              <button onClick={this.newRegistration} className="btn btn-danger btn-lg">Sign up</button></div>
          </div>
        </div>
      </div>
      )
  }
}

export default LoginComponent