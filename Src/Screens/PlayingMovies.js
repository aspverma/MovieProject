import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MovieData = [
  { id: '1', title: 'Inception', image: require('../Assests/avenger3.jpg') },
  { id: '2', title: 'The Dark Knight Rises', image: require('../Assests/avenger2.jpg') },
  { id: '3', title: 'Interstellar', image: require('../Assests/avenger.jpg') },
  { id: '4', title: 'Dunkirk', image: require('../Assests/avenger4.jpg') },
];

const PlayingMovies = ({ navigation }) => {
  const renderItem = ({ item }) => {
    // Conditionally slice the title if it's longer than 14 characters
    const displayTitle = item.title.length > 14
      ? `${item.title.slice(0, 14)}...`
      : item.title;
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('MovieDetailsScreen', { cardData: item })}
      >
        <View style={styles.itemContainer}>
          <Image source={item.image} style={styles.poster} />
          <Text style={styles.itemText}>{displayTitle}</Text>
          <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
        </View>

      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={MovieData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};


export default PlayingMovies;

const styles = StyleSheet.create({

  itemContainer: {
    alignItems: 'center',
    marginTop: hp(2),
    marginHorizontal:7,


  },
  itemText: {
    fontSize: wp('4%'), // Font size based on screen width
    color: '#fff',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    // color: '#333',
  },
  // cardSubtitle: {
  //   fontSize: 14,
  //   color: '#555',
  // },
  poster: {
    width: wp(29),
        height: hp(25) ,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FF5733',
  },
});