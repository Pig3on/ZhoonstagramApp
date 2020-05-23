import {Platform} from 'react-native';

const API_BASE =
  Platform.OS === 'android' ? 'http://10.0.2.2:8080' : 'http://localhost:8080';

export const loginUrl = API_BASE + '/oauth/token';
export const feedUrl = API_BASE + '/api/post';
export const registerUrl = API_BASE + '/api/signin';
export const fileUrl = API_BASE + '/api/files';
export const commentUrl = API_BASE + '/api/comment';
export const reportUrl = API_BASE + '/api/post/report';
