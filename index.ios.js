/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import styles from './styles/main'
import {
  AppRegistry,
  StyleSheet,
  View,
  MapView,
} from 'react-native';

export default class proyect extends Component {
  render() {
    return (
      <View>
        <MapView style={{height: 200, margin: 80}} showsUserLocation={true} scrollEnabled={true}/>
      </View>
    );
  }
}
AppRegistry.registerComponent('proyect', () => proyect);
