import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isFiltering, setIsFiltering] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setIsLoading(true);
    fetch('https://api.sampleapis.com/movies/horror')
      .then((response) => response.json())
      .then((fetchedData) => {
        setData(fetchedData);
        setFilteredData(fetchedData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchText === '') {
      setFilteredData(data);
    } else {
      setIsFiltering(true);
      setTimeout(() => {
        const newFilteredData = data.filter(item =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(newFilteredData);
        setIsFiltering(false);
      }, 200); // Simulated delay of 200ms
    }
  }, [searchText, data]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('SearchDetails', { movie: item })}
      style={styles.listItem}>
      <Image source={{ uri: item.posterURL }} style={styles.img} />
      <View>
        <Text style={styles.listItemText}>
          {item.title.length > 10 ? `${item.title.slice(0, 10)}...` : item.title}
        </Text>
        <Text style={styles.descriptionText}>9.7 rating         $39 </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies..."
        placeholderTextColor="#888"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Image source={require('../Assests/search.png')} style={styles.icon}/>
      {(isLoading || isFiltering) ? (
        <ActivityIndicator size="large" color="#fff" style={{ marginTop: hp(10) }} />
      ) : (
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={filteredData}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No results found</Text>
          }
          onRefresh={fetchData} // Refresh functionality
          refreshing={isLoading} 
        />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2F4F',
    padding: 10,
  },
  searchBar: {
    color: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    height: hp(7),
    borderColor: '#666666',
    backgroundColor: '#001133',
    paddingLeft: 20,
    marginBottom: hp(3),
  },
  listItem: {
    alignItems: 'center',
    marginTop: hp(2),
    // marginHorizontal:wp(2.5),
  },
  listItemText: {
    color: '#fff',
    fontSize: hp(2.2),
    fontWeight: 'bold',
  },
  descriptionText: {
    color: '#bbb',
    fontSize: hp(1.5),
  },
  emptyText: {
    color: '#ccc',
    fontSize: hp(2.2),
    textAlign: 'center',
    marginTop: hp(5),
  },
  img: {
    height: hp(25),
    width: wp(43),
    borderRadius: 20,
    opacity: 0.8,
    marginBottom: hp(1),
    marginHorizontal: wp(2)
  },
  icon:{
    height:hp(2.8),
    width:wp(5.2),
    position:'absolute',
    left:wp(85),
    top:hp(3.5),
    tintColor:'red'
  }
});
