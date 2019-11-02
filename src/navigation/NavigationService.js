import {NavigationActions, StackActions, DrawerActions} from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params = null, action = null) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
      action,
    }),
  );
}

function reset(index, actions) {
  const resetAction = StackActions.reset({
    index,
    key: null,
    actions,
  });
  _navigator.dispatch(resetAction);
}

function replace(currentRouteKey, routeName, params = null) {
  _navigator.dispatch(
    StackActions.replace({
      key: currentRouteKey,
      routeName,
      params,
    }),
  );
}

function back() {
  _navigator.dispatch(NavigationActions.back());
}

function push(routeName, params = null, action = null) {
  _navigator.dispatch(
    NavigationActions.push({
      routeName,
      params,
      action,
    }),
  );
}

function openDrawer() {
  _navigator.dispatch(DrawerActions.openDrawer());
}
export function resetTo(route) {
  const actionToDispatch = NavigationActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({routeName: route})],
  });
  _navigator.dispatch(actionToDispatch);
}

export default {
  navigate,
  reset,
  replace,
  back,
  push,
  openDrawer,
  setTopLevelNavigator,
  resetTo,
};
