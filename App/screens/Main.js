import React from 'react';
import { createAppContainer } from "react-navigation";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state={
    enumber:"",
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.loginBtn}
        onPress={() =>
            this.props.navigation.navigate('Reserve')
          }>
          <Text style={styles.loginText}>Bus Reserver</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn}
        onPress={() =>
            this.props.navigation.navigate('Detect')
          }>
          <Text style={styles.loginText}>Distance Watcher</Text>
        </TouchableOpacity>

            <Text style={styles.logo1}>Be Safe with</Text>
          <Text style={styles.logo}>CodeRed</Text>
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
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#e80505",
    marginBottom:40,
    bottom:0
  },
  logo1:{
    fontWeight:"bold",
    fontSize:25,
    color:"#000000",
    marginBottom:5
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
