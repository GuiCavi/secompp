import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import {
  LinearIcon,
} from '../components';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={{ fontFamily: 'avenir-black' }}>LoginScreen</Text>
        <Button title="Login" onPress={() => this.props.navigation.navigate('DashboardTabs')} />
      </View>
    );
  }
}

export default LoginScreen;
