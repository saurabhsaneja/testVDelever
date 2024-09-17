import React from "react";
import { View, StyleSheet, Text } from "react-native";
import MoreImage from '../assets/images/more.svg'
import { getInterFont, getSFProDisplayFont } from "../helpers";

const Heading = ({ title, style = {} }) => {
    return (
        <View style={[styles.headingContainer, style]} >
            <Text style={styles.heading} >{title}</Text>
            <MoreImage />
        </View>
    )
}

export default Heading

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    heading: {
        fontSize: 14,
        // fontFamily: getInterFont('BO'),
        fontFamily: getSFProDisplayFont('BL'),
        color: 'black'
    }
})