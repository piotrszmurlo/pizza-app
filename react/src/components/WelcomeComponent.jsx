import React, {Component} from 'react'
import pizzaiolo from './images/pizzaiolo.jpg'

class WelcomeComponent extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
        <h1>Welcome to Pepe's pizza</h1>
        <img src={pizzaiolo} className='welcome_image' alt='welcome' ></img>
      </div>
    )
  }
}


export default WelcomeComponent 