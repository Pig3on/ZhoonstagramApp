import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import IconButton from '../../CustomComponents/IconButton/IconButton';

const FeedItem = ({feedItem}) => {
  return (
    <View style={styles.mainBox}>
      <View style={styles.header}>
        <Text>{feedItem.title}</Text>
      </View>
      <Image
        style={styles.image}
        source={{uri: 'https://reactjs.org/logo-og.png'}}
      />
      <View style={styles.controls}>
        <IconButton name="heart-empty" />
        <IconButton name="chatbubbles" />
        <IconButton name="share" />
      </View>
      <View style={styles.caption}>
        <View>
          <Text>By: {feedItem.user.email}</Text>
        </View>
        <View>
          <Text>Liked by {feedItem.likes} people</Text>
        </View>
        <View>
          <Text>{feedItem.description}</Text>
        </View>
        <View>
          <Text>View all {feedItem.comments} comments</Text>
        </View>
      </View>
    </View>
  );
};
export default FeedItem;
