import React, { Component } from "react";
import Expo, {AppLoading} from "expo";

import MainApp from "./src/MainApp.js";

export default class App extends Component {
  render() {
    return <MainApp />;
  }
}