import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import React from 'react'
import { useState, useRef } from 'react'
import { useCountdown } from 'react-native-countdown-circle-timer'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { ALERT_TYPE, Toast, AlertNotificationRoot, Dialog } from 'react-native-alert-notification';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomButton from '../Components/CustomButton'


const OTPScreen = ({navigation}) => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const inputs = useRef([]);
    const [resendTimer, setResendTimer] = useState(false);


    const {} = useCountdown({ isPlaying: true, duration: 59, colors: '#abc' })


    // Function to handle change in OTP inputs
    const handleChange = (text, index) => {
        if (isNaN(text)) return; // Only allow numbers

        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Automatically focus on the next input
        if (text !== "" && index < inputs.current.length - 1) {
            inputs.current[index + 1].focus();
        }
    };

    // Function to handle backspace for moving to the previous input
    const handleKeyPress = (e, index) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === "") {
            if (index > 0) {
                inputs.current[index - 1].focus();
            }
        }
    };

    // Function to handle OTP submission
    const handleSubmit = () => {
        const otpValue = otp.join("");

        // Check if all OTP fields are filled
        if (otp.includes(" ") || otpValue.length < 6) {
            Toast.show({
                type: ALERT_TYPE.WARNING,
                title: 'Validation Error',
                textBody: 'Please enter the  OTP.',
            });
            return;
        }

        //OTP Verified Successful
        Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'OTP Verified Successful',
            textBody: 'Your OTP Is Successfully Verified ',
        });

            // Navigate to the Login screen after a delay
            setTimeout(() => {
                navigation.navigate('ResetScreen');
            }, 2000); // 2-second delay to let the user see the success message
    };

    const handleResend = () => {
        setResendTimer(true); // Start the timer
        Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Code Resent',
            textBody: 'A new OTP has been sent to your registered email address.',
        });
    };


    return (
        <AlertNotificationRoot>
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                    <ImageBackground source={require('../Assests/bg2.png')} style={styles.imgbg}>

                        <Text style={styles.HeadName}>
                            OTP Verification
                        </Text>
                        <Text style={styles.text}>
                            Enter your OTP sent to your {'\n'} registered Email Address
                        </Text>

                        <View style={styles.otpContainer}>
                            {otp.map((digit, index) => (
                                <TextInput
                                    key={index}
                                    style={styles.input}
                                    value={digit}
                                    keyboardType="numeric"
                                    maxLength={1}
                                    onChangeText={(text) => handleChange(text, index)}
                                    onKeyPress={(e) => handleKeyPress(e, index)}
                                    ref={(ref) => (inputs.current[index] = ref)}
                                    placeholder='0'
                                    placeholderTextColor={'#969696'}
                                />
                            ))}
                        </View>

                        {!resendTimer ? (
                            <TouchableOpacity onPress={handleResend}>
                                <Text style={styles.resend}>
                                    Didn't receive a code? <Text style={styles.new}>Resend Code</Text>
                                </Text>
                            </TouchableOpacity>
                        ) : ( 
                            <View style={{alignSelf:'center',marginTop:hp(2)}}>
                            <CountdownCircleTimer
                                isPlaying
                                duration={59} // Duration in seconds
                                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                                size={80}
                                strokeWidth={12}
                                colorsTime={[7, 5, 2, 0]}
                                onComplete={() => {
                                    setResendTimer(false); // Enable the resend button

                                }
                                }
                            >
                                {({ remainingTime }) => (
                                    <Text style={styles.timerText}>{remainingTime}s</Text>
                                )}
                            </CountdownCircleTimer>
                        </View>)}
                        <CustomButton
                            title="Verify OTP"
                            onPress={handleSubmit}
                            backgroundColor="#FF5733"
                            textColor="#FFFFFF"
                            style={{ width: wp(95), marginTop: hp(4), }}
                        />
                    </ImageBackground>
                </ScrollView>
            </View>
        </AlertNotificationRoot>
    );
}

export default OTPScreen

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
    input: {
        height: hp(6.5),
        width: wp(10),
        borderWidth: 2,
        borderColor: '#FF5733',
        textAlign: 'center',
        fontSize: hp(2.4),
        borderRadius: 10,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: hp(6)
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    textlogin: {
        textAlign: 'center',
        color: 'azure',
        fontSize: hp(2.5),
        fontWeight: 'bold',
    },
    Image: {
        height: hp(55),
        width: wp(80),
        alignSelf: 'center'
    },
    resend: {
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: hp(1.6),
        marginVertical: hp(5)

    },
    new: {
        fontWeight: 'bold',
        color: '#316FF6',
        textDecorationLine: 'underline',
    },
    timerText:{
        fontSize: hp(2.5),
        color: '#FF5733',
        fontWeight: 'bold',
        textAlign:'center'
    },
    timercircle: {
        alignSelf: 'center', // Centers the timer horizontally
        marginVertical: 20, // Adds space above and below
    },




















});
