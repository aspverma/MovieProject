import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import React, { useState, useCallback } from 'react';
import { ALERT_TYPE, Toast, AlertNotificationRoot, Dialog } from 'react-native-alert-notification';
import { useFocusEffect } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import CheckBox from '@react-native-community/checkbox';

const SignupScreen = ({ navigation }) => {

    // State variables for input fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Number, setNumber] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    // Toggle checkbox state
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    // Validation function
    const validate = () => {


        if (!name || !email || !password || !Number) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Validation Error',
                textBody: 'Please Fill Required Field.',
            });
            return false;
        }
        // email validation with Regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Invalid Email',
                textBody: 'Please enter a valid email address.',
            });
            return false;
        }

        if (password.length < 6) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Weak Password',
                textBody: 'Password should be at least 6 characters long.',
            });
            return false;
        }

        if (Number.length < 10) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Weak Password',
                textBody: ' Please enter a valid phone number.',
            });
            return false;
        }

        if (!isChecked) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Validation Error',
                textBody: 'Please agree to the Terms & Policy before signing up.',
            });
            return false;
        }

        return true;
    };
    // Handle form submission
    const handleSubmit = () => {
        // Perform validation
        if (validate()) {
            // Account created successfully
            Dialog.show({
                type: ALERT_TYPE.SUCCESS,
                title: 'Account Created',
                textBody: 'Your account has been created successfully.',
            });

            // Navigate to the Home screen after a delay
            setTimeout(() => {
                navigation.navigate('BottomTabScreen');
            }, 2000); // 2-second delay to let the user see the success message
        }
    };


    // Reset input fields when the screen is focused
    useFocusEffect(
        useCallback(() => {
            // Reset state variables
            setName('');
            setEmail('');
            setPassword('');
            setNumber('');
            setIsChecked(false);
        }, [])
    );

    return (
        <AlertNotificationRoot>
            <View style={styles.container}>
                <StatusBar backgroundColor="#FF5733" />
                <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                    <ImageBackground source={require('../Assests/bg2.png')} style={styles.imgbg}>

                        <Text style={styles.HeadName}>Welcome To FlickIt</Text>
                        <Text style={styles.text}>
                            SignUp Below And Start Your {'\n'}Journey And Discover New Movies
                        </Text>

                        {/* {inout fields} */}
                        <View style={{ marginTop: hp(5) }}>
                            <View style={styles.inputicon}>
                                <Image source={require('../Assests/user.png')} style={styles.Icon} />
                                <CustomInput placeholder={'Your Name'} value={name} setValue={setName} style={styles.input} />
                            </View>

                            <View style={styles.inputicon}>
                                <Image source={require('../Assests/mail.png')} style={styles.Icon} />
                                <CustomInput placeholder={'Your Email'} value={email} setValue={setEmail} style={styles.input} />
                            </View>

                            <View style={styles.inputicon}>
                                <Image source={require('../Assests/padlock.png')} style={styles.Icon} />
                                <CustomInput
                                    placeholder={'Your Mobile Number'}
                                    value={Number}
                                    setValue={setNumber}
                                    keyboardType={'numeric'}
                                    style={styles.input}
                                    maxLength={10}
                                />
                            </View>

                            <View style={styles.inputicon}>
                                <Image source={require('../Assests/padlock.png')} style={styles.Icon} />
                                <CustomInput
                                    placeholder={'Create Your Password'}
                                    value={password}
                                    setValue={setPassword}
                                    secureTextEntry
                                    style={styles.input} />
                            </View>
                        </View>

                        <View style={styles.policybox}>
                            <CheckBox
                                onPress={toggleCheckbox}
                                value={isChecked}
                                onValueChange={setIsChecked}
                                tintColors={{ true: '#FF5733', false: 'gray' }}
                            />
                            <Text style={styles.textpolicy}>
                                By agreeing to our Terms & {'\n'}Policy, you are entering our App.
                            </Text>
                        </View>

                        <CustomButton
                            title="Sign Up"
                            onPress={handleSubmit}
                            backgroundColor="#FF5733"
                            textColor="#FFFFFF"
                            style={{ width: wp(95), marginTop: hp(4), }}
                        />

                        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                            <Text style={styles.account}>
                                Already Have An Account? <Text style={styles.new}>Login Here</Text>
                            </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </ScrollView>
            </View>
        </AlertNotificationRoot>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d9d9d9',
        flex: 1,
        alignItems: 'center'
    },
    imgbg: {  // background image
        height: hp(100),
        width: wp(100),
        padding: 10
    },
    HeadName: { // heading name
        fontSize: hp(2.8),
        color: '#fff',
        textAlign: 'center',
        marginTop: hp(10),
        fontWeight: 'bold'
    },
    text: {  // text
        fontSize: hp(2),
        textAlign: 'center',
        marginTop: hp(2)
    },
    Icon: {   // icon
        height: hp(2.5),
        width: wp(5.2),
        position: 'absolute',
        left: 15,
        top: 29,
        zIndex: 10,
        tintColor:'#FF5733'
    },

    // checkbox CSS
    checkmark: {
        fontSize: hp(1.3),
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginVertical: hp(4),
        alignSelf: 'center',
        alignItems: 'center',
    },
    checkedCheckbox: { // checked checkbox
        backgroundColor: '#fff',
    },
    checkbox: {
        height: hp(2),
        width: wp(4),
        borderWidth: 2,
        borderColor: '#000',
        marginRight: 10,

    },
    textpolicy: {
        fontSize: hp(2),
        marginBottom: 10,
    },
    policybox: {  // policy box
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: hp(2)
    },

    //new account text css
    account: {
        alignSelf: 'center',
        fontWeight: 'bold',
        marginVertical: hp(4)
    },
    new: {
        fontWeight: 'bold',
        color: '#FF5733',
        textDecorationLine: 'underline',
    },
});
