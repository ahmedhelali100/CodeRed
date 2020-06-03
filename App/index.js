import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CodeRedIndex from "./screens/CodeRedIndex";
import CodeRed from "./screens/CodeRed";

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: CodeRedIndex,
    navigationOptions: {
      headerTitle: "CodeRed"
    }
  },
  CodeRed: {
    screen: CodeRed,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  }
});

export default createAppContainer(MainStack);
