import React from 'react';
import { FlatList, TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const MovieList = () => {
    const data = [
        { id: '1', title: 'Inception', image: require('../Assests/trending.png') },
        { id: '2', title: 'The Dark Knight Rises', image: require('../Assests/trending.png') },
        { id: '3', title: 'Interstellar', image: require('../Assests/trending.png') },
        { id: '4', title: 'Dunkirk', image: require('../Assests/trending.png') },
    ];

    const renderItem = ({ item }) => {
        // Conditionally slice the title if it's longer than 14 characters
        const displayTitle = item.title.length > 14
            ? `${item.title.slice(0, 14)}...`
            : item.title;

        return (
            <TouchableOpacity style={styles.itemContainer}>
                <Image source={item.image} style={styles.itemImage} />
                <Text style={styles.itemText}>{displayTitle}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={data} // Array of items
                keyExtractor={(item) => item.id} // Unique key for each item
                renderItem={renderItem} // Function to render each item
            />
        </View>
    );
};

const styles = StyleSheet.create({

    itemContainer: {
        alignItems: 'center',
        marginTop: hp(2),
        marginBottom:hp(2),
    },
    itemImage: {
        width: wp(27), // 20% of screen width
        height: hp(25), // 10% of screen height
        borderRadius: wp('1%'), // Rounded corners for the image
        marginHorizontal: wp(2),
        borderRadius: 20
    },
    itemText: {
        fontSize: wp(4), // Font size based on screen width
    },
});

export default MovieList;
