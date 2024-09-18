//react components
import React from 'react';
//stack
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//global
import { ScreenNames } from 'global/Index';
//screens
import Home from '../screens/Home';
import PetCare from '../screens/PetCare';

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
      <Stack.Screen name={ScreenNames.PET_CARE} component={PetCare} />
    </Stack.Navigator>
  );
};

export default MainStack;