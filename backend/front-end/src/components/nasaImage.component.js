import { log } from 'next-axiom';
import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { ReactDOM, BrowserRouter, Routes, Route } from 'react-dom/client';
import App1 from './App1';
import App from '../App';
import './imgst.css';
export default class NasaImage extends Component {
  componentDidMount() {
    axios.post("http://localhost:5000/nasaImg?name=Test", {
      token: window.localStorage.getItem("token"),
    }).then((res) => { console.log(res); })
  }

  render() {
    return (
      
        <div className='imgstyle'>  <App1 /></div>
        


    )

  }

}
