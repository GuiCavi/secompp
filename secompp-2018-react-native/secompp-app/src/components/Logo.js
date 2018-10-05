import React from 'react';
import { Image } from 'react-native';

const Logo = ({ color, style }) => {
  let image;

  switch (color) {
    case 'black':
      image = require('../../assets/images/logo-black.png');
      break;

    case 'white': 
    default:
      image = require('../../assets/images/logo-white.png');
      break;
  }

  return (<Image source={image} style={[{ width: 110, height: 22 }, style]} />);
}

Logo.defaultProps = {
  color: 'black',
};

export default Logo;
