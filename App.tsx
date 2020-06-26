import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screen/HomeScreen';
import { createAppContainer } from 'react-navigation';
import AddBlogScreen from './src/screen/AddBlogScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Test: AddBlogScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
);

export default createAppContainer(navigator);