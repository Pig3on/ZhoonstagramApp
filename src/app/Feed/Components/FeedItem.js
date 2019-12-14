/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Alert, Text} from 'react-native';
import styles from './styles';
import IconButton from '../../CustomComponents/IconButton/IconButton';
import {fileUrl} from '../../../services/apiUrlService';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SampleImage from '../../assets/backdrop.png';
const FeedItem = ({feedItem, reportPost, handleCommentsTap}) => {
  const handleViewComment = () => {
    handleCommentsTap(feedItem.id);
  };
  const handlePostReport = () => {
    Alert.alert(
      'Are you sure',
      'Are you sure you want to report this post',
      [
        {
          text: 'No',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: () => {
            reportPost(feedItem.id);
          },
        },
      ],
      {cancelable: false},
    );
  };
  const getImagePic = item => {
    return item.picture !== 'smth.jpg'
      ? {uri: fileUrl + '/' + item.picture + '.png'}
      : SampleImage;
  };
  return (
    <View style={styles.mainBox}>
      <View style={styles.header}>
        <Text style={styles.title}>{feedItem.title}</Text>
      </View>
      <Image style={styles.image} source={getImagePic(feedItem)} />
      <View style={styles.controls}>
        <IconButton name="heart-empty" />
        <IconButton name="chatbubbles" />
        <IconButton name="share" />
        <View style={{flex: 1}} />
        <IconButton onPress={handlePostReport} name="close-circle-outline" />
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
