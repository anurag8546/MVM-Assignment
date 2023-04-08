import React, { Component } from 'react'
import axios from 'axios';
// const fs = require('fs');
export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <>
                <h1>{localStorage.getItem('user')}</h1>
            </>
        )
    }
}
