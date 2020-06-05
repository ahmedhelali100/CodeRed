import React from 'react';
import { createAppContainer } from "react-navigation";
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,ScrollView, StatusBar} from 'react-native';
import { RowItem } from "../components/RowItem";

export default class App extends React.Component {
  state={
    enumber:"",
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container1}>
      <View style={{margin: 1,
                    height: 500,
                    backgroundColor:"#465881"}}>
        <RowItem
          name="Reserve Bus"
          color="#799496"
            />
            </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#e80505",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#e80505",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});
