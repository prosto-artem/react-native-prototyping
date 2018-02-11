import React, {Component, PropTypes} from 'react';
import {View,Dimensions, StyleSheet, Image, Text, TouchableOpacity,TouchableHighlight} from 'react-native';
import Overlay from 'react-native-overlay';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import {Button,Badge,Icon} from 'native-base';

class SquareOffsetView extends Component {

 constructor(props) {
   super(props);
   this.state = {
      setflag: false,
      travelflag: false,
      runflag: false
   }
 }

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
    this.setState({setflag:true, travelflag: true, runflag: true})
    this.props.squareOffsetStateActions.increment();
    
  };

  toggleVisibility = () => {
    this.props.squareOffsetStateActions.toggleVisibility();
  };

  // TODO: Debug action - reducer setup
  calculate = () => {

    this.setState({setflag:true, travelflag: true, runflag: true})

    if(parseInt(this.state.setValue)!==NaN && parseInt(this.state.travelValue)!==NaN && parseInt(this.state.runValue)!==NaN) {
       this.props.squareOffsetStateActions.calculate(parseInt(this.state.setValue), parseInt(this.state.travelValue), parseInt(this.state.runValue));   
 
    } else {
      alert("Please input Numbers!");
    }
   
  };

  // TODO: Debug action - reducer setup for this action
  reset = () => {
    this.props.squareOffsetStateActions.reset();
  };

  onChangeSetValue = (text) => {
    this.setState({setflag: false})
    this.setState({setValue: text});
  }

  onChangeTravelValue = (text) => {
    this.setState({travelflag: false})
    this.setState({travelValue: text});
  }

  onChangeRunValue = (text) => {
    this.setState({runflag: false})
    this.setState({runValue: text});
  }

  render() {

    return (
        <View style={styles.container}>
         <TouchableOpacity style={styles.image} onPress={this.toggleVisibility}>
          <Image
              style={styles.image}
              source={require('../../images/diagram2-1.png')}
            />
          </TouchableOpacity >
          <TouchableOpacity onPress={this.increment}>
            <Badge primary style={{marginBottom: 5}}>
              <Text style={{fontSize: 15, color: '#fff', lineHeight: 21}}>Input 2 values</Text>
            </Badge>
          </TouchableOpacity>
          
          <FloatLabelTextInput
          placeholder={'Set'}
          value={this.state.setflag? this.props.set.toString():this.state.setValue}
          keyboardType= 'numeric'
          style={styles.floatLabelTextInput}
          onChangeTextValue={this.onChangeSetValue}
          />
          <FloatLabelTextInput
          placeholder={'Travel'}
          value={this.state.travelflag? this.props.travel.toString():this.state.travelValue}
          keyboardType= 'numeric'         
          style={styles.floatLabelTextInput}
          onChangeTextValue={this.onChangeTravelValue}
          />
          <FloatLabelTextInput
          placeholder={'Run'}
          value={this.state.runflag? this.props.run.toString():this.state.runValue}
          keyboardType= 'numeric'
          style={styles.floatLabelTextInput}
          onChangeTextValue={this.onChangeRunValue}
          />
          <Overlay isVisible={this.props.isVisible}>
                <Image resizeMode='cover'
                  source={require('../../images/diagram2-1.png')} style={styles.largeImage}
                />
                <TouchableHighlight
                  style={styles.overlayCancel} onPress={this.toggleVisibility}>
                  <Text style={{color: 'white'}}>Cancel Overlay</Text>
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
