import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomButton from '../Components/CustomButton';
const TicketScreen = () => {
  return (
    <View style={{ backgroundColor: '#2A2F4F', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text style={{fontSize:hp(4),color:"azure",fontWeight:"bold",marginBottom:hp(2)}}>Your Ticket</Text>

      <ImageBackground source={require('../Assests/captaincrd.png')} style={styles.ticket}>

        <LinearGradient
          colors={['transparent', '#FF5733', '#FF5733']}
          style={styles.linearGradient}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: hp(15) }} >
            <Image source={require('../Assests/2.png')} style={{ height: hp(6), width: wp(6), tintColor: 'black' }} />
            <Text style={{ fontSize: hp(3), fontWeight: 'bold', color: '#fff', textAlign: 'center', }}>
              ---------------------
            </Text>
            <Image source={require('../Assests/1.png')} style={{ height: hp(6), width: wp(6), tintColor: 'black' }} />

          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Text style={{ fontSize: hp(3), fontWeight: 'bold', color: '#fff' }}>
              18
            </Text>
            <Image source={require('../Assests/history.png')} style={{ height: hp(3), width: wp(6), tintColor: '#fff' }} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Text style={{ fontSize: hp(2), fontWeight: 'bold', color: '#fff' }}>
              MON
            </Text>
            <Text style={{ fontSize: hp(2), fontWeight: 'bold', color: '#fff' }}>
              14:30
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: hp(2) }}>
            <Text style={{ fontSize: hp(3), fontWeight: 'bold', color: '#fff' }}>
              Hall
            </Text>
            <Text style={{ fontSize: hp(3), fontWeight: 'bold', color: '#fff' }}>
              Row
            </Text>
            <Text style={{ fontSize: hp(3), fontWeight: 'bold', color: '#fff' }}>
              Seats
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Text style={{ fontSize: hp(2), fontWeight: 'bold', color: '#fff' }}>
              02
            </Text>
            <Text style={{ fontSize: hp(2), fontWeight: 'bold', color: '#fff' }}>
              04
            </Text>
            <Text style={{ fontSize: hp(2), fontWeight: 'bold', color: '#fff' }}>
              23,24
            </Text>
          </View>
          <View>
            <Image source={require('../Assests/barcode.png')} style={{ height: hp(10), width: wp(25), alignSelf: 'center', tintColor: '#fff' }} />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default TicketScreen

const styles = StyleSheet.create({
  linearGradient: {
    marginTop: hp(20),
    height: hp(50)
  },
  ticket: {
    height: hp(70),
    width: wp(60),
  }
})