// MovieList.js
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const MovieItem = ({ movie }) => {
  return (
    <View style={styles.movieItem}>
      <Image source={{ uri: movie.poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.releaseDate}>Release Date: {movie.releaseDate}</Text>
      <Text style={styles.rating}>Average Rating: {movie.averageRating}</Text>
    </View>
  );
};

const MovieList = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => <MovieItem movie={item} />}
    />
  );
};

const styles = StyleSheet.create({
  movieItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  poster: {
    width: 100,
    height: 150,
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 4,
  },
  rating: {
    fontSize: 16,
  },
});

export default MovieList;
