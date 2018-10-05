import React, { Component } from 'react';
import { View, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import {
  Logo,
  Text,
  Button,
  CustomInput,
} from '../components';

import Colors from '../theme/colors';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onEmailChangeText = (email) => {
    this.setState({ email });
  }

  onPasswordChangeText = (password) => {
    this.setState({ password });
  }

  render() {
    return (
      <ImageBackground source={require('../../assets/images/bg.png')} style={{ height: '100%', width: '100%' }}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgba(51,51,51,0.52)' }}>
          <KeyboardAvoidingView behavior="padding" style={{ flex: 1, marginHorizontal: 16, }}>
            <View style={{ alignItems: 'center', marginTop: 48 }}>
              <Logo color="white" style={{ width: 212, height: 52 }} />

              <Text fontWeight="light" style={{ color: 'white', textAlign: 'center', width: '50%', marginTop: 8, ...Colors.shadows.whiteText }}>Semana do Curso de Ciência da Computação</Text>
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
              {/* <View>
                <Text size={32} fontWeight="lighter" style={{ marginBottom: 8, textAlign: 'center', color: '#f7f7f7', ...Colors.shadows.whiteText }}>Acessar</Text>
              </View> */}

              <CustomInput
                label="EMAIL"
                labelStyle={{ fontWeight: 'light', fontSize: 16 }}

                placeholder="john@example.com"
                value={this.state.email}
                onChangeText={this.onEmailChangeText}
              />

              <CustomInput
                label="SENHA"
                labelStyle={{ fontWeight: 'light', fontSize: 16 }}

                placeholder="******"
                value={this.state.password}
                onChangeText={this.onPasswordChangeText}
                
                secureTextEntry
              />

              <Button style={{ marginVertical: 8 }} onPress={() => this.props.navigation.navigate('DashboardTabs')}>
                <Text color="white" size={18} style={{ ...Colors.shadows.whiteText }}>ENTRAR</Text>
              </Button>

              <View>
                <Text color="white" fontWeight="light" size={16} style={{ textAlign: 'center', marginTop: 24 }}>Para criar uma conta, <Text size={16} color={Colors.theme.primaryColor} fontWeight="bold" style={{ textDecorationLine: 'underline', ...Colors.shadows.whiteText }}>clique aqui</Text></Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

export default LoginScreen;
