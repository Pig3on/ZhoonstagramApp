import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import FeedItem from './Components/FeedItem';

const FeedScreen = ({feed}) => {
  const renderFeedItem = item => {
    return <FeedItem key={item.index} feedItem={item.item} />;
  };
  
  return (
    <View style={{flex: 1}}>
      <FlatList data={feed.data} renderItem={renderFeedItem} />
    </View>
  );
};

export default FeedScreen;
