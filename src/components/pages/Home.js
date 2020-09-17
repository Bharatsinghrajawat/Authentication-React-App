import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async login() {
    this.props.authService.login('/staff');
  }

  async logout() {
    this.props.authService.logout('/');
  }

  render() {
    if (this.props.authState.isPending) return null;

    const mainContent = this.props.authState.isAuthenticated ?
    (<div>
        <p className='lead'>You have entered the staff portal, <Link to='/staff' className='.text-primary'>click here</Link></p>
        <button className='btn btn-light btn-lg' onClick={this.logout}>Logout</button>
    </div>) : (<div>
        <p className='lead'>If you're a staff member, please get your credential from your supervisor</p><button className='btn btn-light btn-lg' onClick={this.login}>Login</button>
    </div>)

    return (
      <div className='jumbotron'>
        <h1 className='display-4'>Bharat WebDev staff portal</h1>
        {mainContent}
      </div>
    );
  }
});