import React from 'react';
import { createAppContainer } from "react-navigation";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { db } from './config';

/*let addUser = item => {
  db.ref('users/'+userId).push({
    enumber: item1,
    email: item2,
    password: item3,
  });
};*/


export default class App extends React.Component {
  state={
    enumber:"",
    email:"",
    password:"",
    errorMessage: null
  }
  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password, this.state.enumber)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>CodeRed</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Enumber..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({enumber:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn}
        onPress={() =>
            this.props.navigation.navigate('Main')
          }>
          <Text style={styles.loginText}>SIGNUP</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() =>
            this.props.navigation.navigate('Login')
          }>
          <Text style={styles.loginText}>Login</Text>
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
