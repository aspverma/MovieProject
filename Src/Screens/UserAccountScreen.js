import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { ALERT_TYPE, Toast, Dialog, AlertNotificationRoot, Root } from 'react-native-alert-notification';
import CustomButton from '../Components/CustomButton';



const UserAccountScreen = ({ navigation }) => {
  // const navigation=useNavigation();

  const LogOut = () => {
    Dialog.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Logging Out',
      textBody: 'You Log Out From App',
    });

    // Navigate to the Loggin Screen after a delay
    setTimeout(() => {
      navigation.navigate('SignInScreen');
    }, 2000); // 2-second delay
  };

  return (
    <Root>
      <View style={{ backgroundColor: '#2A2F4F', flex: 1, padding: 10 }}>
        <ScrollView showsVerticalScrollIndicator={false}>

          <Image
            source={require('../Assests/person.png')}
            style={{
              height: hp(15), width: wp(30),
              borderRadius: 50, alignSelf: 'center',
              borderWidth: 2, borderColor: '#FF5733'
            }}
          />
          <View style={styles.NameText}>
            <Text style={styles.ProfileName}>
              Hello
              {'\n'} Amit Verma
            </Text>
          </View>


          {/* options box */}
          <View style={{ marginTop: hp(3) }}>

          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdateProfileScreen')}
            style={styles.listItemContainer}
          >
            <View style={styles.listItem}>
              <Image
                source={require('../Assests/profile.png')}
                style={[styles.iconProfile, { tintColor: '#FF5733' }]}
              />
              <Text style={styles.listItemText}>Edit Profile</Text>
              <Image source={require('../Assests/right.png')} style={styles.iconAction} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('EditScreen')}
            style={styles.listItemContainer}
          >
            <View style={styles.listItem}>
              <Image
                source={require('../Assests/download.png')}
                style={[styles.iconProfile, { tintColor: '#FF5733' }]}
              />
              <Text style={styles.listItemText}>Downloads</Text>
              <Image source={require('../Assests/right.png')} style={styles.iconAction} />
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => navigation.navigate('EditScreen')}
            style={styles.listItemContainer}
          >
            <View style={styles.listItem}>
              <Image
                source={require('../Assests/internet.png')}
                style={[styles.iconProfile, { tintColor: '#FF5733' }]}
              />
              <Text style={styles.listItemText}>Language</Text>
              <Image source={require('../Assests/right.png')} style={styles.iconAction} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('EditScreen')}
            style={styles.listItemContainer}
          >
            <View style={styles.listItem}>
              <Image
                source={require('../Assests/customer-support.png')}
                style={[styles.iconProfile, { tintColor: '#FF5733' }]}
              />
              <Text style={styles.listItemText}>Help</Text>
              <Image source={require('../Assests/right.png')} style={styles.iconAction} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('EditScreen')}
            style={styles.listItemContainer}
          >
            <View style={styles.listItem}>
              <Image
                source={require('../Assests/policy.png')}
                style={[styles.iconProfile, { tintColor: '#FF5733' }]}
              />
              <Text style={styles.listItemText}>Policy</Text>
              <Image source={require('../Assests/right.png')} style={styles.iconAction} />
            </View>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={LogOut}
            style={styles.listItemContainer}
          >
            <View style={styles.listItem}>
              <Image
                source={require('../Assests/exit.png')}
                style={[styles.iconProfile, { tintColor: '#FF5733' }]}
              />
              <Text style={styles.listItemText}>Log Out </Text>
              <Image source={require('../Assests/right.png')} style={styles.iconAction} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
          onPress={()=>navigation.navigate('SignUpScreen')}
            style={[styles.listItemContainer, { marginBottom: hp(10) }]}
          >
            <View style={styles.listItem}>
              <Image
                source={require('../Assests/delete.png')}
                style={[styles.iconProfile, { tintColor: '#FF5733' }]}
              />
              <Text style={styles.listItemText}>Delete Account</Text>
              <Image source={require('../Assests/right.png')} style={styles.iconAction} />
            </View>
          </TouchableOpacity>


        </ScrollView>

      </View>
    </Root>

  )
}

export default UserAccountScreen

const styles = StyleSheet.create({

  ProfileName: {
    fontSize: hp(3.4),
    fontWeight: '500',
    marginTop: hp(2),
    color: '#fff',
    textAlign: 'center',
  },

  // option styling box 
  listItemContainer: {
    marginVertical: hp(1),
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#33415C',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
  },
  iconProfile: {
    width: wp(6),
    height: hp(3),
    marginRight: wp(4),
  },
  listItemText: {
    flex: 1, // Push the bell icon to the right
    color: '#fff',
    fontSize: hp(2),
    fontWeight: '600',
  },
  iconAction: {
    width: wp(5),
    height: hp(2.3),
    tintColor: '#aaa',
  },

})