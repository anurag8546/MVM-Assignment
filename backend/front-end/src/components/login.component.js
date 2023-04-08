import React, { Component } from 'react'
import axios from 'axios';
// const fs = require('fs');

import { useGoogleLogin, GoogleLogin, googleLogout } from '@react-oauth/google'
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }

    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handlesubmit(e) {

    e.preventDefault();
    const { email, password } = this.state;
    console.log({ email, password });

    axios.post("http://localhost:5000/login-user?name=Test", {
      email: email,
      password: password
    }).then((res) => {
      console.log(res);
      console.log(res.status);
      const token=res.data.data;
      if (res.status === 200) {
        // alert("Login Successful");
        // 
        window.localStorage.setItem("token", token);
        console.log(token);
        window.location.href = "./nasaImg";
      }

    })
  }

  render() {
    return (
      <form onSubmit={this.handlesubmit} >
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })
            }
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div className='Gbutton'>
              {
                <GoogleLogin
                  onSuccess={codeResponse => {
                    console.log(codeResponse.credential);
                    localStorage.setItem('user', codeResponse.credential);
                    // console.log(codeResponse);
                    window.location.href='./nasaImg';
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}

                />
              }

            </div>
      </form>
    )
  }
}
