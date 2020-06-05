import React from 'react';
import { createAppContainer } from "react-navigation";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state={
    code:"",

  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>CodeRed</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Verificatin Code..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({code:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn}
        onPress={() =>
            this.props.navigation.navigate('Main')
          }>
          <Text style={styles.loginText}>RESET</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() =>
            this.props.navigation.navigate('ForgetPass')
          }>
          <Text style={styles.loginText}>Forget Password</Text>
        </TouchableOpacity>


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
