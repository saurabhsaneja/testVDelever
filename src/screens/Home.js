//react components
import React, { useEffect, useRef, useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, useWindowDimensions, ScrollView, TouchableOpacity, ToastAndroid, StatusBar, TextInput, FlatList } from 'react-native';
//third parties
import { ScreenNames } from '../global/Index';
import { categoriesData, getSFProDisplayFont } from '../helpers';
import Button from '../components/Button';
import MyTextInput from '../components/MyTextInput';
import LinearGradient from 'react-native-linear-gradient';
import MenuImage from "../assets/images/menu.svg";
import StatusImage from "../assets/images/status.svg";
import CirclesImage from "../assets/images/circles.svg";
import SearchImage from "../assets/images/search.svg";
import Heading from '../components/Heading';
import SectorHomeFull from '../assets/images/sectorHomeFull.svg';
import SectorHealthcareFull from '../assets/images/sectorHealthcareFull.svg';

import RecommendedRightLight from '../assets/images/recommendedRightLight.svg';
import RecommendedRightDark from '../assets/images/recommendedRightDark.svg';
import RecommendedLeftDark from '../assets/images/recommendedLeftDark.svg';
import RecommendedLeftLight from '../assets/images/recommendedLeftLight.svg';

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
      <View style={[styles.welcomeContainer, { width: 296 / 390 * width, paddingVertical: 20, marginTop: -(height * 94 / 1087) }]}>
        <CirclesImage style={styles.circles} />
        <Text style={styles.welcomeText} >Welcome,</Text>
        <Text style={styles.findYourText} >Find Your{'\n'}Dream Sector!</Text>
        <View style={[styles.textInputContainer, { width: 248 / 390 * width, height: height * 46 / 1087 }]}>
          <SearchImage />
          <TextInput placeholder='What are you looking for?' placeholderTextColor='#959595' style={[styles.input, { height: height * 46 / 1087 }]} />
        </View>
      </View>
    )
  }

  const Categories = () => {
    return (
      <View style={{ marginTop: 10 }} >
        <Heading title='Explore Categories' />
        {categoriesData?.map((catRow, rowIndex) =>
          <View style={styles.categoryRow} key={rowIndex?.toString} >
            {catRow?.map((catColumn, columnIndex) => {
              return (
                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={catColumn?.colors} style={styles.categoryBox} key={catColumn?.id} >
                  {catColumn?.image}
                  <Text style={styles.categoryText} >{catColumn?.title}</Text>
                </LinearGradient>
              )
            })}
          </View>
        )}
      </View>
    )
  }
  const Sectors = () => {
    return (
      <View style={{ marginTop: 20 }} >
        <Heading title='Popular Sectors' />
        <View style={styles.sectorContainer} >
          <SectorHomeFull width={width / 2 - 40} />
          <SectorHealthcareFull width={width / 2 - 40} />
        </View>
      </View>
    )
  }
  const Recommended = () => {
    return (
      <View style={{ marginTop: 20 }} >
        <Heading title='Recommended for you' />
        <View>
          <View style={styles.rightImage} >
            <RecommendedRightDark />
            <RecommendedRightLight />
          </View>
          <View style={styles.leftImage} >
            <RecommendedLeftDark />
            <RecommendedLeftLight />
          </View>
        </View>
      </View>
    )
  }
  //UI
  return (
    <>
      <StatusBar backgroundColor={'#9766FF'} />
      <ScrollView contentContainerStyle={styles.container} >
        <LinearGradient colors={['#9766FF', '#F7F3FF']} style={[styles.headerGradient, { height: height * 186 / 1087 }]}>
          <Header />
        </LinearGradient>
        <Welcome />
        <View style={styles.mainView}>
          <Categories />
          <Sectors />
          <Recommended />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    padding: 20
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
  },
  textInputContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  input: {
    // fontSize: 12,
    // fontFamily: getSFProDisplayFont('R'),
    // color: 'black',
    // height: '100%',
    marginLeft: 20,
  },
  categoryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  categoryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'red',
    borderRadius: 20,
    marginRight: 10,
    paddingHorizontal: 15
  },
  categoryText: {
    fontSize: 12,
    color: '#333',
    fontFamily: getSFProDisplayFont('M'),
    marginLeft: 10
  },
  sectorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  rightImage: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  leftImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
})