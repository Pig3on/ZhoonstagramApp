import React from 'react';
import {Modal, View, ActivityIndicator} from 'react-native';
import styles from './styles';
import {ACCENT} from '../../theme/colors';

const LoadingIndicatorModal = ({isLoading}) => {
  return (
    <Modal visible={isLoading}>
      <View style={styles.box}>
        <ActivityIndicator size="large" color={ACCENT} />
      </View>
    </Modal>
  );
};

export default LoadingIndicatorModal;
