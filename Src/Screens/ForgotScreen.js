import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
// import CustomHeading from '../Components/CustomHeading'
import CustomInput from '../Components/CustomInput'
import { AlertNotificationRoot, Toast, ALERT_TYPE } from 'react-native-alert-notification'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomButton from '../Components/CustomButton'



const ForgotScreen = ({navigation}) => {

    const [email, setEmail] = useState();


      // Validation function
      const validate = () => {


        if (!email) {
          Toast.show({
            type: ALERT_TYPE.WARNING,
            title: 'Validation Error',
            textBody: 'Please Enter Registered Email',
          });
          return false;
        }


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          Toast.show({
            type: ALERT_TYPE.WARNING,
            title: 'Invalid Email',
            textBody: 'Please enter a valid email address.',
          });
          return false;
        }


        return true;
      };

      const handleSubmit = () => {
        // Perform validation
        if (validate()) {
          // OTP Sent successfully
          Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'OTP Sent ',
            textBody: 'OTP Sent Successfully on Your Email',
          });
          // Navigate to the Home screen after a delay
          setTimeout(() => {
            navigation.navigate('OTPScreen');
          }, 2000); // 2-second delay to let the user see the success message
        }
      };

    return (
        <AlertNotificationRoot>
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                <ImageBackground source={require('../Assests/bg2.png')} style={styles.imgbg}>
                  
                    <Text style={styles.HeadName}>
                        Forget Password
                    </Text>
                    <Text style={styles.text}>
                        Enter your email address to {'\n'} recieve a verification code
                    </Text>

                    {/* {input field} */}
                    <Text style={styles.label}>
                        Email
                    </Text>
                    <View style={styles.inputicon}>
                        <Image source={require('../Assests/mail.png')} style={styles.Icon} />
                        <CustomInput placeholder={'Enter Your Email'} value={email} setValue={(text) => setEmail(text)} style={styles.input} />
                    </View>
                    {/* {customBotton} */}
                    <CustomButton
                        title="Send"
                        onPress={handleSubmit}
                        backgroundColor="#FF5733"
                        textColor="#FFFFFF"
                        style={{ width: wp(95), marginTop: hp(4), }}
                    />
                </ImageBackground>
            </ScrollView>
        </View>
        </AlertNotificationRoot>
    )
}

export default ForgotScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9d9d9',
        flex: 1,
    },
    imgbg: {
        height: hp(100),
        width: wp(100),
        padding: 10
    },
    HeadName: {
        fontSize: hp(2.5),
        color: '#fff',
        textAlign: 'center',
        marginTop: hp(10),
        fontWeight: 'bold'
    },
    text: {
        fontSize: hp(2),
        textAlign: 'center',
        marginTop: hp(2)
    },
    Icon: {
        height: hp(2.5),
        width: wp(5.2),
        position: 'absolute',
        left: 15,
        top: 29,
        zIndex: 10
    },
    label: {
        marginTop: hp(7),
        paddingLeft: wp(2),
        fontWeight: 'bold'
    },
   
})