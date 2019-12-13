import React, {useEffect} from 'react';
import FeedScreen from './FeedScreen';
import {compose} from 'redux';
import {connect} from 'react-redux';
import getFeedAction from './duck/actions';
import {withNavigation} from 'react-navigation';

const FeedContainer = ({navigation, feed, getFeed}) => {
  useEffect(() => {
    getFeed();
  }, [getFeed]);

  const handleCommentsTap = postId => {
    navigation.navigate('Comments', {postId});
  };
  return (
    <FeedScreen
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
