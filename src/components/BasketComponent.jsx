import React, {Component} from 'react'
import margharita from './images/margharita.png'
import pepperoni from './images/pepperoni.png'
import {Link} from 'react-router-dom';

class BasketComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      products : 
      [
        {id: 1, product: 'Margharita', quantity: 2, price: 19.99, img_src: margharita},
        {id: 2, product: 'Pepperoni', quantity: 1, price: 19.99, img_src: pepperoni}
      ]
    }
  }
  static addToBasket(event)
  {
    var hh=event.target.value.split(',')
    console.log(hh) //dziala
//     this.setState(
//       {
//         let menu_length = this.state.menu.length;
//         let flag = 1;
//         for (let i=0; i<menu_length; i++){
//           if (this.state.menu[i][1]==ProductCard.props.name){
//           flag=0;
//           this.state.menu[i][5]++;
//           }
//         }
//         if (flag)
//         {
//           this.state.menu[menu_length + 1]=[ProductCard.props.name,
//             ProductCard.props.ingredients,
//             ProductCard.props.picture,
//             ProductCard.props.price,
//             1]
//         }
//       }
      
//   }
// create_basket()
// {
//     let menu_length = this.state.menu.length
//     for (let i=0; i<menu_length; i++){
      
    
//     }  
  }


  render()
  {
    return(
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.products.map(
                product =>
                <tr key= {product.id}>
                  <th>
                  <img src={product.img_src} width="60"></img>
                  {product.product}
                  </th>
                  <td>{product.quantity}</td>
                  <td>${product.price}</td>
                  <td>${product.quantity*product.price}</td>
                  <th> <button className="btn btn-danger">Remove</button>
                  </th>
                </tr>
              )
            }
  </tbody>
</table>
<Link className="nav-link" to="/login"><button className="btn btn-success">Checkout</button></Link>
        {/* <td><ProductCard name={this.state.menu[0][0]} ingredients={this.state.menu[0][1]} picture={this.state.menu[0][2]} price={this.state.menu[0][3]}></ProductCard></td> */}
      </div>  
    )
  }
}
{/* <tr>
  <th scope="row">
    <img src={margharita} width="60"></img>
    Margharita
    </th>
  <td>2</td>
  <td>$19.99</td>
  <td>$39.98</td>
  <th> <button className="btn btn-danger">Remove</button></th>
</tr>
<tr>
  <th scope="row">
  <img src={pepperoni} width="55"></img>
  Pepperoni</th>
  <td>1</td>
  <td>$19.99</td>
  <td>$19.99</td>
  <th> <button className="btn btn-danger">Remove</button></th>
</tr> */}

export default BasketComponent