import React from 'react';
import {View, Text,SafeAreaView, FlatList} from 'react-native';
import CommentItem from './Components/CommentItem';


const CommentScreen = ({comments, getComments}) => {
  const renderCommentItem = item => {
    return <CommentItem key={item.index} commentItem={item.item} />;
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        refreshing={comments.isLoading}
        onRefresh={() => {
        getComments();
        }}
        data={comments.data}
        renderItem={renderCommentItem}
      />
    </SafeAreaView>
  );
};

export default CommentScreen;
