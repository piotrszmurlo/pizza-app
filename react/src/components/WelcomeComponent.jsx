import React, {Component} from 'react'
import pizzaiolo from './images/pizzaiolo.jpg'
import HelloWorldService from '../api/pizza/HelloWorldService.js'
class WelcomeComponent extends Component {
  constructor(props){
    super(props)
    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    this.handleError = this.handleError.bind(this)
    this.state = {
      welcomeMessage: ''
    }
  }
  render() {
    return(
      <div>
        <h1>Welcome to Pepe's pizza</h1>
        <img src={pizzaiolo} className='welcome_image' alt='welcome' ></img>
        <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">witam</button>
      <div className="container"> {this.state.welcomeMessage}</div>
      </div>
    )
  }
  handleSuccessfulResponse(response){
    this.setState({welcomeMessage: response.data.message})
    console.log(response)
  }
  handleError(error){
    this.setState({welcomeMessage: error.response.data.message})
  }
  retrieveWelcomeMessage(){
    HelloWorldService.executeHelloWorldPathVariableService("witam")
    .then(response => this.handleSuccessfulResponse(response))
    .catch(error => this.handleError(error))
  }
}


export default WelcomeComponent 