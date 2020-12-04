import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TabView = props => {
    const [isClicked, setIsClicked] = useState(props.tabs.length - 1);

    const onPressTab = (index) => {
        setIsClicked(index);
    }

    return (
        <View style={styles.tabViewContainer}>
            <View style={styles.container}>
                {   
                    props.tabs.map((item, index) => {
                        let tabStyle = [];
                        let textStyle = [];
                        let underlineStyle = [];
                        let underlineText = [];
                        if(index === isClicked) {
                            tabStyle.push({backgroundColor: '#0DE27E'});
                            textStyle.push({color: 'white'});
                            underlineText.push({color: 'black'})
                            underlineStyle.push({marginTop: -13, backgroundColor: '#0DE27E', height: 3});
                        }
                        return (
                            <View key={index}>
                                <TouchableOpacity 
                                    style={[styles.tabLabelContainer, item.underline ? null : tabStyle, item.underline ? {width: 100, alignItems: 'center'} : null]}
                                    onPress={() => onPressTab(index)}
                                >
                                    <Text style={[styles.tabText, item.underline ? underlineText : textStyle]}>
                                        {item.nameLabel}
                                    </Text>
                                    
                                </TouchableOpacity>
                                <View style={[item.underline ? underlineStyle : null]}></View>
                            </View>
                        );
                    })
                }
            </View>
            { props.tabs[isClicked].component }
        </View>
    );
}

const styles = StyleSheet.create({
    tabViewContainer: {
        width: '100%',
        alignItems: 'center'
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    tabLabelContainer: {
       margin: 5,
       padding: 5,
       paddingHorizontal: 10,
       borderRadius: 13
    },
    tabText: {
        color: 'black',
        fontFamily: 'poppins-regular',
        fontSize: 12
    }
});

export default TabView;