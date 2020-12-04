import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const MessageScreen = props => {
    return (
        <View style={styles.container}>
            <Text style={{fontFamily: 'poppins-regular'}}>The MessageScreen screen!</Text>
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

export default MessageScreen;