import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import MainStack from './src/navigation/MainStack';
import { Colors } from 'global/Index';
import colorStore from './src/colorStore';

function App(): React.JSX.Element {
  const { color } = colorStore()
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar backgroundColor={color} />
        <MainStack />
      </SafeAreaView>
    </NavigationContainer>
  );
}
export default App;
