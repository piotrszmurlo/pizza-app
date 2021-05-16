import React, {Component} from 'react'
import propTypes from 'prop-types'
import BasketComponent from './BasketComponent.jsx'
import BasketDataService from '../api/pizza/BasketDataService.js'
import AuthenticationService from './AuthenticationService.js'
import MenuComponent from './MenuComponent.jsx'

class ProductCard extends Component {
  constructor(props) {
   super(props)
  
  }



  render() {
    return(
      <div className="productcard">
        <div className='product-card-indd'>
          <img src={this.props.picture} className='picture' alt='pizza'></img>
        </div>
          <h1 className='name'>{this.props.productname}</h1>
            <h1 className="price text-success mt-4">$19.99</h1>
            {/* <button className="btn btn-danger" onClick={()=>MenuComponent.moveToBasketClicked} >Add to cart</button> */}
      </div>
    )
  }
}
ProductCard.propTypes = {productname: propTypes.string.isRequired}
ProductCard.propTypes = {ingredients: propTypes.string.isRequired}
ProductCard.propTypes = {picture: propTypes.string.isRequired}
ProductCard.propTypes = {price: propTypes.string.isRequired}
ProductCard.propTypes = {id: propTypes.number.isRequired}

export default ProductCard