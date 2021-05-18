import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'
import {Route, Redirect} from 'react-router-dom'

class AdminRoute extends Component {
  render() {
    if(AuthenticationService.isItAdmin()){
      return <Route {...this.props}/>
    } else{
      return <Redirect to="/login"/>
    }
  }
}
export default AdminRoute