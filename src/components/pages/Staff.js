import React, { Component } from 'react'

export default class Staff extends Component {
    state = {
        currentUserName : '',
        currentUserEmail: ''
    }
    componentDidMount(){
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserName : idToken.idToken.claims.name,
            currentUserEmail : idToken.idToken.claims.email
        })
    }
    render() {
        const {currentUserEmail,currentUserName} = this.state;
        return (
            <div>
                <h1>Welcome {currentUserName}</h1>
                <h2>Email : {currentUserEmail}</h2>
                <p>You've reached authorised staff area of the portal</p>
            </div>
        )
    }
}
