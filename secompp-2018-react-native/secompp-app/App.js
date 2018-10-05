import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';

import Router from './src/Router';

export default class App extends Component {
  state = {
    isReady: false,
  };

  async cacheResourcesAsync() {
    await Font.loadAsync({
      'avenir-light': require('./assets/fonts/Avenir/Avenir-Light.ttf'),
      'avenir-light-oblique': require('./assets/fonts/Avenir/Avenir-LightOblique.ttf'),

      'avenir-book': require('./assets/fonts/Avenir/Avenir-Book.ttf'),
      'avenir-book-oblique': require('./assets/fonts/Avenir/Avenir-BookOblique.ttf'),

      'avenir-roman': require('./assets/fonts/Avenir/Avenir-Roman.ttf'),
      'avenir-roman-oblique': require('./assets/fonts/Avenir/Avenir-Oblique.ttf'),

      'avenir-medium': require('./assets/fonts/Avenir/Avenir-Medium.ttf'),
      'avenir-medium-oblique': require('./assets/fonts/Avenir/Avenir-MediumOblique.ttf'),

      'avenir-heavy': require('./assets/fonts/Avenir/Avenir-Heavy.ttf'),
      'avenir-heavy-oblique': require('./assets/fonts/Avenir/Avenir-HeavyOblique.ttf'),

      'avenir-black': require('./assets/fonts/Avenir/Avenir-Black.ttf'),
      'avenir-black-oblique': require('./assets/fonts/Avenir/Avenir-BlackOblique.ttf'),

      'Linearicons-Free': require('./assets/fonts/LinearIcons/Linearicons-Free.ttf'),
    });

    return true;
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    
    return <Router />;
  }
};