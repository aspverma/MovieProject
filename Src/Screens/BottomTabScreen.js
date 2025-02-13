import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import HomeScreen from './HomeScreen';
import TicketScreen from './TicketScreen';
import SearchScreen from './SearchScreen';
import UserAccountScreen from './UserAccountScreen';
import SeatBookingScreen from './SeatBookingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: [styles.tabBarStyle], // Custom tab bar style
                tabBarActiveTintColor: '#fff', // Active tab color
                tabBarInactiveTintColor: '#888', // Inactive tab color
                headerShown: false, // Hide header
                tabBarLabelStyle: [styles.tabLabel]
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={[
                                styles.iconContainer,
                                focused && styles.activeTabBackground,
                            ]}
                        >
                            <Image
                                style={[styles.tabIcon, { tintColor: focused ? '#fff' : '#888' }]}
                                source={require('../Assests/home.png')}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={[
                                styles.iconContainer,
                                focused && styles.activeTabBackground,
                            ]}
                        >
                            <Image
                                style={[styles.tabIcon, { tintColor: focused ? '#fff' : '#888' }]}
                                source={require('../Assests/search.png')}
                            />
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="Ticket"
                component={TicketScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={[
                                styles.iconContainer,
                                focused && styles.activeTabBackground,
                            ]}
                        >
                            <Image
                                style={[styles.tabIcon, { tintColor: focused ? '#fff' : '#888' }]}
                                source={require('../Assests/ticket.png')}
                            />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="User"
                component={UserAccountScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={[
                                styles.iconContainer,
                                focused && styles.activeTabBackground,
                            ]}
                        >
                            <Image
                                style={[styles.tabIcon, { tintColor: focused ? '#fff' : '#888' }]}
                                source={require('../Assests/user.png')}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabScreen;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#132639', // Black background
        height: hp(9), // Adjust height for better visibility
        borderTopLeftRadius: 20, // Rounded corners
        borderTopRightRadius: 20,
        position: 'absolute', // Floating tab bar
        shadowColor: '#000', // Shadow for depth
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    tabLabel: {
        fontWeight: '700',
        fontSize: hp(1.5),
        marginVertical: hp(1)
    },
    tabIcon: {
        height: hp(3.5),
        width: wp(7),
        resizeMode: 'contain',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: hp(1.5),
    },
    activeTabBackground: {
        backgroundColor: '#FF5733', // Golden background for active tab
        borderRadius: wp(6), // Fully rounded
        padding: wp(2), // Padding inside the active circle
    },
});
