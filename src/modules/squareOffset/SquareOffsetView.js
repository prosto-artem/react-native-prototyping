import React, {Component, PropTypes} from 'react';
import {View, StyleSheet, Image, TextInput, TouchableOpacity, Text} from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';

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
          placeholder={'Run'}
          value={this.props.run}
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
          value={this.props.set}
          placeholder={'Set'}
          onChangeText={this.calculate}
          keyboardType= 'numeric'
          style={styles.floatLabelTextInput}
          />
        <TouchableOpacity
            accessible={true}
            accessibilityLabel={'Reset Form'}
            onPress={this.reset}
            style={styles.touchableOpacity}>          
            <Text style={styles.linkButton}>
            Reset
          </Text>
        </TouchableOpacity>
        </View>
    );
  }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    //alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1'
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: 800,
    height: 800,
  },
  floatLabelTextInput: {
    padding: 8,
  },
  touchableOpacity: {
    backgroundColor: '#ff5733',
    maxWidth: 80,
    alignSelf: 'center',
    paddingTop: 5,
  }
});
export default SquareOffsetView;
