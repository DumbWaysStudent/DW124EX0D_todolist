import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import {
  Button,
  Icon,
  CheckBox
} from 'native-base'


export default class TodoList extends Component {
  constructor() {
    super() 
    this.state = {
      text : '',
      dataNya : [
        {
            id : 0,
            taskname : "apayak",
            isDone : false
        },
        {
            id : 1,
            taskname : "cobadulu",
            isDone : false
        },
        {
            id : 2,
            taskname : "babbaba",
            isDone : false
        },
      ]
    }
  }

  _handleAddBtn = () => {
    if(this.state.text != '') {
      let taskname = this.state.text
      let id = this.state.dataNya.length + 1
      const abc = {"id" : id ,"taskname" : taskname}   
      this.setState({dataNya : [...this.state.dataNya, abc], text : ''})
    }
    else {
      alert("Task tidak boleh kosong")
    }
  }

  _deleteBtn = (yangdihapus) => {
    const { dataNya } = this.state
    const filtered = dataNya.filter(function(item) { return item.id != yangdihapus.id; }); 
    this.setState({dataNya : filtered})
  }

  _handlePressCheckBox = (yangdiklik) => {
    const {dataNya}  = this.state
    let existeditem = dataNya.find(item => yangdiklik.id === item.id)
    if(existeditem) {
      existeditem.isDone = !yangdiklik.isDone
      this.setState([...dataNya])
    }
    
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
              <View style={styles.checkboxWithText}>
                <CheckBox checked={item.isDone} onPress={() => this._handlePressCheckBox(item)}/>
                <Text style={styles.fontList}>{item.taskname}</Text>
              </View>               
                <Icon 
                onPress={() => this._deleteBtn(item)} 
                style={styles.icnTrash} name="trash"/>
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
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:8,
        flexDirection:"row"
    },
    fontList : {
      fontSize:20,
      padding : 10,
      marginLeft:10
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
    },
    icnTrash : {
      paddingRight:10,
      color:'red'
    },
    checkboxWithText :{
      flexDirection : "row",
      alignItems : "center"
    }
})