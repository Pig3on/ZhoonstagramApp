import React, {useEffect, useState} from 'react';
import AddPhotoScreen from './AddPhotoScreen';
import {withNavigation} from 'react-navigation';
import {compose} from 'redux';
import {connect} from 'react-redux';

const AddPhotoContainer = ({navigation}) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const params = navigation.getParam('uri', null);
    if (params) {
      setImageData(params);
    }
  }, [navigation]);

  return <AddPhotoScreen imageData={imageData} />;
};

const mapStateToProps = state => ({
  feed: state.feed,
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const enhance = compose(
  withNavigation,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default enhance(AddPhotoContainer);
