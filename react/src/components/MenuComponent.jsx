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
      rows : [[{id: 1, product: 'Margharita',price: 19.99, img_src: margharita},
                {id: 1, product: 'Margharita',price: 19.99, img_src: margharita},
                {id: 1, product: 'Margharita',price: 19.99, img_src: margharita}],
                [{id: 1, product: 'Margharita',price: 19.99, img_src: margharita},
                {id: 1, product: 'Margharita',price: 19.99, img_src: margharita},
                {id: 1, product: 'Margharita',price: 19.99, img_src: margharita}],
                [{id: 1, product: 'Margharita',price: 19.99, img_src: margharita}]]
    }
    this.getProductRowsArray = this.getProductRowsArray.bind(this)
  }

  // componentDidMount(){

  // }
  getProductRowsArray(){
    var products_rows = []
    for (let i = 0; i< this.state.products.length; i+=3)
      products_rows.push(this.state.products.slice(i,i+3))
    return products_rows
  }

  render() {
    return(
      <div className="container">
      <h3 className='header'>Menu</h3>
      <center>
      <table  cellPadding="8" cellSpacing="0" colSpan="3" width="150" height="150">
      <tbody>
        {this.state.rows.map(row => {return(
          <tr>
            <td><ProductCard id={row[0].id} name={row[0].product} picture={row[0].img_src} price={row[0].price}></ProductCard></td>
            {row.length > 1 && <td><ProductCard id={row[1].id} name={row[1].product} picture={row[1].img_src} price={row[1].price}></ProductCard></td>}
            {row.length > 2 && <td><ProductCard id={row[2].id} name={row[2].product} picture={row[2].img_src} price={row[2].price}></ProductCard></td>}
          </tr>
        )})}
        </tbody>
        </table>
        </center>
      {/* <tr>
        {this.state.products.map(product => {
        var products_row = []
        for (let i = 0; i< this.state.products.length; i+=3)
          products_row.push(this.state.products.slice(0,3))
        }
       }
          // product.id%3 != 0 && <td><ProductCard id={product.id} name={product.product} picture={product.img_src} price={product.price}></ProductCard></td>
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
        
      </div>
    )
  }
}

export default MenuComponent