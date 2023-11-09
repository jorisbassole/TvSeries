import React from 'react';
import { View, Text, FlatList,  StyleSheet, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import SeriesItem from '../components/SeriesItem';
import {removeToFavorites } from '../reducers/tvSeries';


const FavoritesScreen = ({ navigation }) => {

const dispatch = useDispatch();
  const tvSeries = useSelector((state) => state.tvSeries);

  const handleRemoveFromFavorites = (series) => {
    dispatch(removeToFavorites(series));

    navigation.navigate('Favoris');
  };

  const renderItem = ({ item }) => (
    <SeriesItem
      series={item}
      onPressDetails={() => navigation.navigate('Details', { seriesId: item.id })}
      onPressRemoveFromFavorites={() => handleRemoveFromFavorites(item)}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style = {styles.container} >
      <Text style= {styles.text}>Séries TV favorites</Text>
      <FlatList
        data={tvSeries.value.favorites}
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
  });

export default FavoritesScreen;
