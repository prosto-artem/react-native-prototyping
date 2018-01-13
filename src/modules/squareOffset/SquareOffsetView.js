import React, {Component, PropTypes} from 'react';
import {View,Dimensions, StyleSheet, Image, Text} from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import {Button,Badge,Icon} from 'native-base';

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

  // TODO: Debug action - reducer setup for this action
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
          <Badge primary style={{marginBottom: 5}}>
            <Text style={{fontSize: 15, color: '#fff', lineHeight: 21}}>Input 2 values</Text>
          </Badge>
          <FloatLabelTextInput
          value={this.props.set}
          placeholder={'Set'}
          keyboardType= 'numeric'
          style={styles.floatLabelTextInput}
          />
          <FloatLabelTextInput
          value={this.props.travel}
          placeholder={'Travel'}
          keyboardType= 'numeric'          
          style={styles.floatLabelTextInput}
          />
          <FloatLabelTextInput
          placeholder={'Run'}
          value={this.props.run}
          keyboardType= 'numeric'
          style={styles.floatLabelTextInput}
          />
          <View style={styles.buttonView}>
          <Button iconLeft primary
              accessible={true}
              accessibilityLabel={'Calculate result'}
              onPress={this.calculate} >
              <Icon name='calculator' />
              <Text>
              Calculate
            </Text>
          </Button>
          <Button small warning
              accessible={true}
              accessibilityLabel={'Reset form'}
              onPress={this.reset}
              style={{marginLeft: 4}}>
              <Icon name='trash'/>          
          </Button>
          </View>
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
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8
  },
  infoText: {
    paddingLeft: 5
  }
});
export default SquareOffsetView;
