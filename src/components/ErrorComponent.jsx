import React, {Component} from 'react'
import error_image from './images/error.jpg'
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

export default ErrorComponent