import 'react-native-gesture-handler';
import React, { Component } from 'react';
import  AppNavigation  from "./src/Routes/AppNavigation";

export default class App extends Component {
  render() {
       return <AppNavigation.mainNavigationFlow />;
  }
}