import React from "react"
import { View, ScrollView, Text, TouchableOpacity, useWindowDimensions, StyleSheet, TextInput } from 'react-native'
import { getSFProDisplayFont } from "../helpers"
import LinearGradient from "react-native-linear-gradient"
import MenuImage from "../assets/images/menu2.svg";
import StatusImage from "../assets/images/status2.svg";
import BellImage from "../assets/images/bell.svg";
import Animal1Image from "../assets/images/animal1.svg";
import Animal2Image from "../assets/images/animal2.svg";
import Animal3Image from "../assets/images/animal3.svg";
import ThreePawsImage from "../assets/images/threePaws.svg";
import TwoPawsImage from "../assets/images/twoPaws.svg";
import SearchImage from "../assets/images/search2.svg";
import FilterImage from "../assets/images/filter.svg";

const PetCare = ({ navigation }) => {
  const { width, height } = useWindowDimensions()

  const Header = () => {
    return (
      <View style={styles.headerContainer}>
        <TwoPawsImage style={styles.twoPawsStyle} />
        <View style={styles.headerIconsRow}>
          <MenuImage width={24} height={24} />
          <StatusImage />
          <View style={styles.bellContainer} >
            <BellImage />
          </View>
        </View>
        <Text style={styles.hello} >Hello, </Text>
        <Text style={styles.fancy} >Fancy for a wash today!</Text>
        <View style={styles.animalsContainer}>
          <ThreePawsImage />
          <View style={styles.animalsRow}>
            <Animal1Image />
            <Animal2Image />
            <Animal3Image />
          </View>
        </View>
      </View>
    )
  }
  const MyTextInput = () => (
    <View style={[styles.textInputContainer, { height: height * 46 / 1087 }]}>
      <View style={styles.textInputLeftContainer}>
        <SearchImage />
        <TextInput placeholder='What are you looking for?' placeholderTextColor='#959595' style={[styles.input, { height: height * 46 / 1087 }]} />
      </View>
      <FilterImage />
    </View>
  )
  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient colors={['#fcb0b0', '#f8c1d4']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={[styles.headerGradient]}>
          <Header />
        </LinearGradient>
        <View style={styles.whiteContainer}>
          <MyTextInput />
        </View>
      </ScrollView>
    </View>
  )
}

export default PetCare

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  headerGradient: {
    // 390 * 186 (1087 screen height)
    // height: '100%' * 186 / 1087,
    width: '100%',
  },
  headerContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  headerIconsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bellContainer: {
    backgroundColor: '#fdd4e6',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  hello: {
    fontSize: 20,
    fontFamily: getSFProDisplayFont('BO'),
    color: '#000'
  },
  fancy: {
    fontSize: 16,
    fontFamily: getSFProDisplayFont('S'),
    color: '#000',
    marginTop: -7
  },
  animalsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  animalsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10
  },
  twoPawsStyle: { position: 'absolute', top: '50%', right: 0 },
  whiteContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -28,
    padding: 20
  },
  textInputContainer: {
    backgroundColor: '#FFEDF2',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%'
  },
  textInputLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    // fontSize: 12,
    // fontFamily: getSFProDisplayFont('R'),
    // color: 'black',
    // height: '100%',
    marginLeft: 20,
  },
})