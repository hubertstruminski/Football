import React from 'react';
import {
    createAppContainer,
    createStackNavigator,
    createBottomTabNavigator,
  } from 'react-navigation';
import ProfileScreen from '../components/ProfileScreen';
import FootballScreen from '../components/FootballScreen';
import MessageScreen from '../components/MessageScreen';
import PlayScreen from '../components/PlayScreen';
import DashboardScreen from '../components/DashboardScreen';
import SvgHome from '../assets/icons/14';
import SvgProfile from '../assets/icons/13';
import SvgMessage from '../assets/icons/12';
import SvgFootball from '../assets/icons/Football';
import SvgGamepad from '../assets/icons/Gamepad';

const ProfileStackNavigator = createStackNavigator({
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            header: null
        }
    }
});

const FootballStackNavigator = createStackNavigator({
    FootballScreen: {
        screen: FootballScreen,
        navigationOptions: {
            header: null
        }
    }
});

const MessageStackNavigator = createStackNavigator({
    MessageScreen: {
        screen: MessageScreen,
        navigationOptions: {
            header: null
        }
    }
});

const PlayStackNavigator = createStackNavigator({
    PlayScreen: {
        screen: PlayScreen,
        navigationOptions: {
            header: null
        }
    }
});

const DashboardStackNavigator = createStackNavigator({
    DashboardScreen: {
        screen: DashboardScreen,
        navigationOptions: {
            header: null
        }
    }
});

const BottomTabNavigator = createBottomTabNavigator({
    Dashboard: {
        screen: DashboardStackNavigator,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => {
                return SvgHome(tintColor);
            }
        }
    },
    Message: {
        screen: MessageStackNavigator,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => {
                return SvgMessage(tintColor);
            }
        }
    },
    Football: {
        screen: FootballStackNavigator,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => {
                return SvgFootball(tintColor);
            }
        }
    },
    Play: {
        screen: PlayStackNavigator,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => {
                return SvgGamepad(tintColor);
            }
        }
    },
    Profile: {
        screen: ProfileStackNavigator,
        navigationOptions: {
            tabBarIcon: ({focused, tintColor}) => {
                return SvgProfile(tintColor);
            }
        }
    }
}, {
    initialRouteName: 'Profile',
    tabBarOptions: {
        activeTintColor: '#0DE27E',
        inactiveTintColor: '#EEEEEE',
        showLabel: false
    }

});

export default createAppContainer(BottomTabNavigator);



