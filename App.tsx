import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import MainStack from './src/navigation/MainStack';
import { Colors } from 'global/Index';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <MainStack/>
      </SafeAreaView>
    </NavigationContainer>
  );
}
export default App;
