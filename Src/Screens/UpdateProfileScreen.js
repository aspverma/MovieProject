import React, { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Button,
    Alert,
} from 'react-native';
import CustomInput from '../Components/CustomInput';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import {
    ALERT_TYPE,
    Toast,
    AlertNotificationRoot,
    Dialog,
} from 'react-native-alert-notification';
import CustomButton from '../Components/CustomButton';
import ImagePicker from 'react-native-image-crop-picker';

const EditScreen = () => {
    const navigation = useNavigation();

    const [profileImage, setProfileImage] = useState(require('../Assests/person.png')); // Default profile image
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [gender, setGender] = useState(null); // To handle gender selection
    const [image, setImage] = useState(null);
    const handleCameraOrGallery = () => {
        Alert.alert(
          'Change Profile Picture',
          'Choose an option to update your profile picture.',
          [
            {
              text: 'Camera',
              onPress: async () => {
                try {
                  const result = await ImagePicker.openCamera({
                    cropping: true,
                    width: 300,
                    height: 400,
                    compressImageQuality: 2,
                  });
                  if (result && result.path) {
                    setProfileImage({ uri: result.path }); // Update image
                  } else {
                    throw new Error('Invalid image data from camera.');
                  }
                } catch (error) {
                  Toast.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Camera Error',
                    textBody: 'Failed to capture image. Please try again.',
                  });
                  console.error('Camera error:', error);
                }
              },
            },
            {
              text: 'Gallery',
              onPress: async () => {
                try {
                  const result = await ImagePicker.openPicker({
                    cropping: true,
                    width: 300,
                    height: 400,
                    compressImageQuality: 0.8,
                  });
                  if (result && result.path) {
                    setProfileImage({ uri: result.path }); // Update image
                  } else {
                    throw new Error('Invalid image data from gallery.');
                  }
                } catch (error) {
                  Toast.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Gallery Error',
                    textBody: 'Failed to pick image. Please try again.',
                  });
                  console.error('Gallery error:', error);
                }
              },
            },
            {
              text: 'Cancel',
              style: 'cancel',
            },
          ],
          { cancelable: true }
        );
      };

    const validateAndSave = () => {
        // Basic validation checks
        if (!name.trim()) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Required Field',
                textBody: 'Please enter your full name.',
            });
            return;
        }
        if (!username.trim()) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Required Field',
                textBody: 'Please enter your username.',
            });
            return;
        }
        if (!email.trim() || !validateEmail(email)) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Required Field',
                textBody: 'Please enter a valid email address.',
            });
            return;
        }
        if (!number.trim() || !validatePhoneNumber(number)) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Required Field',
                textBody: 'Please enter a valid mobile number.',
            });
            return;
        }
        if (!gender) {
            Toast.show({
                type: ALERT_TYPE.DANGER,
                title: 'Required Field',
                textBody: 'Please select your gender.',
            });
            return;
        }
        // If all validations pass, show a success message
        Dialog.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: 'Profile details saved successfully!',
        });

        // Perform the save operation here (e.g., API call)
        // If save is successful, navigate to the SettingScreen
        // Navigate to the SettingScreen after a delay
        setTimeout(() => {
            navigation.navigate('BottomTabScreen');
        }, 2000); // 2-second delay
    };

    // Email validation function
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Phone number validation function
    const validatePhoneNumber = (number) => {
        const re = /^[0-9]{10}$/; // Example for a 10-digit phone number
        return re.test(number);
    };

    return (
        <AlertNotificationRoot>
            <View style={{ backgroundColor: '#2A2F4F', flex: 1, padding: 10 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    style={{ marginHorizontal: wp(2) }}
                >
                    {/* Profile Image and Camera Icon */}
                    <View style={styles.profileContainer}>
                        <Image
                            source={profileImage.uri ? { uri: profileImage.uri } : profileImage}
                            style={styles.userimg}
                        />

                        <TouchableOpacity
                            style={styles.cameraIcon}
                            onPress={handleCameraOrGallery}
                        >
                            <Image
                                source={require('../Assests/camera.png')}
                                style={styles.cameraImage}
                            />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.detailText}>Your Details</Text>

                    <View>
                        <Text style={styles.fullnameText}>Full Name</Text>
                        <CustomInput
                            placeholder={'Enter Full Name'}
                            value={name}
                            setValue={(text) => setName(text)}
                            style={styles.input}
                        />
                    </View>
                    <View>
                        <Text style={styles.fullnameText}>UserName</Text>
                        <CustomInput
                            placeholder={'Enter Your UserName'}
                            value={username}
                            setValue={(text) => setUsername(text)}
                            style={styles.input}
                        />
                    </View>
                    <View>
                        <Text style={styles.fullnameText}>Your Email</Text>
                        <CustomInput
                            placeholder={'Enter Your Email'}
                            value={email}
                            setValue={(text) => setEmail(text)}
                            style={styles.input}
                        />
                    </View>
                    <View>
                        <Text style={styles.fullnameText}>Mobile NO.</Text>
                        <CustomInput
                            placeholder={'Enter Your Number'}
                            value={number}
                            setValue={(text) => setNumber(text)}
                            style={styles.input}
                        />
                    </View>

                    {/* Gender Section */}
                    <Text style={styles.fullnameText}>Gender</Text>

                    <View style={styles.genderContainer}>
                        <TouchableOpacity
                            style={[
                                styles.genderButton,
                                gender === 'Male' && styles.selectedGenderButton, // Apply selected style if 'Male' is selected
                            ]}
                            onPress={() => setGender('Male')}
                        >
                            <Text
                                style={[
                                    styles.genderText,
                                    gender === 'Male' && styles.selectedGenderText, // Apply selected text style if 'Male' is selected
                                ]}
                            >
                                Male
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.genderButton,
                                gender === 'Female' && styles.selectedGenderButton, // Apply selected style if 'Female' is selected
                            ]}
                            onPress={() => setGender('Female')}
                        >
                            <Text
                                style={[
                                    styles.genderText,
                                    gender === 'Female' && styles.selectedGenderText, // Apply selected text style if 'Female' is selected
                                ]}
                            >
                                Female
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <CustomButton
                    title="Save"
                    onPress={validateAndSave}
                    backgroundColor="#FF5733"
                    textColor="#FFFFFF"
                    style={{ width: wp(95), marginTop: hp(4) }}
                />
            </View>
        </AlertNotificationRoot>
    );
};
export default EditScreen;
const styles = StyleSheet.create({
    //  profile and camera icon
    profileContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: hp(2),
    },
    userimg: {
        height: hp(15),
        width: hp(15),
        borderRadius: hp(7.5),
        borderWidth: 2,
        borderColor: '#FF5733',
    },
    cameraIcon: {
        position: 'absolute',
        bottom: 1,
        right: wp(28),
        backgroundColor: '#FF5733',
        borderRadius: 20,
        padding: 8,
    },
    cameraImage: {
        height: hp(3),
        width: hp(3),
        tintColor: '#fff',
    },
    detailText: {
        fontSize: hp(2.8),
        fontWeight: 'bold',
        // marginHorizontal: wp(5),
        color: '#fff',
        marginBottom: hp(2),
    },
    fullnameText: {
        fontSize: hp(2),
        color: '#fff',
        fontWeight: '600',
        marginTop: hp(1.5)
    },


    // gender section box 
    genderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp(2),
    },
    genderButton: {
        width: wp(40),
        height: hp(6),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#001133', // Default color for both buttons
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#666666', // Default border color
    },
    selectedGenderButton: {
        backgroundColor: '#FF5733', // Highlight color for selected button
        borderColor: '#FF5733',    // Change border to match selected state
    },
    genderText: {
        color: '#FFFFFF', // Default text color
        fontSize: hp(2),
    },
    selectedGenderText: {
        color: '#FFFFFF', // Text color for selected state
        fontWeight: 'bold',
    },

});

