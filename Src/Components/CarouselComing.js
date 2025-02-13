import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width } = Dimensions.get('window');

const CarouselComing = ({navigation}) => {
    
    // const handleClick = (item) => {
    //     navigation.navigate('CarouselDetailScreen', item);
    // };

    const data = [
        { title: 'John Wick 4', image: require('../Assests/avenger3.jpg') },
        { title: 'Marvel ', image: require('../Assests/avenger2.jpg') },
        { title: 'Avenger 5', image: require('../Assests/captaincdr.png') },
        { title: 'Avenger 5', image: require('../Assests/avenger.jpg') },

    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = React.useRef(null);

    // Automatically swipe after a timeout
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % data.length; // Loop back to the start
            setActiveIndex(nextIndex);
            if (carouselRef.current) {
                carouselRef.current.snapToItem(nextIndex);
            }
        }, 2000); // Adjust timeout duration as needed (3000ms = 3 seconds)

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [activeIndex]);

    // Render each carousel item
   const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('CarouselDetailScreen', { carousel: item })}>
      <View style={styles.carouselItem}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
    return (
        <View>
            <Carousel
                ref={carouselRef} // Reference to control the carousel
                data={data}
                renderItem={ renderItem}
                sliderWidth={width}
                itemWidth={width * 0.75} // Adjust item size
                loop={true}
                onSnapToItem={(index) => setActiveIndex(index)} // Update active index
            />
            <Pagination
                dotsLength={data.length} // Number of items
                activeDotIndex={activeIndex} // Current active index
                dotStyle={styles.activeDot} // Style for active dot
                inactiveDotStyle={styles.inactiveDot} // Style for inactive dots
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                style={styles.dot}
            />
        </View>
    );
};

export default CarouselComing;

const styles = StyleSheet.create({
    carouselItem: {
        backgroundColor: '#001133',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        borderColor: '#FF5733',
        borderWidth: 1,
        marginTop: hp(1),
    },
    image: {
        width: '100%',
        height: hp(20),
        borderRadius: 10,
    },
    title: {
        color: '#fff',
        fontSize: hp(2.5),
        fontWeight: 'bold',
        marginVertical: hp(1),
        textAlign: 'center',
    },
    activeDot: {
        width: wp(3),
        height: hp(1),
        borderRadius: 5,
        backgroundColor: '#FF5733',
    },
    inactiveDot: {
        backgroundColor: '#888',
    },
});
