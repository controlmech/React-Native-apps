import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Alert, AsyncStorage, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View, Textarea, TextInput } from 'native-base';

import renderIf from './renderIf'
import Note from './Note';
import CustomHeader from 'C:/Users/Taha Aziz/rnApp1/src/components/CustomHeader';

export default class HomeScreen extends React.Component {
    constructor(props) {                            
        super(props);   
        this.state = {  
            noteArray: [],
            noteText: '',  
            status: false, 
            defaultText: 'Take a note...',
            buttonPadding: 20,
            backgroundColor: global.colors.bColor,
            textColor: global.colors.tColor,
            noteColor: global.colors.nColor,
            lineColor: global.colors.lColor,
            accentColor: global.colors.aColor,
        }   
    }
    componentDidMount(){
        this.displayData();
        this.loadColors();
    }

    render(){
        let notes = this.state.noteArray.map((val, key) => {
            return <Note 
                        key={key} 
                        keyVal={key} 
                        val={val} 
                        editMethod={ () => this.editNote(key)}
                        deleteMethod={ () => this.deleteAlert(key)}/>
        });

        return (
        <View style={{flex: 1, backgroundColor: this.state.backgroundColor}}>
            <CustomHeader navigation={this.props.navigation} />

            {renderIf(this.state.status)(
                <Textarea rowSpan={5} placeholder={this.state.defaultText}
                style={[styles.textInput, {fontSize: 16, color: this.state.textColor, backgroundColor: this.state.backgroundColor}]}
                onChangeText={(noteText) => this.setState({noteText})}
                value = {this.state.noteText}>
                </Textarea>
            )}

            <ScrollView style={styles.scrollContainer}>
                {notes}
            </ScrollView>

            <TouchableOpacity onPress = { this.addNote.bind(this) } style={[styles.addButton, {bottom: this.state.buttonPadding}]}>
                {renderIf(!this.state.status)(
                    <Text style={styles.addButtonText}>+</Text>
                )}
                {renderIf(this.state.status)(
                    <Ionicons
                    name="ios-checkmark"
                    size={42}
                    color="white"
                    />
                )}
            </TouchableOpacity>
            
            {renderIf(!this.state.status)(
            <TouchableOpacity onPress = { this.loadColors.bind(this) } style={[styles.addButton, {bottom: 20, right: 90}]}>
                <Ionicons
                    name="md-refresh"
                    size={30}
                    color="white"
                />
            </TouchableOpacity>
            )}
        </View>
        );
    } 

    addNote(){
        this.toggleStatus();
        if (this.state.noteText) {
            var d = new Date();
            this.state.noteArray.unshift({
                'date': d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
                'note': this.state.noteText,
            });
            this.setState({ noteArray: this.state.noteArray });
            this.setState({ noteText: '' });
        }

        this.saveData(this.state.noteArray);
        this.setState({defaultText: 'Take a note...'})
    }   
  
    deleteAlert(key){
        Alert.alert(
            'Delete note?',
            'This action cannot be undone',
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {text: 'OK', onPress: () => this.deleteNote(key)},
            ],
        );
    }

    deleteNote(key){
        this.state.noteArray.splice(key, 1);
        this.setState({ noteArray: this.state.noteArray });
        this.saveData(this.state.noteArray);
    }

    editNote(key){
        curArr = this.state.noteArray;
        var nText = JSON.stringify(curArr.slice(key));
        nText = nText.substring(nText.indexOf('","note":"') + 10, nText.indexOf('"}')); 
        this.setState({noteText: nText});

        this.addNote();
        this.deleteNote(key);
    }

    toggleStatus(){
        this.setState({ status:!this.state.status});
        if (this.state.buttonPadding == 20){
            this.setState({ buttonPadding: 270 });
        }
        if (this.state.buttonPadding == 270){
            this.setState({ buttonPadding: 20 });
        }
    }

    displayData = async () => {
        try {
            let user = await AsyncStorage.getItem('key');

            while (user.indexOf('"}') != -1){
                this.state.noteArray.push({
                    'date': user.substring(user.indexOf('{"date":"') + 9, user.indexOf('","note":"')),
                    'note': user.substring(user.indexOf('","note":"') + 10, user.indexOf('"}') ),
                });
                user = user.slice(user.indexOf('"}') + 2);
            }
            this.setState({ noteArray: this.state.noteArray });
            
        }
        catch(error){
            alert(error);
        }
    }

    loadColors(){
        this.setState({backgroundColor: global.colors.bColor});
        this.setState({textColor: global.colors.tColor});
        this.setState({lineColor: global.colors.lColor});
        this.setState({noteColor: global.colors.nColor});
        this.setState({accentColor: global.colors.aColor});
    }

    saveData(myArr){
        AsyncStorage.setItem('key', JSON.stringify(myArr));
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        marginBottom: 60,
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 20,
        zIndex: 10,
        borderTopWidth: 2,
        height: 670,
        borderTopColor: '#808080',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11, // layer ordering
        right: 20,
        backgroundColor: '#E91E63',
        width: 60,
        height: 60,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        resizeMode: 'stretch',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
  });