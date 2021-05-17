import React, {Component} from 'react'
import ProductCard from './ProductCard.jsx'
import MenuDataService from '../api/pizza/MenuDataService.js'
import {IMG_PATH} from '../constants.js'
class MenuComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      rows : []
    }
  }

  addCartInfo(productname)
  {
    this.setState({message:`You just added ${productname} to the Basket!`})
  }

  componentDidMount(){
    if(this.props.match.params.id==null){
    MenuDataService.retrieveAllProducts()
    .then(response => {
      var rows_ = [], size = 3
      for(let i = 0; i < response.data.length; i += size)
        rows_.push(response.data.slice(i, i + size))
      this.setState({rows : rows_})
    })}
    else {
      MenuDataService.retrieveProduct(this.props.match.params.id)
      .then(response => {this.setState({rows : response.data})})
    }
  }

  render() { 
    return(
      <div className="container">
      <h3 className='header'>Menu</h3>
      <center>
      <table  cellPadding="8" cellSpacing="0" colSpan="3" width="150" height="150">
      <tbody>
        {this.state.rows.map(row => { return(
          <tr key={row[0].id}>
            <td><ProductCard id={row[0].id} name={row[0].name} picture={IMG_PATH + row[0].name + '.png'} price={row[0].price} message={this.state.message} ></ProductCard></td>
            {row.length > 1 && <td><ProductCard id={row[1].id} name={row[1].name} picture={IMG_PATH + row[1].name + '.png'} price={row[1].price} message={this.state.message}></ProductCard></td>}
            {row.length > 2 && <td><ProductCard id={row[2].id} name={row[2].name} picture={IMG_PATH + row[2].name + '.png'} price={row[2].price} message={this.state.message}></ProductCard></td>}
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