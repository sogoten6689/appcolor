/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Slider,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

class ControlColor extends Component {
  constructor(props) {
    super(props);

    this.state = props;
  }
  render() {
    return(
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{flex: 2, marginLeft: 25 }}>{ this.props.title }</Text>
          <Slider onValueChange={ (value) => {
            this.props.onValueColorChange(value);
          }} value={ this.props.value } step={1} style={{flex: 8, marginRight: 10}} maximumValue={0} maximumValue={250} />
          <View style={{ flex: 1, marginRight: 25, justifyContent: 'center'}}>
            <TextInput value={ `${ this.props.value }` } style={{ width: 40, height: 25,borderColor: 'black', borderWidth: 1, borderRadius: 2, textAlign: 'center'}} />
          </View>
        </View>
    )
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    
    //init value
    this.state = {
      red: 125,
      green: 125,
      blue: 125,
    }
  }

  onSliderChange = (value) => {
    this.setState(value);
  }

  renderHeader = () => {
    return(
        <View style={styles.header}>
          <Text style={styles.headerTitle}>AppColor</Text>
        </View>
    )
  }

  render(){
    return (
      <View style={styles.container}>
        { this.renderHeader() }
        <View style={{ flex:1, alignItems: 'center',justifyContent: 'center'}}>
          <View style={{ width: 300, height: 600}}>
            <View style={{ flex:1, }}>
              <ControlColor title='Red' value={this.state.red} onValueColorChange={(value) => {
                const currentColor = this.state;
                const newColor = { ...currentColor, red: value}
                this.onSliderChange(newColor);
              }}></ControlColor>
              <ControlColor title='Green' value={this.state.green} onValueColorChange={(value) => {
                const currentColor = this.state;
                const newColor = { ...currentColor, green: value}
                this.onSliderChange(newColor);
              }}></ControlColor>
              <ControlColor title='Blue' value={this.state.blue} onValueColorChange={(value) => {
                const currentColor = this.state;
                const newColor = { ...currentColor, blue: value}
                this.onSliderChange(newColor);
              }}></ControlColor>
            </View>
            <View style={{ flex:1, backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`}}></View>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    backgroundColor: '#ECEFF1',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowColor: 'gray',
    elevation: 7,
    shadowOpacity: 0.9,
  },
  headerTitle: {
    fontSize: 40,
    marginTop: 30,
  }
});
