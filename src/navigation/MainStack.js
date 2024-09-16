//react components
import React from 'react';
//stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//global
import { ScreenNames } from 'global/Index';
//screens
import Home from '../screens/Home';

const MainStack = () => {
  //variables
  const Stack = createNativeStackNavigator();
  const initialRouteName = ScreenNames.HOME;
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={initialRouteName}>
      <Stack.Screen name={ScreenNames.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default MainStack;