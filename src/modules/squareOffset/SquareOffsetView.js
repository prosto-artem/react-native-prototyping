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
            style={{flex: 1, height: undefined, width: undefined}}
            source={require('../../../images/diagram2-1.png')}
            resizeMode='contain'
          />
          <TextInput
            value={this.props.set}
            keyboardType='numeric'
            name='setValue'
            onChangeText={this.calculate}
            style={{width: 200, height: 44, padding: 8}}
          />
          <TextInput
            value={this.props.travel}
            keyboardType='numeric'
            name='travelValue'
            onChangeText={this.calculate}
            style={{width: 200, height: 44, padding: 8}}
          />
          <TextInput
            value={this.props.run}
            keyboardType='numeric'
            name='runValue'
            onChangeText={this.calculate}
            style={{width: 200, height: 44, padding: 8}}
          />
          <FloatLabelTextInput
          placeholder={'name of field'}
          value={'value of field'}
        />
        <TouchableOpacity
            accessible={true}
            accessibilityLabel={'Reset Form'}
            onPress={this.reset}>          
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '20%',
    paddingBottom: '20%',
    backgroundColor: '#ecf0f1'
  },
  linkButton: {
    textAlign: 'center',
    color: '#CCCCCC',
    marginBottom: 10,
    padding: 5
  }
});
export default SquareOffsetView;
