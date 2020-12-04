import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Group from '../assets/icons/Group';

const Card = props => {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                { Group() }
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.nameText}>{props.name}</Text>
                <Text style={styles.dateText}>{props.date}</Text>
                <Text style={styles.hourText}>{props.hours}</Text>
                <Text style={styles.dayText}>{props.day}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: '80%',
        height: 100,
        backgroundColor: 'white',
        borderRadius: 13,
        flexDirection: 'row'
    },
    leftContainer: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rightContainer: {
        marginTop: 13,
        width: '50%',
        alignItems: 'flex-start'
    },
    nameText: {
        color: '#C5C7C9',
        fontSize: 9,
        fontFamily: 'poppins-regular'
    },
    dateText: {
        marginTop: 5,
        color: '#0DE27E',
        fontSize: 9,
        fontFamily: 'poppins-bold'
    },
    hourText: {
        fontSize: 7,
        color: '#929C9E',
        fontFamily: 'poppins-regular'
    },
    dayText: {
        fontSize: 14,
        fontFamily: 'poppins-bold',

    }
});

export default Card;