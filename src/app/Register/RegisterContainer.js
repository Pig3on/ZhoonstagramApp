import React from 'react';
import RegisterScreen from './RegisterScreen';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {compose} from 'redux';
import logInUserAction from './duck/actions';
import registerUserAction from './duck/actions';

const RegisterContainer = ({navigation, register}) => {
  const handleRegister = user => {
    register(user);
  };
  const navigateLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <RegisterScreen navigateLogin={navigateLogin} onRegister={handleRegister} />
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  register: user => {
    dispatch(registerUserAction(user));
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

export default enhance(RegisterContainer);
