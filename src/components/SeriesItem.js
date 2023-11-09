import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

const SeriesItem = ({ series, onPressDetails, onPressAddToFavorites, onPressRemoveFromFavorites }) => {
  return (


    <View style={{ marginTop:10, marginBottom:80}}>
      {/* <Text style = {{}}>{series.name}</Text> */}
< TouchableOpacity onPress={onPressDetails}>
      <Image
          style={{ width: 400, height: 600 }} // Ajustez la taille de l'image selon vos besoins
          source={{ uri: `https://image.tmdb.org/t/p/w500/${series.poster_path}` }}
        />
        </TouchableOpacity>

        <View style={styles.Button}>
      <Button title="Voir les détails" onPress={onPressDetails} />
      <Button title="Ajouter aux favoris" onPress={onPressAddToFavorites} />
      <Button title="Supprimer des favoris" onPress={onPressRemoveFromFavorites} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  Button: {
    gap: 7,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 14,

  },
});

export default SeriesItem;
