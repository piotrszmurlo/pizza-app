import React, {Component} from 'react'
import MenuDataService from '../api/pizza/MenuDataService.js'
import BasketDataService from '../api/pizza/BasketDataService.js'
import AuthenticationService from './AuthenticationService.js'

class BasketProductComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      id : this.props.match.params.id,
      productname : this.props.match.params.productname,
      picture : "",
      price : "",
      img_src:""
    }
    this.addToCartClicked=this.addToCartClicked.bind(this);
  }

  componentDidMount(){
    MenuDataService.retrieveProduct(this.state.id)
    .then(response=>{this.setState({
      productname: response.data.name,
      picture: response.data.img_src,
      price: response.data.price,
      img_src: response.data.img_src})
  })}

  addToCartClicked(){
    console.log(this.state.id + 'update')
    let username = AuthenticationService.getLoggedInUsername()
    console.log(this.state.id+" dziala")
    BasketDataService.addToBasket(username, {id : this.state.id, name : this.state.productname, price: this.state.price, img_src: this.state.img_src })
      .then(this.props.history.push('/menu'))

  }
  
  render(){
    return(
    <div className="AddToCart">
      <div className='product-card-indd'>
      <th>
          <img src={this.state.img_src} alt={this.state.productname} width="60"></img></th>
      </div>
      <div>{this.state.name}</div>
          <h1 className="price">$19.99</h1>
    <div>  
    <button className="btn btn-succes" onClick={this.addToCartClicked}  >Add to cart</button></div></div>
  )
}
}

export default BasketProductComponent