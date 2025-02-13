import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CarouselComing from '../Components/CarouselComing';
import { useState } from 'react';
import TrendingMovies from '../Components/TrendingMovies';
import RecomendedMovies from '../Components/RecomendedMovies';
import PlayingMovies from './PlayingMovies';
const HomeScreen = ({ navigation }) => {

  const categories = ['All', 'Movies', 'Series', 'Anime', 'Cartoon', 'Serials'];



  return (
    // Header section 
    <View style={{ backgroundColor: '#2A2F4F', flex: 1, padding: 10 }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: wp(31)
        }}>

          <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: wp(1.8) }}>
            <Image source={require('../Assests/person.png')}
              style={{
                height: hp(7),
                width: wp(14)
              }}
            />
            <View>
              <Text style={{ color: '#fff', fontSize: hp(3), fontWeight: 'bold' }}> Hello Mr. Amit </Text>
              <Text style={{ fontSize: hp(1.6), }}>Enjoy your favorite movies</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image source={require('../Assests/bell.png')}
              style={{  // notification icon
                height: hp(3),
                width: wp(5),
              }} />
          </TouchableOpacity>
        </View>
        <Text style={{ color: '#fff', fontSize: hp(2.5), fontWeight: 'bold', marginTop: hp(3) }}>
          Categories
        </Text>
        
        {/* Categories Section */}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.categories}>
            {categories.map((category, index) => (
              <TouchableOpacity key={index} style={styles.categoryButton}>
                <Text style={styles.categoryText}>{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* {Carousel Comeponents  and navigation to the detail screen  */}
        <Text style={{ color: '#fff', fontSize: hp(2.5), fontWeight: 'bold', marginTop: hp(2) }}>
          Coming Soon
        </Text>
        <CarouselComing  navigation={navigation} />

        {/* TrendingMovies Componenet and navigation to  */}
        <Text style={{ color: '#fff', fontSize: hp(2.5), fontWeight: 'bold', }}>
          Trending
        </Text>
        <TrendingMovies />

        {/* <PlayingMovies component and navigation to the MovieDetailsScreen screen  */}

        <Text style={{ color: '#fff', fontSize: hp(2.5), fontWeight: 'bold', }}>
          Continue Watching
        </Text>
        <PlayingMovies navigation={navigation} />



        {/* RecomendedMovies Component and navigation to the TrendingDetailsScreen screen  */}
        <Text style={{ color: '#fff', fontSize: hp(2.5), fontWeight: 'bold', }}>
          Recomended for you
        </Text>
        <RecomendedMovies navigation={navigation} />






      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  categories: {
    flexDirection: 'row',
    marginVertical: hp(2),
  },
  categoryButton: {
    backgroundColor: '#001133',
    paddingHorizontal: wp(5),
    borderRadius: 12,
    marginRight: wp(2),
    height: hp(5),
    width: 'auto',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#FF5733',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    borderWidth: .5,
    borderBlockStartColor: '#FF5733',
    borderStartColor: '#FF5733',
    borderBlockEndColor: '#132639',
    borderEndColor: '#132639',
  },
  categoryText: {
    color: '#FFF',
    fontSize: hp(1.8),
    fontWeight: 'bold'
  },

})