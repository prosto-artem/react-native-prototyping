import React, {Component, PropTypes} from 'react';
import {View,Dimensions, StyleSheet, Image, Text, TouchableOpacity,TouchableHighlight} from 'react-native';
import Overlay from 'react-native-overlay';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import {Button,Badge,Icon} from 'native-base';

class SquareOffsetView extends Component {
  static propTypes = {
    set: PropTypes.number,
    travel: PropTypes.number,
    run: PropTypes.number,
    loading: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool.isRequired,
    squareOffsetStateActions: PropTypes.shape({
      increment: PropTypes.func.isRequired,
      calculate: PropTypes.func.isRequired,
      reset: PropTypes.func.isRequired,
      setVisibility: PropTypes.func.isRequired
    }).isRequired,
    navigationStateActions: PropTypes.shape({
      pushRoute: PropTypes.func.isRequired
    }).isRequired
  };

  increment = () => {
    this.props.squareOffsetStateActions.increment();
  };

  setVisibility = () => {
    this.props.squareOffsetStateActions.setVisibility();
  };

  // TODO: Debug action - reducer setup for this action
  calculate = () => {

    console.log('props: ' + this.props.set);
    // this.props.squareOffsetStateActions.calculate(this.props.set,
    //   this.props.travel, this.props.run);
  };

  // TODO: Debug action - reducer setup for this action
  reset = () => {
    this.props.squareOffsetStateActions.reset();
  };

  render() {
    return (
        <View style={styles.container}>
         <TouchableOpacity style={styles.image} onPress={this.calculate}>
         <Image
            style={styles.image}
            source={require('../../images/diagram2-1.png')}
          />
          </TouchableOpacity >
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
          <Overlay isVisible={this.props.isVisible}>
            <View style={{flex: 1}>
              <Image resizeMode='cover'
                source={require('../../images/diagram2-1.png')} style={{flex: 1}}
              />
              <TouchableHighlight
                style={styles.overlayCancel}>
                <Icon name='close'
                  style={styles.cancelIcon} size={28} />
              </TouchableHighlight>
            </View>
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
