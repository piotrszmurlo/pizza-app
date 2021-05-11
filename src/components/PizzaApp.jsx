import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import BasketComponent from './BasketComponent.jsx'
import MenuComponent from './MenuComponent.jsx'
import SignupComponent from './SignupComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import WelcomeUserComponent from './WelcomeUserComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import FooterComponent from './FooterComponent.jsx'

class PizzaApp extends Component {
  render() {
    return (
      <div className="bg-light App">
        <Router>
          <>
              <HeaderComponent/>
            <Switch>
              <Route path="/" exact component={WelcomeComponent}/>
              <Route path="/menu" component={MenuComponent}/>
              <Route path="/login" component={LoginComponent}/>
              <Route path="/signup" component={SignupComponent}/>
              <AuthenticatedRoute path="/basket" component={BasketComponent}/> 
              <AuthenticatedRoute path="/logout" component={LogoutComponent}/> 
              <AuthenticatedRoute path="/welcome/:name" component={WelcomeUserComponent}/> 
              <Route component={ErrorComponent}/>
            </Switch>
            <FooterComponent></FooterComponent>
          </>
        </Router>
      </div>
    )
  }
}

export default PizzaApp