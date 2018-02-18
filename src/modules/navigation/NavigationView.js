import React, {PropTypes, Component} from 'react';
import {
  NavigationExperimental,
  View,
  StyleSheet
} from 'react-native';
const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
  PropTypes: NavigationPropTypes
} = NavigationExperimental;
import AppRouter from '../AppRouter';
import TabBar from '../../components/TabBar';
import HideWithKeyboardCustom from '../../components/HideWithKeyboardCustom';

// Customize bottom tab bar height here if desired
const TAB_BAR_HEIGHT = 60;

class NavigationView extends Component {
  static displayName = 'NavigationView';

  static propTypes = {
    onNavigateBack: PropTypes.func.isRequired,
    onNavigateCompleted: PropTypes.func,
    navigationState: PropTypes.shape({
      tabs: PropTypes.shape({
        routes: PropTypes.arrayOf(PropTypes.shape({
          key: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired
        })).isRequired
      }).isRequired,
      HomeTab: NavigationPropTypes.navigationState.isRequired,
      ProfileTab: NavigationPropTypes.navigationState.isRequired,
      OffsetTab: NavigationPropTypes.navigationState.isRequired
    }),
    switchTab: PropTypes.func.isRequired,
    pushRoute: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      keyboardUp: false
    };
  }

  handleKeyboardUp = (val) => {
    //console.warn('handleKeyboardUp: ' + val);
    this.setState({keyboardUp: val});
  }

  // NavigationHeader accepts a prop style
  // NavigationHeader.title accepts a prop textStyle
  renderHeader = (sceneProps) => {
    return (
      <NavigationHeader
        {...sceneProps}
        onNavigateBack={this.props.onNavigateBack}
        renderTitleComponent={() => {
          return (
            <NavigationHeader.Title>
              {sceneProps.scene.route.title}
            </NavigationHeader.Title>
          );
        }}
        />
    );
  };

  renderScene = (sceneProps) => {
    // render scene and apply padding to cover
    // for app bar and navigation bar
    return !this.state.keyboardUp ? (
        <View style={styles.sceneContainer}>
            {AppRouter(sceneProps)}
            <HideWithKeyboardCustom onKeyboardDidShow={this.handleKeyboardUp}/>
        </View>
    ) : (
      <View style={styles.sceneContainerWithKeyboard}>
          {AppRouter(sceneProps)}
          <HideWithKeyboardCustom onKeyboardDidShow={this.handleKeyboardUp}/>
      </View>
  );
  };

  render() {
    const {tabs} = this.props.navigationState;
    const tabKey = tabs.routes[tabs.index].key;
    const scenes = this.props.navigationState[tabKey];
    return (
      <View style={styles.container}>
        <NavigationCardStack
          key={'stack_' + tabKey}
          onNavigateBack={this.props.onNavigateBack}
          navigationState={scenes}
          renderHeader={this.renderHeader}
          renderScene={this.renderScene}
        />
        <TabBar
          height={TAB_BAR_HEIGHT}
          tabs={tabs}
          currentTabIndex={tabs.index}
          switchTab={this.props.switchTab}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sceneContainer: {
    flex: 1,
    marginBottom: TAB_BAR_HEIGHT
  },
  sceneContainerWithKeyboard: {
    flex: 1,
    marginBottom: 0
  }
});

export default NavigationView;
