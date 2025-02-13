import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, Text, View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MovieList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch('https://api.sampleapis.com/movies/drama')
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
        <TouchableOpacity style={styles.itemContainer}>
            {item.posterURL ? (
                <Image source={{ uri: item.posterURL }} style={styles.poster} />
            ) : (
                <Text style={{ color: 'red', fontSize: hp(1.2) }}>No image available</Text>
            )}
            {/* <Image source={require('../Assests/captaincrd.png')} style={styles.itemImage} /> */}
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
    itemContainer: {
        alignItems: 'center',
        marginTop: hp(2),
        marginHorizontal: 7,
    },
    itemText: {
        fontSize: wp('4%'), // Font size based on screen width
        color: '#fff',
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
