import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FootballScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={{fontFamily: 'poppins-regular'}}>The FootballScreen screen!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FootballScreen;