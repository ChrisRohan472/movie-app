import React from 'react';
import { Tab, Text, TabView } from '@rneui/themed';
import SwitchComponent from "./search.js"
import MovieList from "./MovieList.js"
export default App=() => {
const [index, setIndex] = React.useState(0);
const movies = [
  {
    title: 'Movie 1',
    poster: 'https://example.com/poster1.jpg',
    releaseDate: '2023-01-01',
    averageRating: 4.5,
  },
  {
    title: 'Movie 2',
    poster: 'https://example.com/poster2.jpg',
    releaseDate: '2023-02-01',
    averageRating: 3.8,
  },
  // Add more movie data as needed
];
return (
  <>
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 3,
      }}
      variant="primary"
    >
      <Tab.Item
        title="Now Playing"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'timer', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Popular"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'star', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="Top Rated"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'star', type: 'ionicon', color: 'white' }}
      />
        <Tab.Item
        title="Upcoming"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'search', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        title="search"
        titleStyle={{ fontSize: 12 }}
        icon={{ name: 'search', type: 'ionicon', color: 'white' }}
      />
    </Tab>
    
    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{ backrgroundColor: 'red', width: '100%' }}>
      <MovieList data={movies} />
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
      <MovieList data={movies} />
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
      <MovieList data={movies} />
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
      <MovieList data={movies} />
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
      <SwitchComponent/>
      </TabView.Item>
      
    </TabView>
  </>
);
};