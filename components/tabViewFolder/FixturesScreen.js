import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TabView from '../TabView';
import AllFixtures from '../tabViewFolder/fixtures/AllFixtures';
import NextGame from '../tabViewFolder/fixtures/NextGame';

const FixturesScreen = props => {
    return (
        <View style={styles.container}>
            <TabView 
                tabs={[
                    { nameLabel: 'All Fixtures', isClicked: false, component: <AllFixtures />, underline: true},
                    { nameLabel: 'Next Game', isClicked: false, component: <NextGame />, underline: true}
                ]}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    }
});

export default FixturesScreen;