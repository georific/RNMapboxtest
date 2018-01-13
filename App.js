import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapboxMap from './Map';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('MapPage')}
      title="Go to map"
    />
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  MapPage: {
    screen: MapboxMap,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RootNavigator;
