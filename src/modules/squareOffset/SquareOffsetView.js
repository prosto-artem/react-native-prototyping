import React, {Component} from 'react';
import {View, StyleSheet, Image, TextInput} from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';

class SquareOffsetView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setValue: 0,
      travelValue: 0,
      runValue: 0
    };
    this._handleTextChange = this._handleTextChange.bind(this);
  }

  _handleTextChange(e) {
    var change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  render() {
    return (
        <View style={styles.container}>
         <Image
            style={{flex: 1, height: undefined, width: undefined}}
            source={require('../../../../images/diagram2-1.png')}
            resizeMode='contain'
          />
          <TextInput
            value={this.state.setValue}
            keyboardType='numeric'
            name='setValue'
            onChangeText={this._handleTextChange}
            style={{width: 200, height: 44, padding: 8}}
          />
          <TextInput
            value={this.state.travelValue}
            keyboardType='numeric'
            name='travelValue'
            onChangeText={this._handleTextChange}
            style={{width: 200, height: 44, padding: 8}}
          />
          <TextInput
            value={this.state.runValue}
            keyboardType='numeric'
            name='runValue'
            onChangeText={this._handleTextChange}
            style={{width: 200, height: 44, padding: 8}}
          />
          <FloatLabelTextInput
          placeholder={'name of field'}
          value={'value of field'}
        />

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
  }
});
export default SquareOffsetView;
