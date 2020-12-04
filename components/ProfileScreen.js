import React from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Image, ScrollView} from 'react-native';
import Smiley from '../assets/icons/Smiley';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Menu from '../assets/icons/Menu';
import Manu from '../assets/icons/Manu';
import England from '../assets/icons/England';
import Kick from '../assets/icons/Kick';
import TabView from './TabView';
import OverviewScreen from './tabViewFolder/OverviewScreen';
import ResultsScreen from './tabViewFolder/ResultsScreen';
import InjuriesScreen from './tabViewFolder/InjuriesScreen';
import StatsScreen from './tabViewFolder/StatsScreen';
import FixturesScreen from './tabViewFolder/FixturesScreen';

const ProfileScreen = (props) => {
    return (
        <SafeAreaView style={styles.safeContainer}>
            <StatusBar backgroundColor="white" barStyle='dark-content' />
            <ScrollView alwaysBounceVertical={false} contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.container}>
                    <View style={styles.menuContainer}>
                        <View style={styles.fitContainer}>
                            { Smiley() }
                            <Text style={styles.fitText}>Fit</Text>
                        </View>
                        <TouchableOpacity>
                            { Menu() }
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileContainer}>
                        <View style={{ width: '45%'}}>
                            <View style={styles.imageContainer}>
                                <Image style={{ flex: 1, width: null, height: null, resizeMode: 'cover', borderRadius: 75}} source={require("../assets/icons/person.jpg")} />
                                <View style={styles.editProfileContainer}>
                                    <Text style={styles.editProfileText}>
                                        Edit Profile
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.personDetailsContainer}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={styles.personDetailsText}>John{' '}</Text>
                                <Text style={{fontFamily: 'poppins-regular', fontSize: 20}}>Smith</Text>
                            </View>
                            <View style={styles.jobContainer}>
                                { England() }
                                <Text style={styles.descriptionText}>Defender</Text>
                            </View>
                            <Text style={styles.descriptionText}>I'm the best baller in town -</Text>
                            <View style={styles.teamContainer}>
                                <View style={styles.teamItemContainer}>
                                    { Manu() }
                                    <Text style={styles.teamItemText}>Manchester United</Text>
                                </View>
                                <View style={styles.teamItemContainer}>
                                    <View style={{ marginLeft: 4, marginTop: 4}}>
                                        { Kick() }
                                    </View>
                                    <Text style={{marginLeft: 2, fontFamily: 'poppins-regular', fontSize: 12}}>Left Foot</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.followersContainer}>
                        <View style={styles.followersItemContainer}>
                            <Text style={styles.followNumberText}>567</Text>
                            <Text style={styles.followDescriptionText}>Followers</Text>
                        </View>
                        <View style={styles.followersItemContainer}>
                            <Text style={styles.followNumberText}>32</Text>
                            <Text style={styles.followDescriptionText}>Following</Text>
                        </View>
                        <View style={styles.followersItemContainer}>
                            <Text style={styles.followNumberText}>2500</Text>
                            <Text style={styles.followDescriptionText}>Likes</Text>
                        </View>
                    </View>
                    <TabView 
                        tabs={[
                            { nameLabel: 'Overview', isClicked: false, component: <OverviewScreen />, underline: false},
                            { nameLabel: 'Results', isClicked: false, component: <ResultsScreen />, underline: false},
                            { nameLabel: 'Injuries', isClicked: false, component: <InjuriesScreen />, underline: false},
                            { nameLabel: 'Stats', isClicked: false, component: <StatsScreen />, underline: false},
                            { nameLabel: 'Fixtures', isClicked: false, component: <FixturesScreen />, underline: false}
                        ]}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeContainer: {
        flex: 1
    },  
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        paddingBottom: 20
    },
    menuContainer: {
        marginTop: 25,
        width: '100%',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 45
    },
    fitContainer: {
        borderWidth: 3.5,
        borderColor: '#0DE27E',
        flexDirection: 'row',
        padding: 1,
        width: 115,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fitText: {
        marginLeft: 5, 
        color: '#0DE27E',
        fontFamily: 'poppins-bold'
    },
    descriptionText: {
        color: '#888888', 
        fontFamily: 'poppins-regular',
        fontSize: 12
    },
    profileContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    imageContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: 'white'
    },
    personDetailsContainer: {
        width: '55%',
        marginTop: 30
    },
    editProfileContainer: {
        position: 'absolute',
        bottom: -15,
        backgroundColor: '#0DE27E',
        width: 92,
        padding: 1,
        left: '50%',
        marginLeft: -46,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    editProfileText: {
        color: 'white',
        fontFamily: 'poppins-regular'
    },
    personDetailsText: {
        fontSize: 20,
        fontFamily: 'poppins-bold'
    },
    jobContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    teamContainer: {
        marginTop: 15
    },
    teamItemContainer: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    teamItemText: {
        marginLeft: 5,
        fontFamily: 'poppins-regular',
        fontSize: 12
    },
    followersContainer: {
        marginTop: 10,
        marginBottom: 15,
        backgroundColor: 'white',
        width: '85%',
        height: 65,
        borderRadius: 13,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    followersItemContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    followNumberText: {
        fontSize: 19,
        fontFamily: 'poppins-bold'
    },
    followDescriptionText: {
        color: '#AFBDCB',
        fontSize: 13,
        fontFamily: 'poppins-regular'
    }
});

export default ProfileScreen;