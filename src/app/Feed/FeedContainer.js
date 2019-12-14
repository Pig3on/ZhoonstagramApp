import React, {useEffect} from 'react';
import FeedScreen from './FeedScreen';
import {compose} from 'redux';
import {connect} from 'react-redux';
import getFeedAction, {reportPostAction} from './duck/actions';
import {withNavigation} from 'react-navigation';

const FeedContainer = ({navigation, reportPost, feed, getFeed}) => {
  useEffect(() => {
    getFeed();
  }, [getFeed]);

  const handleCommentsTap = postId => {
    navigation.navigate('Comments', {postId});
  };
  return (
    <FeedScreen
      reportPost={reportPost}
      getFeed={getFeed}
      handleCommentsTap={handleCommentsTap}
      feed={feed}
    />
  );
};
const mapStateToProps = state => ({
  feed: state.feed,
});

const mapDispatchToProps = dispatch => ({
  getFeed: () => {
    dispatch(getFeedAction());
  },
  reportPost: postId => {
    dispatch(reportPostAction(postId));
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

export default enhance(FeedContainer);
