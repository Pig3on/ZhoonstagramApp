import React from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import FeedItem from './Components/FeedItem';

const FeedScreen = ({feed, handleCommentsTap, getFeed}) => {
  const renderFeedItem = item => {
    return (
      <FeedItem
        handleCommentsTap={handleCommentsTap}
        key={item.index}
        feedItem={item.item}
      />
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        refreshing={feed.isLoading}
        onRefresh={() => {
          getFeed();
        }}
        data={feed.data}
        renderItem={renderFeedItem}
      />
    </SafeAreaView>
  );
};

export default FeedScreen;
