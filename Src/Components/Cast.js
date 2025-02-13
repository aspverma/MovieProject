import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import React from 'react';

// Updated Cast Data with 6 Persons
const castData = [
    { 
        name: 'Villiy Wilson', 
        character: 'John Wick', 
        image: require('../Assests/cast5.png'),
        images: [
            require('../Assests/cast5.png'),
            require('../Assests/avenger.jpg'),
            require('../Assests/avenger.jpg'),
        ]
    },
    { 
        name: 'Anna Smith', 
        character: 'Jane Doe', 
        image: require('../Assests/avenger.jpg'),
        images: [
            require('../Assests/avenger2.jpg'),
            require('../Assests/avenger2.jpg'),
            require('../Assests/avenger2.jpg'),
        ]
    },
    { 
        name: 'Chris Evans', 
        character: 'Captain America', 
        image: require('../Assests/avenger4.jpg'),
        images: [
            require('../Assests/avenger.jpg'),
            require('../Assests/avenger.jpg'),
            require('../Assests/avenger.jpg'),
        ]
    },
    { 
        name: 'Scarlett Johansson', 
        character: 'Black Widow', 
        image: require('../Assests/avenger2.jpg'),
        images: [
            require('../Assests/avenger2.jpg'),
            require('../Assests/avenger2.jpg'),
            require('../Assests/avenger2.jpg'),
        ]
    },
    { 
        name: 'Robert Downey Jr.', 
        character: 'Iron Man', 
        image: require('../Assests/avenger3.jpg'),
        images: [
            require('../Assests/avenger.jpg'),
            require('../Assests/avenger.jpg'),
            require('../Assests/avenger.jpg'),
        ]
    },
    { 
        name: 'Mark Ruffalo', 
        character: 'Hulk', 
        image: require('../Assests/avenger.jpg'),
        images: [
            require('../Assests/avenger2.jpg'),
            require('../Assests/avenger2.jpg'),
            require('../Assests/avenger2.jpg'),
        ]
    },
];

const Cast = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: hp(2.5), color: '#fff', fontWeight: 'bold', marginTop: hp(2) }}>Top Cast</Text>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {castData.map((person, index) => (
                    <TouchableOpacity
                        key={index}
                        style={{ marginHorizontal: wp(2) }}
                        onPress={() => navigation.navigate('PersonScreen', { person })}
                    >
                        <View style={styles.castItem}>
                            <Image 
                                source={person.image} 
                                style={styles.castImage} 
                            />
                        </View>
                        <Text style={styles.personName}>
                            {person.name.length > 10 ? `${person.name.slice(0, 10)}...` : person.name}
                        </Text>
                        <Text style={styles.characterName}>
                            {person.character.length > 10 ? `${person.character.slice(0, 10)}...` : person.character}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default Cast;

const styles = StyleSheet.create({
    castItem: {
        borderColor: "#ea2ea2e4",
        borderWidth: 1,
        borderRadius: 100,
        marginTop: hp(2),
    },
    castImage: {
        height: hp(10),
        width: wp(20),
        borderRadius: 50,
    },
    personName: {
        textAlign: 'center',
        color: 'azure',
        fontSize: hp(1.7),
    },
    characterName: {
        textAlign: 'center',
        fontSize: hp(1.5),
        color: '#aaa',
    },
});
