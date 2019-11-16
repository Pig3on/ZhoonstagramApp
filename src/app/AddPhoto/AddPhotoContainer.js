import React, {useEffect, useState} from 'react';
import AddPhotoScreen from './AddPhotoScreen';
import {withNavigation} from 'react-navigation';
import {compose} from 'redux';
import {connect} from 'react-redux';
import uploadImageAction from './duck/actions';

const AddPhotoContainer = ({navigation, uploadImage}) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const params = navigation.getParam('uri', null);
    if (params) {
      setImageData(params);
    }
  }, [navigation]);

  return <AddPhotoScreen uploadImage={uploadImage} imageData={imageData} />;
};

const mapStateToProps = state => ({
  post: state.post,
});

const mapDispatchToProps = dispatch => ({
  uploadImage: (post, image) => {
    dispatch(uploadImageAction(post, image));
  },
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
