import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Card from '../../Card';

const AllFixtures = props => {
    return (
        <View style={styles.container}>
            <Card 
                name="Tuesday Night PC"
                date="21/04/2020"
                hours="22:00-23:00"
                day="Tuesday"
            />
            <Card
                name="Geek Football"
                date="06/06/2020"
                hours="22:00-23:00"
                day="Tuesday"
            />
            <Card 
                name="Geek Football"
                date="06/06/2020"
                hours="22:00-23:00"
                day="Tuesday"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    }
});

export default AllFixtures;