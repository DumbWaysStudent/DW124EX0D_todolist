import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import {
  Button,
} from 'native-base'


export default class TodoList extends Component {
  constructor() {
    super() 
    this.state = {
      text : '',
      dataNya : [
        {
            id : 0,
            taskname : "apayak"
        },
        {
            id : 1,
            taskname : "cobadulu"
        },
        {
            id : 2,
            taskname : "babbaba"
        },
      ]
    }
  }

  _handleAddBtn = () => {
    let taskname = this.state.text
    let id = this.state.dataNya.length + 1
    const abc = {"id" : id ,"taskname" : taskname}   
    this.setState({dataNya : [...this.state.dataNya, abc], text : ''})

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
          style={styles.inputText}
          value={this.state.text}
          placeholder="New Todo"
          onChangeText={text => this.setState({text})}
          />
          <Button 
          onPress={() => this._handleAddBtn()}
          style={styles.buttonAdd}>
            <Text>Add</Text>
          </Button>
        </View>
        <View>
        {this.state.dataNya.map(item =>{
          return(
            <View key={item.id} style={styles.listTask}>
                <Text style={styles.fontList}>{item.taskname}</Text>
            </View>
          )
            
        })}
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
    container : {
      padding : 10
    },
    listTask : {
        borderWidth:1,
        alignItems:"flex-start",
        justifyContent:"center",
        borderRadius:8
    },
    fontList : {
      fontSize:20,
      padding : 10
    },
    inputContainer : {
      flexDirection:"row",
      paddingBottom:20,
      justifyContent:"space-between"
    },
    inputText : {
      width : '73%',
      borderWidth:1,
      paddingRight:10,
      borderRadius:10,
      height : 40
    },
    buttonAdd: {
      width : "25%",
      justifyContent:"center",
      borderRadius:10,
      height : 40
    }
})