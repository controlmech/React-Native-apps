import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import { Icon } from 'native-base';

export default class Note extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      backgroundColor: global.colors.bColor,
      textColor: global.colors.tColor,
      accentColor: global.colors.aColor,
      noteColor: global.colors.nColor,
      lineColor: global.colors.lColor,
    }
  }

  render(){
    return (    
      <View key={this.props.keyval} style={[styles.note, {backgroundColor: this.state.noteColor, borderBottomColor: this.state.lineColor}]}>
        <Text style={[styles.noteText, {fontSize: 12, color: this.state.textColor, borderLeftColor: this.state.accentColor}]}>{this.props.val.date}</Text>
        <TextInput style={[styles.noteText, {fontSize: 16, color: this.state.textColor, borderLeftColor: this.state.accentColor}]}>{this.props.val.note}</TextInput>

        <TouchableOpacity onPress={this.props.editMethod} style={[styles.noteIcon, {right: 50}]}>
              <Icon style={{paddingTop: 5, color: this.state.textColor, backgroundColor: this.state.noteColor}}name='md-create'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.props.deleteMethod} style={[styles.noteIcon, {right: 10}]}>
            <Icon style={{paddingTop: 5, color: this.state.textColor, backgroundColor: this.state.noteColor}}name='md-trash'/>
        </TouchableOpacity>
      </View>
    );
  } 
};

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
  },
  noteIcon: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    top: 10,
    bottom: 10,
  },
})