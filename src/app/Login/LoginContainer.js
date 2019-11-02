import React from 'react';
import LoginScreen from './LoginScreen';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {compose} from 'redux';
import logInUserAction from './duck/actions';

const LoginContainer = ({navigation, login}) => {
  const handleLogin = (username, password) => {
    login(username, password);
  };
  return <LoginScreen onLogin={handleLogin} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: (username, password) => {
    dispatch(logInUserAction(username, password));
  },
  dispatch,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
});

const enhance = compose(
  withNavigation,
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
  ),
);

export default enhance(LoginContainer);
