import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import {Textarea, Button, View, Text} from "native-base";
import Note from "./Note";

export default class Secondary extends Component {
  
  constructor(props) {                            
    super(props);   
    this.state = {  
        noteArray: [],  
        noteText: '',   
    }   
  }

  render() { 
    let notes = this.state.noteArray.map((val, key) => {
      return <Note 
                  key={key} 
                  keyVal={key} 
                  val={val} 
                  deleteMethod={ () => this.deleteNote(key)}/>
    });

    return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <Button
            title="Back"
            onPress={() => this.props.navigation.goBack()}
        />
        <Textarea rowSpan={5} bordered placeholder="Textarea"
        style={styles.textInput}
        onChangeText={(noteText) => this.setState({noteText})}
        value={this.state.noteText}>
        </Textarea>

        <ScrollView style={styles.scrollContainer}>
                {notes}
            </ScrollView>

        <TouchableOpacity onPress = { this.addNote.bind(this) } style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={styles.sButton}>
                <Text style={styles.headerTitleStyle}>go back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  addNote(){
    if (this.state.noteText) {
        var d = new Date();
        this.state.noteArray.unshift({
            'date': d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
            'note': this.state.noteText,
        });
        this.setState({ noteArray: this.state.noteArray });
        this.setState({ noteText: '' });
    }
  }   

  deleteNote(key){
      this.state.noteArray.splice(key, 1);
      this.setState({ noteArray: this.state.noteArray });
  }
}


const styles = StyleSheet.create({
  headerStyle: {
      backgroundColor: '#252525',
      height: 90,
      borderBottomWidth: 10,
      borderBottomColor: '#ddd',
  },
  headerTitleStyle: {
      color: 'white',
      fontSize: 18,
      textAlign: "center",
      marginTop: 20,
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100,
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
  },
  textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      height: 1000,
      borderTopColor: '#ededed',
  },
  addButton: {
      position: 'absolute',
      zIndex: 11, // layer ordering
      right: 20,
      bottom: 90,
      backgroundColor: '#E91E63',
      width: 60,
      height: 60,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
  },
  sButton: {
    position: 'absolute',
    zIndex: 12, // layer ordering
    right: 50,
    bottom: 100,
    backgroundColor: '#F0196A',
    width: 70,
    height: 70,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
},
  addButtonText: {
      color: '#fff',
      fontSize: 24,
  },
});