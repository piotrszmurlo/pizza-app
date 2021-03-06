import React, {Component} from 'react'
import propTypes from 'prop-types'
import BasketDataService from '../api/pizza/BasketDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ProductCard extends Component {
  constructor(props) {
   super(props)
   this.moveToBasketClicked=this.moveToBasketClicked.bind(this);
   this.state = {
     quantity : 0,
     message: ""
   }
  }

  componentDidMount() {
    if (AuthenticationService.isUserLoggedIn()){
    this.refreshCard()
    }
  }
  
  refreshCard() {
    let username = AuthenticationService.getLoggedInUsername()
    BasketDataService.retrieveBasket(username)
    .then(response => { for(let i = 0; i < response.data.length; i ++){
      if ( response.data[i].name===this.props.name){
        this.setState({quantity: response.data[i].quantity})
      }}})
  }

  showQuantity() {
    if (this.state.quantity===0){
      return <td></td>
    }
    else {
      return <h5> Currently: {this.state.quantity}</h5>
    }
  }

  moveToBasketClicked(product) {
    if (AuthenticationService.isUserLoggedIn()&&!AuthenticationService.isLoggedInUserAdmin()){
      let username_ = AuthenticationService.getLoggedInUsername()
      let alreadyInBasket = false
      BasketDataService.retrieveBasket(username_)
      .then(response => {
        for(let i = 0; i < response.data.length; i += 1){
          if(response.data[i].name === this.props.name){
            alreadyInBasket = true
            BasketDataService.deleteProduct(username_, response.data[i].id)
            BasketDataService.addToBasket(username_,{id: this.props.id, name: this.props.name, price: this.props.price, username: username_, quantity: response.data[i].quantity+1, orderId: -1})
            .then(response=>{
            this.refreshCard()
          })}
        }
        if(!alreadyInBasket) {
           BasketDataService.addToBasket(username_, {id: this.props.id, name: this.props.name, price: this.props.price, username: username_, quantity: 1, orderId: -1})
           .then(response=>{
            console.log('dodaje nowy')
            this.refreshCard()
      })}})
  }
  else{
    this.setState({message:"You must be logged in"})
      }
  }

  render() {
    return(
      <div className="productcard">
        <div className='product-card-indd'>
          <img src={require(`${this.props.picture}`).default} className='picture' alt='pizza'></img>
        </div>
          <h1 className='name'>{this.props.name}</h1>
            <h1 className="text-lg-center text-success mt-4">${this.props.price}</h1>
            {this.showQuantity()}{this.state.message}
            <button className="btn addbtn btn-danger" onClick={()=>this.moveToBasketClicked(this.props)} >Add to basket</button>
      </div>
    )
  }
}
ProductCard.propTypes = {name: propTypes.string.isRequired}
ProductCard.propTypes = {ingredients: propTypes.string.isRequired}
ProductCard.propTypes = {picture: propTypes.string.isRequired}
ProductCard.propTypes = {price: propTypes.string.isRequired}
ProductCard.propTypes = {id: propTypes.number.isRequired}

export default ProductCard