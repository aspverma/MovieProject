import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import MovieDetailsScreen from './MovieDetailsScreen'
import SeatBookingScreen from './SeatBookingScreen'
import BottomTabScreen from './BottomTabScreen'
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen'
import ForgotScreen from './ForgotScreen';
import OTPScreen from './OtpScreen';
import ResetScreen from './ResetScreen';
import SignLoginScreen from './SignLoginScreen';
import PlayingMovies from './PlayingMovies';
import PersonScreen from './PersonScreen';
import UpdateProfileScreen from './UpdateProfileScreen'
import UserAccountScreen from './UserAccountScreen';
import SearchDetails from './SearchDetails'
import TrendingDetailsScreen from './TrendingDetailsScreen'
import TicketScreen from './TicketScreen';
import CarouselComing from '../Components/CarouselComing';
import CarouselDetailScreen from './CarouselDetailScreen'
import PaymentScreen from './PaymentScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (

    <Stack.Navigator>
      {/* <Stack.Screen name="SplashScreen" component={SplashScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name="SignInScreen" component={SignInScreen}
        options={{ animation: 'slide_from_right', headerShown: false }} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen}
        options={{ animation: 'slide_from_right', headerShown: false }} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen}
        options={{ animation: 'slide_from_right', headerShown: false }} />
      <Stack.Screen name="OTPScreen" component={OTPScreen}
        options={{ animation: 'slide_from_right', headerShown: false }} />
      <Stack.Screen name="ResetScreen" component={ResetScreen}
        options={{ animation: 'slide_from_right', headerShown: false }} />
      <Stack.Screen name="SignLoginScreen" component={SignLoginScreen}
        options={{ animation: 'slide_from_right', headerShown: false }} /> */}
      {/* // Register PlayingMovies screen */}
      <Stack.Screen name="BottomTabScreen" component={BottomTabScreen}
        options={{ headerShown: false }} />
      <Stack.Screen name="SeatBookingScreen" component={SeatBookingScreen}
        options={{ animation: 'slide_from_right', headerShown: false }} />
      <Stack.Screen name="PlayingMovies" component={PlayingMovies} options={{ headerShown: false }} />
      <Stack.Screen name="PersonScreen" component={PersonScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="UpdateProfileScreen" component={UpdateProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="UserAccountScreen" component={UserAccountScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SearchDetails" component={SearchDetails} options={{ headerShown: false }} />
      <Stack.Screen name="TrendingDetailsScreen" component={TrendingDetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="TicketScreen" component={TicketScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CarouselDetailScreen" component={CarouselDetailScreen} options={{ headerShown: false }} />
<Stack.Screen name ="CarouselComing" component={CarouselComing} options={{ headerShown: false }} />
<Stack.Screen name ="PaymentScreen" component={PaymentScreen} options={{ headerShown: false }} />

    </Stack.Navigator>

  )
}

export default Navigation

const styles = StyleSheet.create({})