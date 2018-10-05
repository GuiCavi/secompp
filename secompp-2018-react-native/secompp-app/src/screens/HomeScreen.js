import React, { Component, Fragment } from 'react';
import { View, Platform, ScrollView, Image } from 'react-native';

import {
  Text,
  Button,
} from '../components';

import Colors from '../theme/colors';

import {
  cursos,
  loadImageFromServer,
} from '../../assets/data/server';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const classes = cursos.map(curso => (
      <Card key={curso._id} elevation={3} style={{ width: 196, height: 356, marginRight: 8 }}>
        <Banner source={loadImageFromServer(curso.image)} height={131} style={{ borderRadius: 1, borderTopLeftRadius: 5, borderTopRightRadius: 5 }} />
 
        <View style={{ flex: 1, padding: 8 }}>
          <View style={{ flex: 1 }}>
            <Text numberOfLines={1} fontWeight="bolder">{curso.title}</Text>
            <Text numberOfLines={2} style={{ marginTop: 8 }}>{curso.authors}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
            {
              curso.tags.map(tag => <Badge key={tag} color={Colors.badgeColors.color1} text={tag} />)
            }
          </View>

          <View>
            <Button style={{ alignSelf: 'flex-end', paddingHorizontal: 8, paddingVertical: 4, marginVertical: 0 }}>
              <Text size={16} color="white">Inscrever-se</Text>
            </Button>
          </View>
        </View>
      </Card>
    ));

    return (
      <ScrollView style={{ backgroundColor: '#f7f7f7', flex: 1, padding: 16 }}>
        <Text size={25} fontWeight="bolder">Minicursos</Text>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginBottom: 16 }}>
          {classes}
        </ScrollView>

        <Text size={25} fontWeight="bolder">Palestras</Text>
      </ScrollView>
    );
  }
}

class Badge extends Component {
  render() {
    return (
      <View style={{ paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, marginVertical: 4, marginRight: 4, backgroundColor: this.props.color, alignSelf: 'flex-start' }}>
        <Text color="white" size={12}>{this.props.text}</Text>
      </View>
    );
  }
}

class Banner extends Component {
  render() {
    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius,
      borderRadius,
      ...style,
    } = this.props.style;

    return (
      <View style={{ overflow: 'hidden', borderRadius, borderTopLeftRadius, borderTopRightRadius, borderBottomLeftRadius, borderBottomRightRadius, }}>
        <Image source={this.props.source} style={[{ width: '100%', height: this.props.height, }, style]} />
      </View>
    );
  }
}

Banner.defaultProps = {
  style: {}
}

class Card extends Component {
  render() {
    const { elevation, style, ...otherProps } = this.props;
    const defaultStyle = {
      backgroundColor: 'white',
      // padding: 8,
      borderRadius: 5,
      marginVertical: 8,
      // marginHorizontal: 8,
      alignSelf: 'flex-start',
    };

    if (Platform.OS === 'android') {
      return (
        <View elevation={elevation} style={[{  }, defaultStyle, style]} {...otherProps}>
          {this.props.children}
        </View>
      );
    }

    if (elevation === 0) {
      return (
        <View style={style} {...otherProps}>
          {this.props.children}
        </View>
      );  
    }

    const iosShadowElevation = {
      shadowOpacity: 0.0015 * elevation + 0.18,
      shadowRadius: 0.54 * elevation,
      shadowOffset: {
        height: 0.6 * elevation,
      },
    };

    return (
      <View style={[defaultStyle, iosShadowElevation, style]} {...otherProps}>
        {this.props.children}
      </View>
    );
  }
}

export default HomeScreen;
