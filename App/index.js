
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CodeRedIndex from "./screens/CodeRedIndex";
import CodeRed from "./screens/CodeRed";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import ForgetPass from "./screens/ForgetPass";
import Reset from "./screens/Reset";
import Main from "./screens/Main";
import Detect from "./screens/Detect";
import Reserve from "./screens/Reserve";


const MainStack = createStackNavigator({
Login: {screen: Login},
Signup: {screen: Signup},
ForgetPass: {screen: ForgetPass},
Reset: {screen: Reset},
Main: {screen: Main},
Reserve: {screen: Reserve},
Detect : {screen: Detect},
},{headerMode: 'none'});
export default createAppContainer(MainStack);

/*
const MainStack = createStackNavigator({
  CodeRedIndex: {
    screen: Login,
    navigationOptions: {
      headerTitle: "CodeRed",
      headerTintColor: "#000",
      headerStyle: {
        backgroundColor: "#3cf036",
        borderBottomColor: "#3cf036"
      }
    }

  },
  CodeRed: {
    screen: CodeRed,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#3cf036",
        borderBottomColor: "#3cf036"
      }
    })
  }
});

export default createAppContainer(MainStack);*/
