import { View, Text,StyleSheet,Image } from 'react-native';

const Movie = ({ route }) => {
  const  movie=route.params
  return (
    <View style={styles.movieItem} >
      <Text h1 style={styles.title}>{movie.original_title}</Text>
      <Image source={{ uri: "https://image.tmdb.org/t/p/w500"+movie.poster_path }} style={styles.poster} testID="poster-image" />
      <Image source={{ uri: "https://image.tmdb.org/t/p/w500"+movie.backdrop_path}} style={styles.poster}  testID="backdrop-image" />
      <Text style={styles.releaseDate}><Text style={styles.baseText}>Release Date: </Text>{movie.release_date}</Text>
      <Text style={styles.rating}><Text style={styles.baseText}>Average Rating: </Text>{movie.vote_average}</Text>
      <Text style={styles.releaseDate}><Text style={styles.baseText}>Vote Count: </Text> {movie.vote_count}</Text>
      <Text style={styles.rating}><Text style={styles.baseText}>Overview : </Text> {movie.overview}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
  },
  movieItem: {
    flex:1,
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 4,
  },
  rating: {
    fontSize: 16,
    marginBottom: 4,
  },
});
export default Movie;