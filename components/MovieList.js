// MovieList.js
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import axios from "axios";
import Toast from 'react-native-toast-message';

const MovieItem = ({ movie }) => {
  return (
    <View style={styles.movieItem}>
      <Image source={{ uri: "https://image.tmdb.org/t/p/w500"+movie.poster_path }} style={styles.poster} />
      <Text style={styles.title}>{movie.original_title}</Text>
      <Text style={styles.releaseDate}>Release Date: {movie.release_date}</Text>
      <Text style={styles.rating}>Average Rating: {movie.vote_average}</Text>
    </View>
  );
};

const MovieList = ({ type }) => {
  const [movies, setMovies] = React.useState({});
  const [error, setError] = React.useState(null);
  const showToast = (message) => {
    Toast.show({
      type: 'error', // or 'error', 'info', 'warn'
      text1: 'Toast Message',
      text2: message,
    });
  };
  const setUrl = (type) => {
   let uri;
    switch(type)
    {
      case "now":
        uri="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
        break;
      case "top":
          uri="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
          break;
      case "upcoming":
          uri="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
          break;
      case "popular":
          uri="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
          break;
    }
    console.log(uri)
    const options = {
      method: 'GET',
      url: uri,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDM1MGU1MzhkYjJjZTEzY2U3MTc0MmE4M2FlYWExZCIsInN1YiI6IjY1OTc2NzZhMGU2NGFmMjMwMzhjMWExZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aNPvajbn3R3WP-b0wHYdBn0vZk0HHtIn4LZDXx8Co1M'
      }
    };
    return options;
  }; 

React.useEffect(() => {
axios
  .request(setUrl(type))
  .then(function (response) {
    console.log(response.data)
    setMovies(response.data.results)
  })
  .catch(function (error) {
    setError(error);
    showToast('error');

  });
}, []); // Empty dependency array means the effect runs once after the initial render

  return ( 
 
    <FlatList
      data={movies}
      keyExtractor={(item) => item.original_title}
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
