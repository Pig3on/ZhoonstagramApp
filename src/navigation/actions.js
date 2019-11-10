/* eslint-disable import/no-named-as-default-member */

import NavigationService from './NavigationService';

export function navigateToMain() {
  NavigationService.navigate('App');
}
export function navigateToLogin() {
  NavigationService.navigate('Login');
}

export function navigateToAddPost(imgData) {
  NavigationService.navigate('AddPost', imgData);
}
