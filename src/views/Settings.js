import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CustomHeader from "../components/CustomHeader";

export default class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        color: global.colors.bColor,
        textColor: global.colors.tColor,
    };

    this.enableDark = this.enableDark.bind(this);
    this.enableLight = this.enableLight.bind(this);
  }
  render() {
    return (
      <View style={[styles.settings, {backgroundColor: this.state.color}]}>
        <CustomHeader navigation={this.props.navigation} />
        
        <View style={{flexDirection: 'row', padding: 10}}>
          <Text style={[styles.text, {color: this.state.textColor}]}>
            Dark theme:
          </Text>
          <Button onPress = {this.enableDark } title = 'enable'/>
        </View>

        <View style={{flexDirection: 'row', padding: 10}}>
          <Text style={[styles.text, {color: this.state.textColor}]}>
            Light theme:
          </Text>
          <Button onPress = {this.enableLight } title = 'enable'/>
        </View>
      </View>
    );
  }

  enableDark(){
    global.colors.tColor = "#ffffff";
    global.colors.bColor = "#151515";
    global.colors.nColor = "#2a2a2a";
    global.colors.lColor = "#ffffff";

    this.setState({color: global.colors.bColor});
    this.setState({textColor: global.colors.tColor});
  }

  enableLight(){
    global.colors.tColor = "#000000";
    global.colors.bColor = "#ffffff";
    global.colors.nColor = "#eaeaea";
    global.colors.lColor = "#808080";

    this.setState({color: global.colors.bColor});
    this.setState({textColor: global.colors.tColor});
  }
}

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    fontSize: 20,
    padding: 10,
  }
});