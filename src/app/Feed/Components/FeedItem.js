import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './styles';
import IconButton from '../../CustomComponents/IconButton/IconButton';
import {fileUrl} from '../../../services/apiUrlService';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FeedItem = ({feedItem, handleCommentsTap}) => {
  const handleViewComment = () => {
    handleCommentsTap(feedItem.id);
  };
  return (
    <View style={styles.mainBox}>
      <View style={styles.header}>
        <Text style={styles.title}>{feedItem.title}</Text>
      </View>
      <Image
        style={styles.image}
        source={{uri: fileUrl + '/' + feedItem.picture + '.png'}}
      />
      <View style={styles.controls}>
        <IconButton name="heart-empty" />
        <IconButton name="chatbubbles" />
        <IconButton name="share" />
      </View>
      <View style={styles.caption}>
        <View style={styles.item}>
          <Text>By: {feedItem.user.email}</Text>
        </View>
        <View style={styles.item}>
          <Text>Liked by {feedItem.likes} people</Text>
        </View>
        <View style={styles.item}>
          <Text>{feedItem.description}</Text>
        </View>
        <TouchableOpacity onPress={handleViewComment} style={styles.item}>
          <Text style={styles.commentsLink}>
            View all {feedItem.comments} comments
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default FeedItem;
