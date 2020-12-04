import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const DashboardScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={{fontFamily: 'poppins-regular'}}>The Dashboard screen!</Text>
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

export default DashboardScreen;