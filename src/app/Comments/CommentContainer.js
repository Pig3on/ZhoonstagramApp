import React ,{useEffect} from 'react';

import {compose} from 'redux';
import {connect} from 'react-redux';
import CommentScreen from './CommentScreen';
import getCommentsAction from './duck/actions';
import { withNavigation } from 'react-navigation';

const CommentsContainer = ({navigation, comments, getComments}) => {
  useEffect(() => {
    const postId = navigation.getParam('postId', 0);
    getComments(postId);
  }, []);
  return <CommentScreen getComments={getComments} comments={comments} />;
};
const mapStateToProps = state => ({
  comments: state.comments,
});

const mapDispatchToProps = dispatch => ({
  getComments: postId => {
    dispatch(getCommentsAction(postId));
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

export default enhance(CommentsContainer);
