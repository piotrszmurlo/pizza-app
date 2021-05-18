import React, {Component} from 'react'
import SignupDataService from '../api/pizza/SignupDataService.js'

class ViewUsersComponent extends Component {

  constructor(props){
    super(props)
    this.state = {
      users:[]
    }
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  getAllUsers(){
    SignupDataService.getUsers().then(response => {this.setState({users: response.data})
    })
  }

  componentDidMount(){
    this.getAllUsers()
  }

  render(){
    return(
      <div>
        <h1>Users List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
             <th>ID</th>
             <th>Username</th>
             <th>Name</th>
             <th>Surname</th>
             <th>Number</th>
             <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.users.map(
                user => {if(user.username !== 'guest' && user.username !== 'admin' ){
                  return(
                <tr key={user.id}> 
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.number}</td>
                  <td>{user.city}, {user.street} {user.streetNumber}</td>
                </tr>)}}
              )
              
            }
  </tbody>
</table>
  </div>
            )}
}

export default ViewUsersComponent