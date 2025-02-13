import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ALERT_TYPE, Toast, AlertNotificationRoot, Dialog } from 'react-native-alert-notification';
import { useState } from 'react';
import React from 'react'
import CustomInput from '../Components/CustomInput';
import CheckBox from '@react-native-community/checkbox';
import CustomButton from '../Components/CustomButton';




const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);


    // Toggle checkbox state
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    // Validation function
    const validate = () => {
        if (!email || !password) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Validation Error',
                textBody: 'Please Fill Required Field.',
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
        if (!isChecked) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Validation Error',
                textBody: 'Please check mark Remember me to save your credentials.',
            });
            return false;
        }

        return true;
    };

    const handleSubmit = () => {
        if (validate()) {
            // Show a success message
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Login Successful',
                textBody: 'You are being redirected...',
            });

            // Add a delay of 2 seconds before navigating to the HomeScreen
            setTimeout(() => {
                navigation.navigate('BottomTabScreen');
            }, 1500); // 2000 milliseconds = 2 seconds
        }
    };

    return (
        <AlertNotificationRoot>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                    <ImageBackground source={require('../Assests/bg2.png')} style={styles.imgbg}>
                        <Text style={styles.text}>Hello Welcome Back</Text>
                        <Text style={styles.textbottom}>
                            Welcome back please {'\n'} sign in again
                        </Text>
                        <View style={{ marginTop: hp(4) }}>
                            <Text style={styles.label}>
                                Email
                            </Text>
                            <View>
                                <Image source={require('../Assests/mail.png')} style={styles.Icon} />
                                <CustomInput placeholder={'Enter Your Email'} value={email} setValue={(text) => setEmail(text)} style={styles.input} />
                            </View>

                            <Text style={styles.label}>
                                Password
                            </Text>
                            <View>
                                <Image source={require('../Assests/padlock.png')} style={styles.Icon} />
                                <CustomInput placeholder={'Enter Your Password'} value={password} setValue={(text) => setPassword(text)} style={styles.input} />
                            </View>
                        </View>

                        {/* {remember and forgot text} */}
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(1) }}>
                            <View style={styles.policybox}>
                                <CheckBox
                                    onPress={toggleCheckbox}
                                    value={isChecked}
                                    onValueChange={setIsChecked}
                                    tintColors={{ true: '#FF5733', false: 'gray' }}
                                />
                                <Text style={styles.textpolicy}>Remember me</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('ForgotScreen')}>
                                <Text style={styles.forgottext}>
                                    Forgot Password?
                                </Text>
                            </TouchableOpacity>
                        </View>
                        {/* {button sign in } */}


                        <CustomButton
                            title="Sign In"
                            onPress={handleSubmit}
                            backgroundColor="#FF5733"
                            textColor="#FFFFFF"
                            style={{ width: wp(95), marginTop: hp(4), }}
                        />


                        <Text style={{ color: '#FF5733', textAlign: 'center', marginTop: hp(2.4), fontWeight: "bold" }}>
                            OR
                        </Text>

                        <Text style={{ textAlign: 'center', marginTop: hp(3), fontWeight: "400" }}>
                            ----------------------------  Sign in with  ----------------------------
                        </Text>

                        {/* {icon box} */}

                        <View style={{ flexDirection: 'row', alignSelf: 'center', columnGap: wp(8), marginTop: hp(4) }}>
                            <TouchableOpacity>
                                <Image source={require('../Assests/google.png')} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={require('../Assests/facebook.png')} style={styles.icon} />
                            </TouchableOpacity>
                        </View>

                    </ImageBackground>
                </ScrollView>
            </View>
        </AlertNotificationRoot>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    imgbg: {
        height: hp(100),
        width: wp(100),
        padding: 10
    },
    text: {
        fontSize: hp(2.5),
        color: '#fff',
        textAlign: 'center',
        marginTop: hp(10),
        fontWeight: 'bold'
    },
    textbottom: {
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
        zIndex: 10,
        tintColor:'#FF5733'

    },

    //box style

    forgottext: {
        color: '#FF5733',
        marginTop: hp(1),
    },
    textpolicy: {
        marginTop: hp(1),
        fontSize: hp(2),
        marginBottom: 10,
    },
    policybox: {
        flexDirection: 'row',
    },
    icon: {
        height: hp(2.9),
        width: wp(5.7),
    }

})