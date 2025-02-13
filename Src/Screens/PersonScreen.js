import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react';

const PersonScreen = ({ route }) => {
  const { person } = route.params;

  return (
    <View style={styles.container}>

    <ScrollView  showsVerticalScrollIndicator={false}>
      <Image
        source={person.image}
        style={styles.profileImage}
      />
      <Text style={styles.title}>{person.name}</Text>
      <Text style={styles.subtitle}>{person.character}</Text>


      {/* Display Additional Images */}
      <Text style={styles.galleryTitle}>Gallery</Text>
      {person.images && person.images.length > 0 ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          {person.images.map((img, index) => (
            <Image
              key={index}
              source={img}
              style={styles.galleryImage}
            />
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.noImagesText}>No images available</Text>
      )}
    </ScrollView>
    </View>

  );
};

export default PersonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2F4F',
    padding: wp(4),
  },
  title: {
    fontSize: hp(3),
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: hp(2),
  },
  subtitle: {
    fontSize: hp(2),
    color: '#aaa',
    textAlign: 'center',
    marginBottom: hp(2),
  },
  profileImage: {
    height: hp(30),
    width: wp(60),
    alignSelf: 'center',
    borderRadius: 110,
    // marginBottom: hp(3),
  },
  galleryTitle: {
    fontSize: hp(2.5),
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: hp(2),
  },
  galleryImage: {
    height: hp(15),
    width: wp(30),
    borderRadius: 10,
    marginRight: wp(2),
  },
  noImagesText: {
    fontSize: hp(2),
    color: '#aaa',
    textAlign: 'center',
    marginTop: hp(2),
  },
});
