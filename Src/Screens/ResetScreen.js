import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../Components/CustomInput'
import { ALERT_TYPE, Toast, AlertNotificationRoot } from 'react-native-alert-notification'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomButton from '../Components/CustomButton'

const ResetScreen = ({navigation}) => {

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Function to handle password reset
    const handleResetPassword = () => {
        // Check if both fields are filled
        if (!password || !confirmPassword) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Validation Error',
                textBody: 'Please Create Your New Password',
            });
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Password Mismatch',
                textBody: 'Passwords do not match. Please try again.',
            });
            return;
        }

        if (password.length < 6) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Validation Error',
                textBody: 'Your Password is Too Short',
            });
            return;
        }



        // Password reset successful
        Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Password Reset Successful',
            textBody: 'Your password has been reset successfully.',
        });

        // Navigate to the Login screen after a delay
        setTimeout(() => {
            navigation.navigate('SignInScreen');
        }, 2000); // 2-second delay to let the user see the success message
    };

    return (
        <AlertNotificationRoot>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                    <ImageBackground source={require('../Assests/bg2.png')} style={styles.imgbg}>

                        <Text style={styles.HeadName}>
                            Create New Password
                        </Text>
                        <Text style={styles.text}>
                            New password must be different from {'\n'} previously used password
                        </Text>
                        <View style={{ marginTop: hp(4) }}>
                            <Text style={styles.label}>
                                Email
                            </Text>
                            <View>
                                <Image source={require('../Assests/padlock.png')} style={styles.Icon} />
                                <CustomInput placeholder={'Enter Your Password'} value={password} setValue={(text) => setPassword(text)} secureTextEntry={true} style={styles.input} />
                            </View>

                            <Text style={styles.label}>
                                Password
                            </Text>
                            <View>
                                <Image source={require('../Assests/padlock.png')} style={styles.Icon} />
                                <CustomInput placeholder={'Confirm Your Password'} value={confirmPassword} setValue={(text) => setConfirmPassword(text)} secureTextEntry={true} style={styles.input} />
                            </View>
                        </View>

                        <CustomButton
                            title="Reset Password"
                            onPress={handleResetPassword}
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

export default ResetScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9d9d9',
        flex: 1,
        alignItems: 'center'
    },
    imgbg: {
        height: hp(100),
        width: wp(100),
        padding: 10,
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
    label: {
        marginTop: hp(2),
        paddingLeft: wp(2),
        fontWeight: 'bold'
    },
    Icon: {
        height: hp(2.5),
        width: wp(5.2),
        position: 'absolute',
        left: 15,
        top: 29,
        zIndex: 10
    },
    button: {
        height: hp(7),
        backgroundColor: '#316FF6',
        borderRadius: 10,
        justifyContent: 'center'
    },
    textlogin: {
        textAlign: 'center',
        color: 'azure',
        fontSize: hp(2.5),
        fontWeight: 'bold',
    },
    Image: {
        height: hp(45),
        width: wp(90),
        marginVertical: hp(2),
        alignSelf: 'center',
    },
})
