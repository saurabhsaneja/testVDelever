import React from "react"
import { View, ScrollView, Text, TouchableOpacity, useWindowDimensions, StyleSheet, TextInput, Image } from 'react-native'
import { getSFProDisplayFont, popularServices } from "../helpers"
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
import RightTopImage from "../assets/images/rightTop.svg";
import LeftBottomImage from "../assets/images/leftBottom.svg";
import Heading from "../components/Heading";
import RatingsLeftImage from "../assets/images/ratingsLeft.svg";
import Bone1Image from "../assets/images/bone1.svg";
import Bone2Image from "../assets/images/bone2.svg";
import EditIconImage from "../assets/images/editIcon.svg";
import GroomerImage from "../assets/images/groomer.svg";
import GroomerLeftImage from "../assets/images/groomerLeft.svg";
import GroomerRightImage from "../assets/images/groomerRight.svg";

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
        <TextInput placeholder='What are you looking for?' placeholderTextColor='#FF6694' style={[styles.input, { height: height * 46 / 1087 }]} />
      </View>
      <FilterImage />
    </View>
  )
  const Bones = () => {
    return (
      <View style={styles.bonesRow}>
        <Bone1Image style={styles.boneStyle} />
        <Bone1Image style={styles.boneStyle} />
        <Bone1Image style={styles.boneStyle} />
        <Bone1Image style={styles.boneStyle} />
        <Bone2Image style={styles.boneStyle} />
      </View>
    )
  }
  const SingleServiceProvider = () => (
    <View style={styles.providerContainer} >
      <View style={styles.providerRow}>
        <Image source={{ uri: personImage }} style={{ width: 58 / 390 * width, height: 58 / 390 * width, borderRadius: (58 / 390 * width) / 2 }} />
        <View style={{ marginLeft: 20, width: '70%' }} >
          <Text style={styles.name} >Rohit Singhania</Text>
          <Text style={styles.desc} >Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.</Text>
          <TouchableOpacity style={[styles.knowButton, { width: 66 / 390 * width }]}>
            <Text style={styles.knowButtonText} >Know More</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rightImage} >
        <RightTopImage />
      </View>
      <View style={styles.leftImage} >
        <LeftBottomImage />
      </View>
    </View>
  )
  const ServiceProviders = () => {
    return (
      <View style={{ marginTop: 20 }} >
        <Heading title='Recommended for you' />
        <SingleServiceProvider />
        <SingleServiceProvider />
      </View>
    )
  }
  const SingleRating = () => (
    <View style={[styles.ratingsContainer, { width: 352 / 390 * width, }]}>
      <View style={styles.ratingsRow}>
        <View style={{ paddingLeft: 20, width: '60%' }} >
          <Text style={styles.name}>Pooja Jain</Text>
          <Bones />
          <Text style={[styles.desc, { marginTop: 5 }]} >Lorem ipsum dolor sit amet consectetur. Eget commodo ipsum.</Text>
        </View>
        <Image source={{ uri: personImage }} style={{ width: 100 / 390 * width, height: 100 / 390 * width }} />
      </View>
      <View style={styles.leftImage} >
        <RatingsLeftImage />
      </View>
    </View>
  )
  const NumReviews = () => (
    <View style={styles.numReviewsContainer} >
      <Text style={styles.reviewsText}>13 Reviews</Text>
      <View style={styles.numReviewsRightContainer} >
        <Text style={styles.reviewsText}>WRITE A REVIEW</Text>
        <EditIconImage style={{ marginLeft: 10 }} />
      </View>
    </View>
  )
  const Ratings = () => {
    return (
      <View style={{ marginTop: 20 }} >
        <Heading title='Ratings' />
        <NumReviews />
        <SingleRating />
        <SingleRating />
      </View>
    )
  }
  const Dots = () => {
    return (
      <View style={[styles.animalsRow, { alignSelf: 'center', marginTop: 10 }]}>
        <View style={styles.darkDot} />
        <View style={styles.lightDot} />
        <View style={styles.lightDot} />
      </View>
    )
  }
  const Groomer = () => (
    <LinearGradient colors={['#fcb0b0', '#f8c1d4']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={[styles.groomerGradient, { height: 150 / 1087 * height }]}>
      <View>
        <GroomerLeftImage />
        <View style={{ position: 'absolute', left: 20, top: '40%' }} >
          <Text style={styles.bookNow} >BOOK{'\n'}NOW!</Text>
          <Text style={styles.minus} >-20%</Text>
        </View>
      </View>
      <View style={{ zIndex: 20, alignItems: 'center' }} >
        <Text style={styles.allNew}>All-New{'\n'}Groomers{'\n'}in Town!</Text>
        <Dots />
      </View>
      <View >
        <View>
          <GroomerImage style={{ position: 'absolute', left: 20, top: '40%', zIndex: 1 }} />
        </View>
        <GroomerRightImage />
      </View>
    </LinearGradient>
  )
  const SinglePopularService = () => {
    return (
      <View></View>
    )
  }
  const PopularServices = () => {
    return (
      <View style={{ marginTop: 20 }} >
        <Heading title='Popular Services' />
        <View>
          {popularServices?.map((pplr, index) => {
            console.log('pplr', pplr?.image);
            return (
              <View key={index?.toString()} >
                <Text style={styles.hello} >Hello, </Text>
                <Text style={styles.fancy} >Fancy for a wash today!</Text>
                {/* {pplr.image} */}
              </View>
            )
          }
          )}
        </View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <LinearGradient colors={['#fcb0b0', '#f8c1d4']} start={{ x: 1, y: 0 }} end={{ x: 0, y: 1 }} style={[styles.headerGradient]}>
          <Header />
        </LinearGradient>
        <View style={styles.whiteContainer}>
          <MyTextInput />
          <Groomer />
          <PopularServices />
          <ServiceProviders />
          <Ratings />
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
  providerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFE7EA',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15
  },
  knowButton: {
    backgroundColor: '#CF76DD',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  knowButtonText: {
    fontSize: 10,
    fontFamily: getSFProDisplayFont('BL'),
    color: '#fff',
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
    zIndex: -10
  },
  leftImage2: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  providerRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontSize: 14,
    fontFamily: getSFProDisplayFont('BO'),
    color: 'black'
  },
  desc: {
    fontSize: 10,
    fontFamily: getSFProDisplayFont('M'),
    color: 'black',
    marginTop: -5
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // padding: 20,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#FFCCD2'
  },
  ratingsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  bonesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  boneStyle: { marginRight: 4 },
  reviewsText: {
    fontSize: 12,
    color: '#FF6694',
    fontFamily: getSFProDisplayFont('M')
  },
  numReviewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  numReviewsRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  groomerGradient: {
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  allNew: {
    fontSize: 18,
    fontFamily: getSFProDisplayFont('BL'),
    lineHeight: 21,
    color: 'black'
  },
  darkDot: {
    height: 8,
    width: 8,
    borderRadius: 8 / 2,
    backgroundColor: '#FF6694',
    marginRight: 4
  },
  lightDot: {
    height: 8,
    width: 8,
    borderRadius: 8 / 2,
    backgroundColor: '#FFD7E5',
    marginRight: 4
  },
  bookNow: {
    fontSize: 15,
    lineHeight: 17.9,
    fontFamily: getSFProDisplayFont('H'),
    color: '#FF6694'
  },
  minus: {
    fontSize: 14,
    fontFamily: getSFProDisplayFont('BO'),
    color: 'black'
  },
})


const personImage = `https://images.unsplash.com/photo-1489362864900-696f8d15ae34?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`