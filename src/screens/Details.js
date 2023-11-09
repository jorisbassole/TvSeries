import React from 'react';
import { View, Text, Button, Image, SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const DetailsScreen = ({ route, navigation }) => {
  const { seriesId } = route.params || {};
  const tvSeries = useSelector((state) => state.tvSeries);

  // Trouver la série spécifique par son ID
  const selectedSeries = tvSeries.value.data.find((series) => series.id === seriesId);

  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style = {styles.container} >
    <Text style= {styles.text}>Détails</Text>
      {selectedSeries && (
        <View>
             <Image
    style={{ width: 400, height: 500 }} 
    source={{ uri: `https://image.tmdb.org/t/p/w500/${selectedSeries.poster_path}` }}
  />

        <View style={styles.info}>

            <Text>Note: {selectedSeries.vote_average}</Text>
          <Text>Description: {selectedSeries.overview}</Text>
            {/* <Text>Popularité: {selectedSeries.popularity}</Text> */}
        </View>
        </View>
      )}
      <Button title="Retour à l'accueil" onPress={() => navigation.navigate('Accueil')} style={styles.button} />
    </View>
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
        alignItems: 'center',
    },

    text: {
        fontSize: 20,
        margin:10,
        fontWeight: 'bold',
        },

        info: {
            marginTop: 20,
            marginBottom: 40,
            marginLeft: 30,
            marginRight: 30,   
            alignItems: 'center',
            },

    button: {
        marginTop: 100,
        borderRadius: 20,
        margin: 10,
        },
  });

export default DetailsScreen;
