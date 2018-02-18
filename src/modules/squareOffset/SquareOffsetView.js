import React, {Component, PropTypes} from 'react';
import {TouchableWithoutFeedback,View,Dimensions, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Overlay from 'react-native-overlay';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import {Button,Badge,Icon} from 'native-base';
import AwesomeAlert from 'react-native-awesome-alerts';
import dismissKeyboard from 'react-native-dismiss-keyboard';

class SquareOffsetView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      setflag: false,
      travelflag: false,
      runflag: false,
      showAlert: false
    };
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

  // TODO: Debug action - reducer setup
  //Values not updating in view inputs when action dispatched
  //but changed in state
  calculate = () => {

    //if at least two values, then allow calculate
    if (this.state.setValue
       ? (this.state.travelValue !== 0 && this.state.travelValue || this.state.runValue !== 0 && this.state.runValue)
       : (this.state.travelValue !== 0 && this.state.travelValue && this.state.runValue !== 0 && this.state.runValue)) {

      this.setState({setflag: true, travelflag: true, runflag: true,showAlert: false});

      if (!parseInt(this.state.setValue).isNaN && !parseInt(this.state.travelValue).isNaN && !parseInt(this.state.runValue).isNaN) {
        this.props.squareOffsetStateActions.calculate(parseInt(this.state.setValue), parseInt(this.state.travelValue), parseInt(this.state.runValue));
      }
    } else {
      this.setState({showAlert: true});
    }
  };

  // TODO: Debug action - reducer setup for this action
  reset = () => {

    this.props.squareOffsetStateActions.reset();
    this.setState({setflag: false, travelflag: false, runflag: false});
    this.setState({setValue: '', travelValue: '', runValue: ''});
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };

  onChangeSetValue = (text) => {
    this.setState({setflag: false});
    this.setState({setValue: text});
  }

  onChangeTravelValue = (text) => {
    this.setState({travelflag: false});
    this.setState({travelValue: text});
  }

  onChangeRunValue = (text) => {
    this.setState({runflag: false});
    this.setState({runValue: text});
  }

  render() {

    console.log(this.props.run);
    return (
      <TouchableWithoutFeedback onPress={ () => { dismissKeyboard(); } }>
        <View style={styles.container}>
         <TouchableOpacity style={styles.image} onPress={this.toggleVisibility}>
          <Image
              style={styles.image}
              source={require('../../images/diagram2-1.png')}
            />
          </TouchableOpacity >

            <Badge primary style={{marginBottom: 5}}>
              <Text style={{fontSize: 15, color: '#fff', lineHeight: 21}}>Input 2 values </Text>
            </Badge>

          <FloatLabelTextInput
          placeholder={'Set'}
          keyboardType= 'numeric'
          value={this.state.setflag ? this.props.set.toString() : this.state.setValue}
          style={styles.floatLabelTextInput}
          onChangeTextValue={this.onChangeSetValue}
          />
          <FloatLabelTextInput
          placeholder={'Travel'}
          keyboardType= 'numeric'
          value={this.state.travelflag ? this.props.travel.toString() : this.state.travelValue}
          style={styles.floatLabelTextInput}
          onChangeTextValue={this.onChangeTravelValue}
          />
          <FloatLabelTextInput
          placeholder={'Run'}
          keyboardType= 'numeric'
          value={this.state.runflag ? this.props.run.toString() : this.state.runValue}
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
          <AwesomeAlert
            show={this.state.showAlert}
            title='Input Error'
            message='Input at least 2 values..'
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={true}
            showCancelButton={false}
            showConfirmButton={true}
            confirmText='Ok'
            confirmButtonColor='#DD6B55'
            onConfirmPressed={() => {
              this.hideAlert();
            }}
          />
          { !this.props.isVisible &&
            <View style={styles.buttonView} isVisible={!this.props.isVisible}>
              <Button large iconLeft primary
                  accessible={true}
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
                  style={{marginLeft: 4}}>
                  <Icon name='trash' style={{color: 'white'}}/>
              </Button>
            </View>
          }
        </View>
     </TouchableWithoutFeedback>
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
    marginBottom: 10,
    flex: 4
  },
  floatLabelTextInput: {
    alignSelf: 'stretch'
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
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
