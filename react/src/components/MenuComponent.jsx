import React, {Component} from 'react'
import ProductCard from './ProductCard.jsx'
import MenuDataService from '../api/pizza/MenuDataService.js'
import BasketDataService from '../api/pizza/BasketDataService.js'
import AuthenticationService from './AuthenticationService.js'

class MenuComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      menu : []
    }
    this.moveToBasketClicked=this.moveToBasketClicked.bind(this);
  }

  componentDidMount(){
    MenuDataService.retrieveAllProducts()
    .then(response => {
      this.setState({menu : response.data})
    })
  }

  moveToBasketClicked(product)
  {
   this.props.history.push(`/menu/${product.id}`)    
  }

  render() {
    return(
      <div className="container">
      <h3 className='header'>Menu</h3>
      <center>
      <table  cellPadding="8" cellSpacing="0" colSpan="3" width="150" height="150">
      <tbody>
        {
        this.state.menu.map (menuproduct =>
          <div className="productcard">
          <div className='product-card-indd'>
            <img src={menuproduct.img_src} className='picture' alt='pizza'></img>
          </div>
            <h1 className='name'>{menuproduct.name}</h1>
              <h1 className="price text-success mt-4">{menuproduct.price}</h1>
              <button className="btn btn-danger" onClick={()=>this.moveToBasketClicked(menuproduct)} >Add to cart</button>
        </div>
        ) 
         }
        </tbody>
        </table>
        </center>
      </div>
    )
  }
}

export default MenuComponent