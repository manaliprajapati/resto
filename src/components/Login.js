import React, { Component } from 'react'

class Login extends Component {
    constructor()
    {
        super()
        this.state={
            name:'',
            password:''
        }
    }
    login()
    {
        console.warn(this.state)
        // this.setState({lastSearch:key})
  fetch("http://localhost:3000/login/?q="+this.state.name).then((data)=>{
    data.json().then((resp)=>{
      console.warn('resp',resp)
      if(resp.length>0)
      
      {
     console.warn(this.props.history.push('list'))
      }
      else{
       alert('Please check username and password')
      } 
     
      
    })
  })
    }
  render() {
    return (
      <div>
        < input type='text'
        placeholder='Enter Your Name' name='user' onChange={(event)=>this.setState({name:event.target.value})}/> <br /><br />
        < input type='password' 
        placeholder='Enter Your Password' name='password' onChange={(event)=>this.setState({password:event.target.value})}/><br /><br />
        <button onClick={()=>{this.login()}}>Login</button>
      </div>
    )
  }
}
export default Login