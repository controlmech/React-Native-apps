import React, { Component } from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";

import CustomHeader from "../components/CustomHeader";

export default class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: global.colors.bColor }}>
        <CustomHeader navigation={this.props.navigation} />

        <Text style={{color: global.colors.tColor, fontSize: 20, padding: 20}}>
          This app is a project by controlmech (found at GitHub) 
          built using react-native and native-base to demonstrate their functionality
        </Text>

        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/controlmech/React-Native-apps')}>
          <Text style={{color: '#0645AD', fontSize: 20, padding: 20, textDecorationLine: 'underline'}}>
            GitHub
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}