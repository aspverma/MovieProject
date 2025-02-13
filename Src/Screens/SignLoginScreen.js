import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomButton from '../Components/CustomButton'


const SignLoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../Assests/bg2.png')} style={styles.imgbg}>
            <Image source={require('../Assests/splash.png')} style={styles.img} />

            <CustomButton
                title="Sign In"
                onPress={() => navigation.navigate('SignInScreen')}
                backgroundColor="#FF5733"
                textColor="#FFFFFF"
                style={{ width: wp(95), marginTop: hp(5), }}
            />
            <CustomButton
                title="Sign Up"
                onPress={() =>navigation.navigate('SignUpScreen')}
                // backgroundColor="#FF5733"
                textColor="#FFFFFF"
                style={{ width: wp(95), marginTop: hp(5), backgroundColor: '#2A2F4F', borderWidth: 1, borderColor: '#FF5733' }}
            />
            </ImageBackground>
        </View>
    )
}

export default SignLoginScreen

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
        marginVertical: hp(2),

    },
    imgbg:{
        height:hp(100),
        width:wp(100),
    }

})