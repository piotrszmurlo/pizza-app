import React, {Component} from 'react'
import propTypes from 'prop-types'
import BasketComponent from './BasketComponent.jsx'
import BasketDataService from '../api/pizza/BasketDataService.js'
import AuthenticationService from './AuthenticationService.js'

class ProductCard extends Component {
  constructor(props) {
   super(props)
   this.moveToBasketClicked=this.moveToBasketClicked.bind(this);
  }
  moveToBasketClicked(product)
  {
    let username = AuthenticationService.getLoggedInUsername()
    console.log(product.id+" dziala")
    BasketDataService.addToBasket(username, {id: this.props.id, name: this.props.name, price: this.props.price, img_src: this.props.picture})
      .then(console.log(this.props.id,this.props.name,this.props.price,this.props.picture))
  }


  render() {
    return(
      <div className="productcard">
        <div className='product-card-indd'>
          <img src={require(`${this.props.picture}`).default} className='picture' alt='pizza'></img>
        </div>
          <h1 className='name'>{this.props.name}</h1>
            <h1 className="price text-success mt-4">${this.props.price}</h1>
            <button className="btn btn-danger" onClick={()=>this.moveToBasketClicked(this.props)} >Add to cart</button>
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