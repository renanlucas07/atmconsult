import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/components/Home';
import Clients from './src/components/Clients';

class HomeScreen extends Component {
  static navigationOptions = {
    title: '',
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Home navigate={navigate} />
    );
  }
}

class ClientsScreen extends Component {
  static navigationOptions = {
    title: '',
    header: null
  };
  render() {
    
    return(
      <Clients goBack={this.props.navigation.goBack} />
    );
  }
}

const App5 = StackNavigator(
  {
    Home:   { screen: HomeScreen   },
    Clients: { screen: ClientsScreen }
  }
);

export default class App extends Component {
  render() {
    return (
      <App5 />
    );
  }
}