import { StyleSheet, Text, View ,ScrollView,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TrendingMovies from '../Components/TrendingMovies'
import CustomButton from '../Components/CustomButton';
import Cast from '../Components/Cast';

import { useState } from 'react';
const CarouselDetailScreen = ({route ,navigation}) => {
  const {carousel}=route.params

    const [isBookmarked, setIsBookmarked] = useState(false);
  
  return (
    <View style={{ backgroundColor: '#2A2F4F', flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>


        <LinearGradient
          colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
          style={styles.linearGradient}
        >
          <Image source={carousel.image} style={styles.poster} />
          <View style={styles.content}>
            <Text style={styles.title}>{carousel.title}</Text>
            <Text style={styles.subtitle}>
              released . 2019 . 1h37min{'\n'}

              Action . Thrill . Comedy
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', columnGap: wp(10), marginTop: hp(1.4) }}>
              {/* Bookmark Icon */}
              <TouchableOpacity onPress={() => setIsBookmarked(!isBookmarked)}>
                <Image
                  source={
                    isBookmarked
                      ? require('../Assests/filled.png') // Filled bookmark icon
                      : require('../Assests/bookmark.png') // Outline bookmark icon
                  }
                  style={{ height: hp(3), width: wp(5), tintColor: '#FF5733' }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../Assests/download.png')} style={{ height: hp(3), width: wp(5), tintColor: '#FF5733' }} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('../Assests/share.png')} style={{ height: hp(3), width: wp(5), tintColor: '#FF5733' }} />
              </TouchableOpacity>

            </View>
            <Text style={{ fontSize: hp(2.5), color: '#fff', fontWeight: 'bold', marginTop: hp(2) }}>Description</Text>

            <Text style={styles.description}>
              Iron Man: Tony Stark
              Captain America: Steve Rogers
              The Hulk: Bruce Banner
              Thor: The prince of thunder
              Black Widow: Natasha Romanoff
              Hawkeye: Clint Barton
              In the film, Nick Fury and the spy agency S.H.I.E.L.D. recruit Tony Stark, Steve Rogers, Bruce Banner, Thor, Natasha Romanoff, and Clint Barton to form a team capable of stopping Thor's brother Loki from subjugating Earth.
            </Text>
            <Cast navigation={navigation}  />

            <Text style={{ fontSize: hp(2.5), color: '#fff', fontWeight: 'bold', marginTop: hp(2) }}>Similar Movies</Text>

            <TrendingMovies navigation={navigation} />

          </View>

        </LinearGradient>

      </ScrollView>
      <CustomButton
        title="Book Now"
        onPress={() => navigation.navigate('SeatBookingScreen')}
        backgroundColor="#FF5733"
        textColor="#FFFFFF"
        style={{ width: wp(95), marginVertical: hp(2) }}
      />
    </View>
  );
}

export default CarouselDetailScreen

const styles = StyleSheet.create({
  linearGradient: {
    width: wp(100),
  },
  title: {
    fontSize: hp(5),
    fontWeight: 'bold',
    color: 'azure',
    textAlign: 'center',
    // marginTop: hp(1),

  },
  description: {
    fontSize: hp(1.8),
    color: '#ccc',
    lineHeight: hp(2.3),
    marginTop: hp(2)
  },
  content: {
    padding: 10,
    // width: wp(90),
  },
  poster: {
    height: hp(35),
    width: 'auto',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: hp(2.2),
    fontWeight: '600',
    marginTop: hp(1),

  },

})