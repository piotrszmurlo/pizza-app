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
      rows : []
    }
    this.getProductRowsArray = this.getProductRowsArray.bind(this)
  }

  componentDidMount(){
    MenuDataService.retrieveAllProducts()
    .then(response => {
      var rows_ = [], size = 3
      for(let i = 0; i < response.data.length; i += size)
        rows_.push(response.data.slice(i, i + size))
      this.setState({rows : rows_})
      console.log(response.data)
    })
  }
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
            <td><ProductCard id={row[0].id} name={row[0].name} picture={row[0].img_src} price={margharita}></ProductCard></td>
            {row.length > 1 && <td><ProductCard id={row[1].id} name={row[1].name} picture={margharita} price={row[1].price}></ProductCard></td>}
            {row.length > 2 && <td><ProductCard id={row[2].id} name={row[2].name} picture={margharita} price={row[2].price}></ProductCard></td>}
          </tr>
        )})}
        </tbody>
        </table>
        </center>
      </div>
    )
  }
}

export default MenuComponent