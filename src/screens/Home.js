//react components
import React, { useEffect, useRef, useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, useWindowDimensions, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
//third parties
import { ScreenNames } from '../global/Index';
import { getSFProDisplayFont } from '../helpers';
import Button from '../components/Button';
import MyTextInput from '../components/MyTextInput';

const Home = ({ navigation }) => {
  //UI
  return (
    <ScrollView contentContainerStyle={styles.container} >
      <Text style={styles.username}>Welcome</Text>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // alignItems: 'center'
  },
  mainView: {
    width: '90%',
    alignSelf: 'center'
  },
})