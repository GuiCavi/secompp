import React, { Component } from 'react';
import { View, TouchableHighlight, TouchableNativeFeedback, Platform } from 'react-native';

import Colors from '../theme/colors';

class Button extends Component {
  render() {
    let Touchable = null;
    let props = {
      ...this.props,
    };
    
    if (Platform.OS === 'ios') {
      Touchable = TouchableHighlight;
      props.underlayColor = 'black';
    }
    else {
      Touchable = TouchableNativeFeedback;
      props.background = TouchableNativeFeedback.Ripple('white');
    }

    return (
      <Touchable {...props} style={{ borderRadius: 5 }}>
        <View
          style={[
            {
              paddingVertical: 16,
              alignItems: "center",
              backgroundColor: Colors.theme.primaryColor,
              borderRadius: 5,
              marginVertical: Platform.OS === 'android' ? 8 : 0,
            },
            this.props.style
          ]}
        >
          {this.props.children}
        </View>
      </Touchable>
    )
  }
}

export default Button;