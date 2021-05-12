import React, {Component} from 'react'
import margharita from './images/margharita.png'
import pepperoni from './images/pepperoni.png'
import prosciutto from './images/prosciutto.png'
import ProductCard from './ProductCard.jsx'
import MenuDataService from '../api/pizza/MenuDataService.js'
class MenuComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      products : 
      [
        {id: 1, product: 'Margharita', quantity: 2, price: 19.99, img_src: margharita},
        {id: 2, product: 'Pepperoni', quantity: 1, price: 19.99, img_src: pepperoni},
        {id: 3, product: 'Pepperoni3', quantity: 1, price: 19.99, img_src: pepperoni},
        {id: 4, product: 'Pepperoni', quantity: 1, price: 19.99, img_src: pepperoni},
        {id: 5, product: 'Pepperoni', quantity: 1, price: 19.99, img_src: pepperoni},
        {id: 6, product: 'Pepperoni', quantity: 1, price: 19.99, img_src: pepperoni},
        {id: 7, product: 'Pepperoni', quantity: 1, price: 19.99, img_src: pepperoni}
      ]
    }
  }

  componentDidMount(){

  }

  render() {
    return(
      <div className="container">
      <h3 className='header'>Menu</h3>
      <center>
      <table  cellPadding="8" cellSpacing="0" colSpan="3" width="150" height="150">
      <tbody>
        {this.state.products.map(
          product =>
          product.id%3 != 0 && <td><ProductCard id={product.id} name={product.product} picture={product.img_src} price={product.price}></ProductCard></td>
          )}
      {/* <tr>
        <td><ProductCard id={1} name='Margharita' ingredients='red sauce, cheese' picture={margharita} price="20"></ProductCard></td>
        <td><ProductCard id={2} name='Pepperoni' ingredients='red sauce, cheese, pepperoni' picture={pepperoni} price="20"></ProductCard></td>
        <td><ProductCard id={3} name='Prosciutto' ingredients='red sauce, cheese, prosciutto, rukola, pomidor' picture={prosciutto} price="20"></ProductCard></td>
      </tr>
      <tr>
      <td><ProductCard id={1} name='Margharita' ingredients='red sauce, cheese' picture={margharita} price="20"></ProductCard></td>
        <td><ProductCard id={2} name='Pepperoni' ingredients='red sauce, cheese, pepperoni' picture={pepperoni} price="20"></ProductCard></td>
        <td><ProductCard id={3} name='Prosciutto' ingredients='red sauce, cheese, prosciutto, rukola, pomidor' picture={prosciutto} price="20"></ProductCard></td>
      </tr>
      <tr>
      <td><ProductCard id={1} name='Margharita' ingredients='red sauce, cheese' picture={margharita} price="20"></ProductCard></td>
        <td><ProductCard id={2} name='Pepperoni' ingredients='red sauce, cheese, pepperoni' picture={pepperoni} price="20"></ProductCard></td>
        <td><ProductCard id={3} name='Prosciutto' ingredients='red sauce, cheese, prosciutto, rukola, pomidor' picture={prosciutto} price="20"></ProductCard></td>
      </tr> */}
      </tbody>
      </table>
      </center>
        
      </div>
    )
  }
}

export default MenuComponent