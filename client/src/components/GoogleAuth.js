import React, {Component} from 'react';
import {connect} from 'react-redux';

import {attemptSignIn, attemptSignOut, changeAuth} from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({clientId: process.env.REACT_APP_CLIENT_ID, scope: 'email'}).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.props.changeAuth(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.props.changeAuth);
      });
    });
  }

  onSignInButtonClick = () => {
    this.props.attemptSignIn();
  };

  onSignOutButtonClick = () => {
    this.props.attemptSignOut();
  };

  renderAuthButton = () => {
    const {isSignedIn} = this.props;

    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (<button onClick={this.onSignOutButtonClick} className="ui button red">
        <i className="google icon"/>Sign Out</button>);
    } else {
      return (<button onClick={this.onSignInButtonClick} className="ui button red">
        <i className="google icon"/>Sign In with Google</button>);
    }
  };

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {attemptSignIn, attemptSignOut, changeAuth})(GoogleAuth);
