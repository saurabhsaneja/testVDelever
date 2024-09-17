//react components
import React, { useEffect, useRef, useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, useWindowDimensions, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native';
//third parties
import { ScreenNames } from '../global/Index';
import { getSFProDisplayFont } from '../helpers';
import Button from '../components/Button';
import MyTextInput from '../components/MyTextInput';
import LinearGradient from 'react-native-linear-gradient';
import MenuImage from "../assets/images/menu.svg";
import StatusImage from "../assets/images/status.svg";
import CirclesImage from "../assets/images/circles.svg";

const Home = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <MenuImage width={24} height={24} />
        <StatusImage />
      </View>
    )
  }
  const Welcome = () => {
    return (
      <View style={[styles.welcomeContainer, { width: 296 / 390 * width, height: height * 202 / 1087, marginTop: -(height * 94 / 1087) }]}>
        <CirclesImage style={styles.circles} />
        <Text style={styles.welcomeText} >Welcome,</Text>
        <Text style={styles.findYourText} >Find Your{'\n'}Dream Sector!</Text>
      </View>
    )
  }
  //UI
  return (
    <ScrollView contentContainerStyle={styles.container} >
      <LinearGradient colors={['#9766FF', '#F7F3FF']} style={[styles.headerGradient, { height: height * 186 / 1087 }]}>
        <Header />
      </LinearGradient>
      <Welcome />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    width: '90%',
    alignSelf: 'center'
  },
  headerGradient: {
    // 390 * 186 (1087 screen height)
    // height: '100%' * 186 / 1087,
    width: '100%',
    borderBottomRightRadius: 75,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  welcomeContainer: {
    backgroundColor: '#EDFFCE',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 25,
    paddingLeft: 20,
    paddingVertical: 20,
  },
  circles: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  welcomeText: {
    fontSize: 18,
    fontFamily: getSFProDisplayFont('R'),
    color: 'black'
  },
  findYourText: {
    fontSize: 24,
    fontFamily: getSFProDisplayFont('S'),
    color: 'black',
    marginTop: -10
  }
})