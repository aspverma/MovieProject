import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SearchDetails = ({ route }) => {
  const { movie } = route.params; // Retrieve the data passed from SearchScreen

  return (
    <View style={styles.container}>
      <Image source={{uri: movie.posterURL }} style={styles.image} />
      <Text style={styles.name}>{movie.title}</Text>
      <Text style={styles.description}>{movie.description}</Text>
    </View>
  );
};

export default SearchDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2F4F',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#bbb',
    textAlign: 'center',
  },
});
