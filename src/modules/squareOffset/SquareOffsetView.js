import React, {Component, PropTypes} from 'react';
import {TouchableWithoutFeedback,View,Dimensions,
  StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import Overlay from 'react-native-overlay';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import {Button,Badge,Icon} from 'native-base';
import AwesomeAlert from 'react-native-awesome-alerts';
import dismissKeyboard from 'react-native-dismiss-keyboard';

const ScreenWidth = Dimensions.get('window').width;

class SquareOffsetView extends Component {

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

  constructor(props) {
    super(props);
    this.state = {
      setflag: false,
      travelflag: false,
      runflag: false,
      showAlert: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.travel !== this.state.travelValue && nextProps.travel) {
      this.onChangeTravelValue(nextProps.travel.toString());
    }
    if (nextProps.set !== this.state.setValue && nextProps.set) {
      this.onChangeSetValue(nextProps.set.toString());
    }
    if (nextProps.run !== this.state.runValue && nextProps.run) {
      this.onChangeRunValue(nextProps.run.toString());
    }
  }

  increment = () => {
    this.props.squareOffsetStateActions.increment();

  };

  toggleVisibility = () => {
    this.props.squareOffsetStateActions.toggleVisibility();
  };

  calculate = () => {

    //if at least two values, then allow calculate
    if (this.state.setValue
       ? (this.state.travelValue !== 0 && this.state.travelValue || this.state.runValue !== 0 && this.state.runValue)
       : (this.state.travelValue !== 0 && this.state.travelValue && this.state.runValue !== 0 && this.state.runValue)) {

      this.setState({setflag: true, travelflag: true, runflag: true,showAlert: false});

      if (!parseInt(this.state.setValue).isNaN && !parseInt(this.state.travelValue).isNaN && !parseInt(this.state.runValue).isNaN) {
        this.props.squareOffsetStateActions.calculate(parseFloat(this.state.setValue), parseFloat(this.state.travelValue), parseFloat(this.state.runValue));
      }
    } else {
      this.setState({showAlert: true});
    }
  };

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

    return (
      <TouchableWithoutFeedback onPress={ () => { dismissKeyboard(); } }>
        <View style={styles.container}>
         <TouchableOpacity style={styles.image} onPress={this.toggleVisibility}>
          <Image
              style={styles.image}
              source={require('../../images/diagram2-1@2x.png')}/>
         </TouchableOpacity>
            <Badge primary style={{marginBottom: 5}}>
              <Icon name='md-settings' style={{color: '#fff'}}/>
              <Text style={{fontSize: 15, color: '#fff', lineHeight: 21}}>U/M: Centimetre (CM)</Text>
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
                  source={require('../../images/diagram2-1@2x.png')} style={styles.largeImage}
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
            message='Input at least 2 values to calculate offset.'
            messageStyle={styles.awesomeAlertText}
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={true}
            showCancelButton={false}
            showConfirmButton={true}
            confirmButtonStyle={styles.awesomeAlertButton}
            confirmText='Re-enter values'
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#ecf0f1',
    padding: 5,
    margin: 5
  },
  awesomeAlertButton: {
    minHeight: '10%'
  },
  awesomeAlertText: {
    maxWidth: '90%',
    flexWrap: 'wrap'
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
    minWidth: ScreenWidth,
    maxWidth: ScreenWidth,
    borderColor: '#888',
    marginBottom: 5
  },
  largeImage: {
    minWidth: ScreenWidth,
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
