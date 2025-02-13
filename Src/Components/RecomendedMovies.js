import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MovieList = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://api.sampleapis.com/movies/horror')
            .then((response) => response.json())
            .then((fetchedData) => {
                setData(fetchedData);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('TrendingDetailsScreen', { movie: item })} // Pass the movie data
        >

            {item.posterURL ? (
                <Image source={{ uri: item.posterURL }} style={styles.poster} />
            ) : (
                <Text>No image available</Text>
            )}
            {/* <Image source={require('../Assests/avenger.jpg')} style={styles.itemImage} /> */}
            <Text style={styles.itemText}>
                {item.title.length > 10 ? `${item.title.slice(0, 10)}...` : item.title}
            </Text>
            <Text style={{ color: '#000' }}>
                {item.actors}
            </Text>
        </TouchableOpacity>
    );

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Failed to load data: {error?.message}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: hp(7)
    },
    itemContainer: {
        alignItems: 'center',
        marginTop: hp(2),
        marginHorizontal: 7,
    },
    itemText: {
        fontSize: wp('4%'), // Font size based on screen width
        color: '#fff',
        marginTop: hp(1),
        fontWeight: 'bold'

    },
    errorText: {
        fontSize: hp(2),
        color: 'red',
        textAlign: 'center',
    },
    poster: {
        width: wp(29),
        height: hp(25),
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#FF5733',

    }
});

export default MovieList;
