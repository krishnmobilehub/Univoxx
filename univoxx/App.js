/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import homeScreen from './Controller/Home'
import FormScreen from './Controller/Form'



const mystack = createStackNavigator({
	Main: { screen: homeScreen },
	FormScreen: { screen: FormScreen },
});

const AppContainer = createAppContainer(mystack);

export default AppContainer;

