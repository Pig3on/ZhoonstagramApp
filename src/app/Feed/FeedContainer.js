import React ,{useEffect} from 'react';
import FeedScreen from './FeedScreen';
import {compose} from 'redux';
import {connect} from 'react-redux';
import getFeedAction from './duck/actions';

const FeedContainer = ({feed, getFeed}) => {
  useEffect(() => {
    getFeed();
  }, []);
  return <FeedScreen feed={feed} />;
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
  connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
  ),
);

export default enhance(FeedContainer);
