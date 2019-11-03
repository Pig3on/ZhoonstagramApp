import React from 'react';
import LoginScreen from './LoginScreen';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {compose} from 'redux';
import logInUserAction from './duck/actions';

const LoginContainer = ({navigation, login}) => {
  const handleLogin = (email, password) => {
    login(email, password);
  };
  const navigateToRegister = () => {
    navigation.goBack();
  };
  return (
    <LoginScreen
      onLogin={handleLogin}
      navigateToRegister={navigateToRegister}
    />
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => {
    dispatch(logInUserAction(email, password));
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
