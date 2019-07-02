import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createAppContainer, createDrawerNavigator } from "react-navigation";

import CustomDrawerNavigator from "./components/CustomDrawerNavigator";
import Home from "./views/Home";
import Settings from "./views/Settings";
import About from "./views/About";
import "./views/SettingVars";

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" size={20} style={{ color: tintColor }} />
        ),
        drawerLabel: "Home"
      },
      screen: Home
    },

    Settings: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" size={20} style={{ color: tintColor }} />
        ),
        drawerLabel: "Settings"
      },
      screen: Settings
    },

    About: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" size={20} style={{ color: tintColor }} />
        ),
        drawerLabel: "About"
      },
      screen: About
    }
  },
  {
    contentComponent: CustomDrawerNavigator
  }
);

const MainApp = createAppContainer(MainNavigator);
export default MainApp;