import React from 'react';
import {
    Alert,
    Animated,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Screen1 = () => {
    return <View style={styles.screen1} />;
};

const Screen2 = () => {
    return <View style={styles.screen2} />;
};

export default function HomeScreens({ navigation }) {
    const _renderIcon = (routeName, selectedTab) => {
        let icon = '';

        switch (routeName) {
            case 'Home':
                icon = 'home'; // Valid Ionicons name for the home icon
                break;
            case 'Video':
                icon = 'videocam'; // Valid Ionicons name for the videocam icon
                break;
            case 'Send':
                icon = 'send'; // Valid Ionicons name for the send icon
                break;
            case 'Profile':
                icon = 'user'; // Valid Ionicons name for the profile icon
                break;
            case 'Setting':
                icon = 'settings-outline'
                break;
            // Add cases for other routes/icons as needed
            // default:
            //     icon = 'home'; // Default to home icon for unmatched route names
            //     break;
        }
        return (
            <Ionicons
                name={icon}
                size={25}
                color={routeName === selectedTab ? 'black' : 'gray'}
            />
        );
    };
    const renderTabBar = ({ routeName, selectedTab, navigate }) => {
        return (
            <TouchableOpacity
                onPress={() => navigate(routeName)}
                style={styles.tabbarItem}
            >
                {_renderIcon(routeName, selectedTab)}
            </TouchableOpacity>
        );
    };

    return (
        <CurvedBottomBar.Navigator
            screenOptions={{
                headerShown: false, // Hide the header for all screens
            }}
            type="UP"
            style={styles.bottomBar}
            shadowStyle={styles.shawdow}
            height={55}
            circleWidth={50}
            bgColor="white"
            initialRouteName="Home"
            borderTopLeftRight
            renderCircle={({ selectedTab, navigate }) => (
                <Animated.View style={styles.btnCircleUp}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigate('Send')}
                    >
                        <Ionicons name={'add'} color="#0066FF" size={28} />
                    </TouchableOpacity>
                </Animated.View>
            )}
            tabBar={renderTabBar}
        >
            <CurvedBottomBar.Screen
                name="Home"
                position="LEFT"
                component={() => <Screen1 />}
                options={{ headerShown: false }}
            />
            <CurvedBottomBar.Screen
                name="Video"
                position="LEFT"
                component={() => <Home />}
            />
            <CurvedBottomBar.Screen
                name="Send"
                component={() => <Screen2 />}
                position="CENTER"
            />
            <CurvedBottomBar.Screen
                name="Profile"
                position="RIGHT"
                component={() => <Screen1 />}
            />
            <CurvedBottomBar.Screen
                name="Setting"
                component={() => <Screen2 />}
                position="RIGHT"
            />
        </CurvedBottomBar.Navigator>


    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    shawdow: {
        shadowColor: '#DDDDDD',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
    },
    button: {
        flex: 1,
        justifyContent: 'center',
    },
    bottomBar: {},
    btnCircleUp: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E8E8E8',
        bottom: 18,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,
    },
    imgCircle: {
        width: 30,
        height: 30,
        tintColor: 'gray',
    },
    tabbarItem: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 30,
        height: 30,
    },
    screen1: {
        flex: 1,
        backgroundColor: '#BFEFFF',
    },
    screen2: {
        flex: 1,
        backgroundColor: '#FFEBCD',
    },
});