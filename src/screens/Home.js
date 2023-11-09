import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, Button, SafeAreaView, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTVSeriesSuccess, fetchTVSeriesFailure, addToFavorites, removeToFavorites } from '../reducers/tvSeries';
import SeriesItem from '../components/SeriesItem';
import { API_KEY} from '@env';

const HomeScreen = ({ navigation }) => {

// const API_KEY = process.env.API_KEY;

const API_KEY = "2677656fd7468877a093eaa18efd0f94"

  const dispatch = useDispatch();
  const tvSeries = useSelector((state) => state.tvSeries);
  const [localFavorites, setLocalFavorites] = useState([]);
  const [searchText, setSearchText] = useState('');



  const fetchTVSeries = () => {
    fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchTVSeriesSuccess(data.results));
      })
      .catch((error) => {
        console.error('Error fetching TV series:', error);
        dispatch(fetchTVSeriesFailure(error.message));
      });
  };


  useEffect(() => {
    fetchTVSeries();
  }, []);

  useEffect(() => {
    setLocalFavorites(tvSeries.value.favorites);
  }, [tvSeries.value.favorites]);

 

  const handleAddToFavorites = (series) => {
    dispatch(addToFavorites(series));
    setLocalFavorites([...localFavorites, series]);

    navigation.navigate('Favoris');
  };

  const handleRemoveFromFavorites = (series) => {
    dispatch(removeToFavorites(series));
    setLocalFavorites(localFavorites.filter((favorite) => favorite.id !== series.id));

    navigation.navigate('Favoris');
  };

  const renderItem = ({ item }) => (
    <SeriesItem
      series={item}
      onPressDetails={() => navigation.navigate('Details', { seriesId: item.id })}
      onPressAddToFavorites={() => handleAddToFavorites(item)}
      onPressRemoveFromFavorites={() => handleRemoveFromFavorites(item)}
    />
  );

  return (
    
    <SafeAreaView style={{ flex: 1 }}>
    <View style = {styles.container} >

    <Text style= {styles.text}>Accueil</Text>

      <TextInput
        placeholder="Rechercher..."
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        style={{ margin:10,  padding: 8, borderColor: 'grey', borderWidth: 3, borderRadius: 20, width: 350 }}
      />
 
      
      <FlatList
        data={tvSeries.value?.data?.filter((series) =>
          series.name?.toLowerCase().includes(searchText.toLowerCase())
        )}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />


    </View>
    
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
        },

        text: {
            fontSize: 20,
            margin:10,
            fontWeight: 'bold',
            },
    },);

export default HomeScreen;
