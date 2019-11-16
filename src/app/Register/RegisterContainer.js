import React from 'react';
import RegisterScreen from './RegisterScreen';
import {withNavigation} from 'react-navigation';
import {connect} from 'react-redux';
import {compose} from 'redux';
import registerUserAction from './duck/actions';

const RegisterContainer = ({navigation, register, registerUser}) => {
  const handleRegister = user => {
    registerUser(user);
  };
  const navigateLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <RegisterScreen
      register={register}
      navigateLogin={navigateLogin}
      onRegister={handleRegister}
    />
  );
};

const mapStateToProps = state => ({
  register: state.register,
});

const mapDispatchToProps = dispatch => ({
  registerUser: user => {
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
