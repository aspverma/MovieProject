import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './Src/Screens/Navigation'
import { NavigationContainer } from '@react-navigation/native'


const App = () => {
  return (

    <NavigationContainer>
       <Navigation/>
     </NavigationContainer>

  )
}

export default App

const styles = StyleSheet.create({})