import { createStackNavigator } from "react-navigation";

import Main from "./Home/Main";
import Secondary from "./Home/Secondary";

const HomeNavigator = createStackNavigator({
  Main: {
    navigationOptions: {
      header: null
    },
    screen: Main
  },

  Secondary: {
    navigationOptions: {
      header: null
    },
    screen: Secondary
  }
});

HomeNavigator.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index === 0,
  swipeEnabled: navigation.state.index === 0
});

export default HomeNavigator;