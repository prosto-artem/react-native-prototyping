import React, {Component, PropTypes} from 'react';
import {View,Dimensions, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Overlay from 'react-native-overlay';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import {Button,Badge,Icon} from 'native-base';

class SquareOffsetView extends Component {

    constructor(props) {
      super(props);
      this.state={
        setflag: false,
        travelflag: false,
        runflag: false
      }
    }


  static propTypes = {
    set: PropTypes.number,
    travel: PropTypes.number,
    run: PropTypes.number,
    loading: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool.isRequired,
    isCalcEnabled: PropTypes.bool.isRequired,
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

  // atLeastTwoValues = () => {

  //   if(this.state.setValue
  //     ? (this.state.travelValue || this.state.runValue)
  //     : (this.state.travelValue && this.state.runValue)){
  //       this.setState({isCalcEnabled: true});
  //   }else
  //       this.setState({isCalcEnabled: true});
  //   }

  // }

  // TODO: Debug action - reducer setup
  //Values not updating in view inputs when action dispatched
  //but changed in state
  calculate = () => {

    this.setState({setflag: true, travelflag: true, runflag: true});
    //if at least two values, then allow calculate
    if (this.state.setValue
       ? (this.state.travelValue || this.state.runValue)
       : (this.state.travelValue && this.state.runValue)) {

      if (parseInt(this.state.setValue) !== NaN && parseInt(this.state.travelValue) !== NaN && parseInt(this.state.runValue) !== NaN) {
          this.props.squareOffsetStateActions.calculate(parseInt(this.state.setValue), parseInt(this.state.travelValue), parseInt(this.state.runValue));

        }

    } else {
      console.log('invalid input for calculation, at least two numbers required');
    }
  };

  // TODO: Debug action - reducer setup for this action
  reset = () => {
    
    this.props.squareOffsetStateActions.reset();
    this.setState({setflag: false, travelflag: false, runflag: false});
    this.setState({setValue: '', travelValue: '', runValue: ''})
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

    console.log(this.props.run);
    return (
        <View style={styles.container}>
         <TouchableOpacity style={styles.image} onPress={this.toggleVisibility}>
          <Image
              style={styles.image}
              source={require('../../images/diagram2-1.png')}
            />
          </TouchableOpacity >
          
            <Badge primary style={{marginBottom: 5}}>
              <Text style={{fontSize: 15, color: '#fff', lineHeight: 21}}>Input 2 values to calculate offset</Text>
            </Badge>

          <FloatLabelTextInput
          placeholder={'Set'}
          keyboardType= 'numeric'
          value={this.state.setflag? this.props.set.toString(): this.state.setValue}
          style={styles.floatLabelTextInput}
          onChangeTextValue={this.onChangeSetValue}
          />
          <FloatLabelTextInput
          placeholder={'Travel'}
          keyboardType= 'numeric'
          value={this.state.travelflag? this.props.travel.toString(): this.state.travelValue}
          style={styles.floatLabelTextInput}
          onChangeTextValue={this.onChangeTravelValue}
          />
          <FloatLabelTextInput
          placeholder={'Run'}
          keyboardType= 'numeric'
          value={this.state.runflag? this.props.run.toString(): this.state.runValue}
          style={styles.floatLabelTextInput}
          onChangeTextValue={this.onChangeRunValue}
          />
          <Overlay isVisible={this.props.isVisible}>
                <Image resizeMode='cover'
                  source={require('../../images/diagram2-1.png')} style={styles.largeImage}
                />
                <Button large warning
                  accessible={true}
                  accessibilityLabel={'Minimize diagram'}
                  onPress={this.toggleVisibility}
                  style={{padding: 20,
                    position: 'absolute',
                    right: 10,
                    top: 5}}>
                  <Icon name='close' style={{color: '#fff'}}/>
                  <Text style={styles.buttonTextStlye}>
                  Close
                </Text>
                </Button>
          </Overlay>
          { !this.props.isVisible &&
            <View style={styles.buttonView} isVisible={!this.props.isVisible}>
              <Button large iconLeft primary
                  accessible={true}
                  //disabled={this.props.isCalcEnabled}
                  accessibilityLabel={'Calculate result'}
                  onPress={this.calculate} >
                  <Icon name='calculator' style={{color: 'white'}} />
                  <Text style={styles.buttonTextStlye}>
                  Calculate
                </Text>
              </Button>
              <Button medium warning
                  accessible={true}
                  accessibilityLabel={'Reset form'}
                  onPress={this.reset}
                  style={{marginLeft: 4, color: 'white'}}>
                  <Icon name='trash' style={{color: 'white'}}/>
              </Button>
            </View>
          }
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
  buttonTextStlye:
  {
    color: 'white'
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
    marginTop: 8,
    marginBottom: 4
  },
  infoText: {
    paddingLeft: 5
  },
  cancelIcon: {
    color: 'white'
  }
});
export default SquareOffsetView;
