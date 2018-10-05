import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { BottomNavigation } from 'react-native-paper';

import {
  FeedScreen,
  LoginScreen,
  HomeScreen,
} from './screens';
import {
  LinearIcon,
  Logo,
} from './components';

/**
 * Home
 */
const HomeRoutes = {
  Home: HomeScreen,
};

const HomeConfig = {
  headerMode: 'none',
};

const HomeStack = createStackNavigator(HomeRoutes, HomeConfig);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarColor: 'white',
  tabBarIcon: ({ tintColor }) => (<LinearIcon name='home' color={tintColor} size={20} />)
};
//********************************************************************************

/**
 * Feed
 */
const FeedRoutes = {
  Feed: FeedScreen,
};

const FeedConfig = {
  headerMode: 'none',
};

const FeedStack = createStackNavigator(FeedRoutes, FeedConfig);

FeedStack.navigationOptions = {
  tabBarLabel: 'Feed',
  tabBarColor: 'white',
  tabBarIcon: ({ tintColor }) => (<LinearIcon name='heart-pulse' color={tintColor} size={20} />)
};
//********************************************************************************

/**
 * Auth
 */
const AuthRoutes = {
  Auth: LoginScreen,
};

const AuthConfig = {
  headerMode: 'none',
};

const AuthStack = createStackNavigator(AuthRoutes, AuthConfig);
//********************************************************************************

/**
 * Dashboard Tabs
 */
const DashboardTabsRoutes = {
  HomeStack,
  FeedStack,
};

const DashboardTabsConfig = {
  shifting: true,
  activeColor: 'black',
  inactiveColor: 'lightgrey',
};

const DashboardTabs = createMaterialBottomTabNavigator(DashboardTabsRoutes, DashboardTabsConfig);

DashboardTabs.navigationOptions = {
  headerTitle: () => (<Logo />),
}
//********************************************************************************

export default createStackNavigator({
  AuthStack,
  App: createStackNavigator({
    DashboardTabs
  }, {
    headerLayoutPreset: 'center',
    navigationOptions: () => ({
      // headerRight: <LinearIcon name="earth" />
      headerStyle: {
        borderBottomColor: 'transparent',
        elevation: 0,
      }
    }),
  }),
}, {
  // initialRouteName: 'App',
  headerMode: 'none',
})