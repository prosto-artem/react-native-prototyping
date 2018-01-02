import React, {Component, PropTypes} from 'react';
import {View,Dimensions, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import {Button} from 'native-base';

class SquareOffsetView extends Component {
  static propTypes = {
    set: PropTypes.number.isRequired,
    travel: PropTypes.number.isRequired,
    run: PropTypes.number.isRequired,
    loading: PropTypes.bool.isRequired,
    squareOffsetStateActions: PropTypes.shape({
      increment: PropTypes.func.isRequired,
      calculate: PropTypes.func.isRequired,
      reset: PropTypes.func.isRequired
    }).isRequired,
    navigationStateActions: PropTypes.shape({
      pushRoute: PropTypes.func.isRequired
    }).isRequired
  };

  increment = () => {
    this.props.squareOffsetStateActions.increment();
  };

  // TODO: Debug action - reducer setup for this action
  calculate = () => {
    this.props.squareOffsetStateActions.calculate(this.props.set,
      this.props.travel, this.props.run);
  };

  reset = () => {
    this.props.squareOffsetStateActions.reset();
  };

  render() {
    return (
        <View style={styles.container}>
         <Image
            style={styles.image}
            source={require('../../images/diagram2-1.png')}
          />
          <FloatLabelTextInput
          value={this.props.set}
          placeholder={'Set'}
          onChangeText={this.calculate}
          keyboardType= 'numeric'
          style={styles.floatLabelTextInput}
          />
          <FloatLabelTextInput
          value={this.props.travel}
          placeholder={'Travel'}
          onChangeText={this.calculate}
          keyboardType= 'numeric'
          style={styles.floatLabelTextInput}
          />
          <FloatLabelTextInput
          placeholder={'Run'}
          value={this.props.run}
          onChangeText={this.calculate}
          keyboardType= 'numeric'
          style={styles.floatLabelTextInput}
          />
        <Button rounded warning
            accessible={true}
            accessibilityLabel={'Reset Form'}
            onPress={this.reset}
            style={{alignSelf: 'center', marginTop: 5}}>  
            <Text>
            Reset
          </Text>
        </Button>
        </View>
    );
  }
  }
const ScreenWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
    padding: 5,
    margin: 5
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  },
  image: {
    flex: 2.5,
    maxWidth: ScreenWidth,
    borderColor: '#888',
    marginBottom: 5
  },
  floatLabelTextInput: {
    alignSelf: 'stretch'
  },
  button: {
    marginTop: 5,
    alignSelf: 'center'
  }
});
export default SquareOffsetView;
