import React, {Component} from 'react'
import ProductCard from './ProductCard.jsx'
import MenuDataService from '../api/pizza/MenuDataService.js'
class MenuComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      rows : []
    }
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
        {this.state.rows.map(row => {return(
          <tr>
            {console.log(row[0].img_src)}
            <td><ProductCard id={row[0].id} name={row[0].name} picture={row[0].img_src} price={row[0].price}></ProductCard></td>
            {row.length > 1 && <td><ProductCard id={row[1].id} name={row[1].name} picture={row[1].img_src} price={row[1].price}></ProductCard></td>}
            {row.length > 2 && <td><ProductCard id={row[2].id} name={row[2].name} picture={row[2].img_src} price={row[2].price}></ProductCard></td>}
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