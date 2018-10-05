import { Platform } from 'react-native';

export default {
  theme: {
    primaryColor: '#FAB301',
    secondaryColor: '#F0C352',
    accentColor: '#0095d8',
    textColor: '#343434',
  },
  badgeColors: {
    color1: '#E5710D',
    color2: '#4C31A5',
    color3: '#A53131',
    color4: '#31A59C',
  },

  shadows: {
    whiteText: {
      textShadowColor: 'rgba(0,0,0, 0.33)',
      textShadowOffset: { width: 0, height: 1 },
      textShadowRadius: 2,
    },
    card: {
      ...Platform.select({
        ios: {
          shadowColor: 'rgb(51,51,51)',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.18,
          shadowRadius: 3,
        },
        android: {

        },
      })
    }
  }
}