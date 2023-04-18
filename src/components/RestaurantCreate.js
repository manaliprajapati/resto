import React, { Component } from 'react'

 class RestaurantCreate extends Component {
  constructor()
  {
    super();
    this.state={
        name:null,
        rating:null,
        email:null,
        address:null,
    }
  }
  create()
  {
    fetch('http://localhost:3000/restaurant',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(this.state)
    }).then((result)=>{
        result.json().then((resp)=>{
            alert ("Restaurant has been added")
        })
    })
  }
    render() {
    return (
      <div>
        <h1>Restaurant Create</h1>
        <input onChange={(event)=>{this.setState({name:event.target.value})}} 
        placeholder='Restaurant Name' /> <br/><br />
         <input onChange={(event)=>{this.setState({rating:event.target.value})}} 
        placeholder='Restaurant Ratng' /> <br/><br />
         <input onChange={(event)=>{this.setState({email:event.target.value})}} 
        placeholder='Restaurant E-mail' /> <br/><br />
         <input onChange={(event)=>{this.setState({address:event.target.value})}} 
        placeholder='Restaurant Address' /> <br/><br />
        <button onClick={()=>{this.create()}}>Add Restaurant</button>
      </div>
    )
  }
}
export default RestaurantCreate