import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const PlayScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={{fontFamily: 'poppins-regular'}}>The PlayScreen screen!</Text>
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

export default PlayScreen;