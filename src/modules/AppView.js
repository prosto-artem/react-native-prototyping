import React, {PropTypes, Component} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import NavigationViewContainer from './navigation/NavigationViewContainer';
import * as snapshotUtil from '../utils/snapshot';
import * as SessionStateActions from '../modules/session/SessionState';
import store from '../redux/store';
import DeveloperMenu from '../components/DeveloperMenu';
import MenuProvider from 'react-native-popup-menu';

class AppView extends Component {
  static displayName = 'AppView';

  static propTypes = {
    isReady: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  componentDidMount() {
    // snapshotUtil.resetSnapshot()
    //   .then(snapshot => {
    //     const {dispatch} = this.props;
    //     console.log("snapshot---->", snapshot);
    //     if (snapshot) {
    //       dispatch(SessionStateActions.resetSessionStateFromSnapshot(snapshot));
    //     } else {
    //       dispatch(SessionStateActions.initializeSessionState());
    //     }

    //     store.subscribe(() => {
    //       snapshotUtil.saveSnapshot(store.getState());
    //     });
    //   });
  }

  render() {
    if (!this.props.isReady) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator style={styles.centered} />
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
      <MenuProvider>
        <NavigationViewContainer />
        {__DEV__ && <DeveloperMenu />}
      </MenuProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignSelf: 'center'
  }
});

export default AppView;
