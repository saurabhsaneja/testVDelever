import React from "react";
import { StyleSheet, View } from "react-native";
import Home from '../assets/images/Home.svg'
import Home2 from '../assets/images/Home2.svg'
import SearchBottom from '../assets/images/SearchBottom.svg'
import Play from '../assets/images/Play.svg'
import Profile from '../assets/images/Profile.svg'



const BottomTab = ({ screenName = '' }) => {
    return (
        <View style={styles.container} >
            <View style={[styles.homeBox, screenName !== 'Home' ? { backgroundColor: '#FFE7EA' } : null]} >
                {screenName === 'Home' ?
                    <Home />
                    :
                    <Home2 />
                }
            </View>
            <SearchBottom />
            <Play />
            <Profile />
        </View>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 2,
    },
    homeBox: {
        backgroundColor: '#EEE6FF',
        paddingHorizontal: 40,
        paddingVertical: 8,
        borderRadius: 100
    }
})