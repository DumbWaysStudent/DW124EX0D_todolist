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
      id : '',
      editText:'',
      edit : false,
      text : '',
      listtaskdata : [
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
      let id = this.state.listtaskdata.length + 1
      const abc = {"id" : id ,"taskname" : taskname}   
      this.setState({listtaskdata : [...this.state.listtaskdata, abc], text : ''})
    }
    else {
      alert("Task tidak boleh kosong")
    }
  }

  _deleteBtn = (deleteditem) => {
    const { listtaskdata } = this.state
    const filtered = listtaskdata.filter(function(item) { return item.id != deleteditem.id; }); 
    this.setState({listtaskdata : filtered})
  }

  _handlePressCheckBox = (clickeditem) => {
    const {listtaskdata}  = this.state
    let existeditem = listtaskdata.find(item => clickeditem.id === item.id)
    if(existeditem) {
      existeditem.isDone = !clickeditem.isDone
      this.setState({})
    }  
  }

  _handleEdit = (wantedit) => {
    const {listtaskdata}  = this.state
    let idNya = listtaskdata.indexOf(wantedit)    
    this.setState({editText : wantedit.taskname, edit : true, id : idNya})
      
  }
  _handleChangeEdit = () => {
    const {listtaskdata, id, editText}  = this.state
    listtaskdata[id].taskname = editText
    this.setState([...listtaskdata])
    this.setState({text : '', edit : false, editText:''})
    
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.edit ? 
        <View style={styles.inputContainer}>        
          <TextInput
          style={styles.inputText}
          value={this.state.editText}
          onChangeText={text => this.setState({editText:text})}
          />
          <Button 
          onPress={() => this._handleChangeEdit()}
          style={styles.buttonAdd}>
            <Text style={styles.textBtn}>Change</Text>
          </Button>
          </View> :
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
            <Text style={styles.textBtn}>Add</Text>
          </Button>
          </View>
          }
        
        <View>
        {this.state.listtaskdata.map(item =>{
          return(
            <View key={item.id} style={styles.listTask}>
              <View style={styles.checkboxWithText}>
                <CheckBox checked={item.isDone} onPress={() => this._handlePressCheckBox(item)}/>
                <Text style={styles.fontList}>{item.taskname}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Icon 
                onPress={() => this._handleEdit(item)} 
                style={styles.icnEdit} name="create"/>               
                <Icon 
                onPress={() => this._deleteBtn(item)} 
                style={styles.icnTrash} name="trash"/>
              </View>
                
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
    },
    icnEdit : {
      paddingRight:10,
    },
    iconContainer : {
      flexDirection:"row",
      alignItems : "center"
    },
    textBtn : {
      textTransform:'uppercase',
      color : 'white'
    }
})