import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,ImageBackground } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../Components/CustomButton';

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../Assests/bg1.png')} style={styles.imgbg}>

        <Image source={require('../Assests/splash.png')} style={styles.img} />
        <Text style={styles.text}>
          watch your favorite movies or series {'\n'}
          on only one platform you can watch {'\n'}
          it any time any where
        </Text>
        <CustomButton
                title="Get Started"
                onPress={() =>navigation.navigate('SignLoginScreen')}
                backgroundColor="#FF5733"
                textColor="#FFFFFF"
                style={{ width: wp(95), marginTop: hp(5), }}
            />
      </ImageBackground>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#2A2F4F',
    alignItems:'center'

  },
  img: {
    height: hp(40),
    width: wp(90),
    alignSelf: 'center',
    borderRadius: 20,
    // marginVertical: hp(7),

  },
  text: {
    fontSize: hp(2),
    color: '#D2D2D2',
    textAlign: 'center',
    // marginTop: hp(10),
    fontWeight: '500',
  },
  buttontext: {
    color: 'azure',
    fontSize: hp(2.5),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFB801',
    height: hp(7),
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: hp(15)
  },
  imgbg: {
    height: hp(100),
    width: wp(100),
  }


})