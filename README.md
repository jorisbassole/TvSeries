# Series_Native

Ce projet est une application mobile React Native avec Expo qui utilise l'API de The Movie Database (TMDb) pour afficher des séries TV. 
L'application comprend un tab Navigator avec une page d'accueil, une page de favoris, et la possibilité d'afficher des détails sur une série TV. 
Les utilisateurs peuvent également ajouter et supprimer des séries TV dans leur liste de favoris.

## Installation

1. **Cloner le Répertoire:**

    git clone https://github.com/jorisbassole/Series_Native.git

2. **Installer les Dépendances:**

   $ yarn install
   $ npm install


## Utilisation

1. **Démarrer l'Application:**

   $ yarn start
   $ npm start
   
    Suivez les instructions pour lancer l'application sur un émulateur, un appareil physique, ou via Expo Go.

## Fonctionnalités

- **Page d'Accueil:** Affiche les séries TV à partir de l'API TMDb avec possibilité de filtrer par recherche.
- **Détails:** Page détaillée pour chaque série TV. 
- **Favoris:** Page affichant les séries TV ajoutées aux favoris.

## Structure du Projet

- **src/components:** Composant de l'item de ma série.
- **src/reducers:** Actions Redux pour l'API et les favoris.
- **src/screens:** Composants pour chaque écran de l'application (détails,favoris,accueil) .

## Dépendances Principales

- [React Navigation](https://reactnavigation.org/): Gestion de la navigation.
- [Redux](https://redux.js.org/): Gestion de l'état global de l'application.
- [Expo](https://expo.io/): Infrastructure pour le développement React Native.

## Auteur

- Joris Bassole


