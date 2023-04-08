import React, { useState, useEffect } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import NasaImage from "./components/nasaImage.component"
import User from "./components/user.component"
import { useGoogleLogin, GoogleLogin, googleLogout } from '@react-oauth/google'
import axios from 'axios';


function App() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      localStorage.setItem('codeResponse', codeResponse);
      console.log(codeResponse);
      window.location.href='./user';
    },
    onError: (error) => console.log('Login Failed:', error)
  });

  // useEffect(
  //   () => {
  //     if (user) {
  //       console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1");
  //       console.log(user);
  //       axios
  //         .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
  //           headers: {
  //             Authorization: `Bearer ${user.access_token}`,
  //             Accept: 'application/json'
  //           }
  //         })
  //         .then((res) => {
  //           console.log("@@@@@@@@@@@@@@@@@@@@@@@@@");
  //           console.log(res);
  //           setProfile(res.data);
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   },
  //   [user]
  // );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  const [log, setLog] = useState(localStorage.getItem("token"));
  // console.log(log);
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    {log === null &&
                      <span>Login</span>
                    }
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    {log === null &&
                      <span>SignUp</span>
                    }
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    {log &&
                      <span onClick={() => {
                        // log=null;
                        window.localStorage.removeItem('token');
                        window.location.href = 'sign-in';
                      }}>LogOut</span>
                    }
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper"  >
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/nasaImg" element={<NasaImage />} />
              <Route path="/user" element={<User />}/>
            </Routes>
            {/*  */}
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;