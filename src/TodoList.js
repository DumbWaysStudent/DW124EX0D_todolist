import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet
} from 'react-native';


export default class TodoList extends Component {
  constructor() {
    super() 
    this.state = {
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
  render() {
    return (
      
      <View>
        {this.state.dataNya.map(item =>{
          return(
            <View key={item.id} style={styles.listTask}>
                <Text style={styles.fontList}>{item.taskname}</Text>
            </View>
          )
            
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    listTask : {
        borderWidth:1,
        alignItems:"flex-start",
        justifyContent:"center"
    },
    fontList : {
      fontSize:20,
      padding : 10
    }
})
