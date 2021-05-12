import React, {Component} from 'react'
import margharita from './images/margharita.png'
import pepperoni from './images/pepperoni.png'
import prosciutto from './images/prosciutto.png'
import ProductCard from './ProductCard.jsx'
class MenuComponent extends Component {
  render() {
    return(
      <div className="container">
      <h3 className='header'>Menu</h3>
      <center>
      <table  cellPadding="8" cellSpacing="0" colSpan="3" width="150" height="150">
      <tbody>
      <tr>
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
      </tr>
      </tbody>
      </table>
      </center>
        
      </div>
    )
  }
}

export default MenuComponent