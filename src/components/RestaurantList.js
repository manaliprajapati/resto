import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
 class RestaurantList extends Component {
 constructor() {
  super();
  this.state ={
    list:null,
  }
 }
 componentDidMount(){
  // fetch('http://localhost:3000/restaurant').then((response)=>{
  //   response.json().then((result)=>{
  //     this.setState({list:result})
  //   })
  // })
  this.getData()
 }
 getData()
 {
  fetch('http://localhost:3000/restaurant').then((response)=>{
    response.json().then((result)=>{
      this.setState({list:result})
    })
  })
 }
 delete(id)
 {
  fetch('http://localhost:3000/restaurant/',{
    method:'DELETE',
    // headers:{
    //     'Content-Type':'application/json'
    // },
    // body:JSON.stringify(this.state)
}).then((result)=>{
    result.json().then((resp)=>{
        alert ("Restaurant has been deleted")
        this.getData()
    })
})
}
  render() {
    return (
      <div>
        <h1>Restaurant List</h1>
      {
        this.state.list?
        <div>
          <Table striped bordered hover>
          <thead>
           
        <tr>
          <th>ID</th>
          <th> Name</th>
          <th>Rating</th>
          <th>E-mail</th>
          <th>Address</th>
          <th>Operation</th>
         
        </tr>
      </thead>
      <tbody>
          {
            this.state.list.map((item,i)=>
              // <div className='list-wrapper'>
              // <span>{item.name}</span>
              // <span>{item.email}</span>
              // <span>{item.rating}</span>
              // <span>{item.address}</span>
              // </div>
              <tr>
                <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.rating}</td>
          <td>{item.email}</td>
          <td>{item.address}</td>
          <td><Link to={'/update/'+item.id}><FontAwesomeIcon icon={faEdit} color='pink' /></Link>
          <span onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color='red' /></span></td>
          
        </tr>
            )
          }
          </tbody>
          </Table>
        </div>
        :<p>please wait....</p>
      }
      </div>
    )
  }
}
export default RestaurantList