import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import {
  Text,
} from '../components';

import Colors from '../theme/colors';

class CustomInput extends Component {
  render() {
    const {
      labelStyle,
      label,
      ...inputProps,
    } = this.props;

    const {
      fontWeight,
      fontStyle,
      fontSize,
      ...rest,
    } = labelStyle;

    return (
      <View style={{ marginVertical: 8 }}>
        <Text color={Colors.theme.primaryColor} fontWeight={fontWeight} fontStyle={fontStyle} size={fontSize} style={[{ ...Colors.shadows.whiteText }, rest]}>{label}</Text>
        <TextInput
          {...inputProps}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"
          selectionColor="rgba(255,255,255,0.33)"
          
          style={{
            marginTop: 5,
            borderColor: Colors.theme.primaryColor,
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 16,
            paddingVertical: 16,
            fontSize: 22,
            color: 'white',
          }}
        />
      </View>
    )
  }
}

export default CustomInput;