import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import Navbar from './components/Layout/Navbar'
import Home from './components/pages/Home'
import Staff from './components/pages/Staff'
import Login from './components/auth/Login'

// import createBrowserHistory from 'history/createBrowserHistory'

// const history = createBrowserHistory();
const onAuthRequired = ({history}) => {
    history.push('/login')
}

export default class App extends React.Component {
    render(){
    return (
        <Router>
            <Security issuer='https://dev-727167.okta.com/oauth2/default'
                    clientId='0oaypwlspGXziSizv4x6'
                    redirectUri={window.location.origin + '/implicit/callback'}
                    onAuthRequired={this.onAuthRequired}
                    pkce={true} >            
                <div className='App'>
                <Navbar />
                <div className='container'>
                    <Route path='/' exact={true} component={Home} />
                    <SecureRoute path='/staff' exact={true} component={Staff} />
                    <Route path='/login' render={() => <Login baseUrl='https://dev-727167.okta.com' />} />
                    <Route path='/implicit/callback' component={LoginCallback} />
                </div>
                </div>
            </Security>    
        </Router>
    )
}}
