import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
const CommentItem = ({commentItem}) => {
    console.log(commentItem)
  return (
    <View style={styles.mainBox}>
      <View style={styles.caption}>
        <View style={styles.item}>
          <Text>{commentItem.user.email}: </Text>
        </View>
        <View style={styles.item}>
          <Text>{commentItem.text}</Text>
        </View>
      </View>
    </View>
  );
};
export default CommentItem;
