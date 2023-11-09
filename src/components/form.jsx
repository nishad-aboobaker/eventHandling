import React, { Component } from 'react'
import './Form.css'
export default class Form extends Component {

    state={
        fname:"",
        lname:"",
        Age:"",
        Phone:"",
        State:"",
        District:"",
        Pincode:"",
        Landmark:"",
        Email:"",
        Place:""
    }
    handleKey=(e)=>{
        console.log(e.target.value);
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    Submit=(e)=>{
        e.preventDefault()
        const{fname,lname,Age,Phone,State,District,Email,Pincode,Landmark,Place}=this.state
        console.log("fname",fname,
                    "lname",lname,
                    "Age",Age,
                    "Phone",Phone,
                    "State",State,
                    "District",District,
                    "Email",Email,
                    "Pincode",Pincode,
                    "Landmark",Landmark,
                    "Place",Place);
    }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.Submit}>
       <div>
          <input type="text" onChange={this.handleKey} name='fname' placeholder='firstName'/>
          <input type="text" onChange={this.handleKey} name='lname' placeholder='LastName'/>
       </div>
       <div>
          <input type="text" onChange={this.handleKey} name='Age' placeholder='Age'/>
          <input type="text" onChange={this.handleKey} name='Phone' placeholder='Phone'/>
       </div>
       <div>
          <input type="text" onChange={this.handleKey} name='Email' placeholder='Email'/>
          <input type="text" onChange={this.handleKey} name='Place' placeholder='Place'/>
       </div>
       <div>
          <input type="text" onChange={this.handleKey} name='District' placeholder='District'/>
          <input type="text" onChange={this.handleKey} name='State' placeholder='State'/>
       </div>
       <div>
          <input type="text" onChange={this.handleKey} name='Landmark' placeholder='Landmark'/>
          <input type="text" onChange={this.handleKey} name='Pincode' placeholder='Pincode'/>
       </div>
       
        <button>Submit</button>
        </form>
      </div>
    )
  }
}
