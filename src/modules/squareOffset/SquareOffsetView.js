import React, {Component, PropTypes} from 'react';
import {View,Dimensions, StyleSheet, Image, Text, TouchableOpacity,TouchableHighlight} from 'react-native';
import Overlay from 'react-native-overlay';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import {Button,Badge,Icon} from 'native-base';

class SquareOffsetView extends Component {

  static propTypes = {
    set: PropTypes.number, // TODO: add conditional input validation based on props values
    travel: PropTypes.number,
    run: PropTypes.number,
    loading: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool.isRequired,
    squareOffsetStateActions: PropTypes.shape({
      increment: PropTypes.func.isRequired,
      calculate: PropTypes.func.isRequired,
      reset: PropTypes.func.isRequired,
      toggleVisibility: PropTypes.func.isRequired
    }).isRequired,
    navigationStateActions: PropTypes.shape({
      pushRoute: PropTypes.func.isRequired
    }).isRequired
  };

  // TODO: debug all actions as props values zero
  increment = () => {
    this.props.squareOffsetStateActions.increment();
  };

  toggleVisibility = () => {
    this.props.squareOffsetStateActions.toggleVisibility();
  };

  // TODO: Debug action - reducer setup
  calculate = () => {
    this.props.squareOffsetStateActions.calculate(this.props.set,
    this.props.travel, this.props.run);
  };

  // TODO: Debug action - reducer setup for this action
  reset = () => {
    this.props.squareOffsetStateActions.reset();
  };

  render() {

    const {set, run, travel} = this.props;
    var setString = set.toString();
    var runString = run.toString();
    var travelString = travel.toString();
    return (
        <View style={styles.container}>
         <TouchableOpacity style={styles.image} onPress={this.toggleVisibility}>
          <Image
              style={styles.image}
              source={require('../../images/diagram2-1.png')}
            />
          </TouchableOpacity >
          <Badge primary style={{marginBottom: 5}}>
            <Text style={{fontSize: 15, color: '#fff', lineHeight: 21}}>Input 2 values</Text>
          </Badge>
          
          <FloatLabelTextInput
          value={setString}
          placeholder={'Set'}
          keyboardType= 'numeric'
          style={styles.floatLabelTextInput}
          />
          <FloatLabelTextInput
          value={travelString}
          placeholder={'Travel'}
          keyboardType= 'numeric'         
          style={styles.floatLabelTextInput}
          />
          <FloatLabelTextInput
          placeholder={'Run'}
          value={runString}
          keyboardType= 'numeric'
          style={styles.floatLabelTextInput}
          />
          <Overlay isVisible={this.props.isVisible}>
              <Image resizeMode='cover'
                source={require('../../images/diagram2-1.png')} style={styles.largeImage}
              />
              <TouchableHighlight
                style={styles.overlayCancel} onPress={this.toggleVisibility}>
               
              </TouchableHighlight>
          </Overlay>
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
  largeImage: {
    maxWidth: ScreenWidth,
    borderColor: '#888',
    marginBottom: 5,
    flex: 4
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
  },
  overlayCancel: {
    padding: 20,
    position: 'absolute',
    right: 10,
    top: 0
  },
  cancelIcon: {
    color: 'white'
  }
});
export default SquareOffsetView;
