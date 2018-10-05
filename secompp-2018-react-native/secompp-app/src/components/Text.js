import React from 'react';
import { Text as NativeText, View } from 'react-native';

const mapWeight = {
  '100': 'light',
  '200': 'light',
  '300': 'book',
  '400': 'book',
  '500': 'roman',
  '600': 'medium',
  '700': 'heavy',
  '800': 'black',
  '900': 'black',
  'lighter': 'light',
  'light': 'book',
  'normal': 'roman',
  'medium': 'medium',
  'bold': 'heavy',
  'bolder': 'black',
};

const mapStyle = {
  'italic': 'oblique',
};

const Text = ({ fontWeight = 'normal', fontStyle = '', color = 'black', size: fontSize = 14, style, children, ...rest }) => (
  <NativeText
    {...rest}
    style={[
      {
        fontFamily: `avenir-${mapWeight[fontWeight]}${fontStyle !== '' ? '-' + mapStyle[fontStyle] : ''}`,
        color,
        fontSize,
      },
      style
    ]}
  >
    {children}
  </NativeText>
);

export default Text;
