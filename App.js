import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FontAwesome from "react-native-vector-icons/FontAwesome";

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tvSeries from './src/reducers/tvSeries';
import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';
import FavoritesScreen from './src/screens/Favorites';

const Tab = createBottomTabNavigator();

const store = configureStore({
  reducer: { tvSeries },
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon:({color, size}) => {
        let iconName = '';

        if (route.name === 'Accueil') {
          iconName = 'home';
        } else if (route.name === 'Favoris') {
          iconName = 'heart';
        } else if (route.name === 'Details') {
          iconName = 'info-circle';
        }
        return <FontAwesome name={iconName} size={size} color={color} />;
      },
tabBarActiveTintColor: 'green',
tabBarInactiveTintColor: 'white',
headerShown: false,
tabBarStyle: {backgroundColor: 'black'},

    })}>
          <Tab.Screen name="Accueil" component={HomeScreen} />
          <Tab.Screen name="Details" component={DetailsScreen} />
          <Tab.Screen name="Favoris" component={FavoritesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
