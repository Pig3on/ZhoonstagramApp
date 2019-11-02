import React from 'react';
import {View, Text} from 'react-native';
const FeedScreen = ({feed}) => {
  return (
    <View style={{backgroundColor:'yellow',flex:1}}>
      <Text>{JSON.stringify(feed)}</Text>
    </View>
  );
};

export default FeedScreen;
