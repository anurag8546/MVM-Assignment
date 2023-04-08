import React, { Component } from 'react'
import axios from 'axios';

export default class SignUp extends Component {
  constructor(props){
    super(props)
    this.state={
      fname: "",
      lname: "",
      email: "",
      password: ""
    };
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handlesubmit(e){
    e.preventDefault();
const {fname, lname, email, password} = this.state;
console.log({fname, lname, email, password});

axios.post("http://localhost:5000/register?name=Test", {
  fname: fname,
  lname: lname,
  email: email,
  password: password
}).then((res)=>{console.log(res);})

}  
  
  render() {

    return (
      <form onSubmit={this.handlesubmit}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e)=>this.setState({fname:e.target.value})
            }
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input 
          type="text" 
          className="form-control"
           placeholder="Last name" 
          onChange={(e)=>this.setState({lname:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>this.setState({email:e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e)=>this.setState({password:e.target.value})}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    )
  }
}
