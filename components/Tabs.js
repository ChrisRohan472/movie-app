import React from 'react';
import { Tab, Text, TabView,Divider } from '@rneui/themed';
import {View,StatusBar} from 'react-native';
import SwitchComponent from "./search.js"
import MovieList from "./MovieList.js"
export default Tabs=({navigation}) => {
const [index, setIndex] = React.useState(0);
return (
  <>
    <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'white',
        height: 5
      }}
      variant="primary"
    >
      <Tab.Item
        icon={{ name: 'timer-outline', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        icon={{ name: 'star-outline', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        icon={{ name: 'flame-outline', type: 'ionicon', color: 'white' }}
      />
        <Tab.Item
        icon={{ name: 'heart-outline', type: 'ionicon', color: 'white' }}
      />
      <Tab.Item
        icon={{ name: 'search', type: 'ionicon', color: 'white' }}
      />
    </Tab>
    
    <TabView value={index} onChange={setIndex} animationType="spring">
      <TabView.Item style={{  width: '100%' }}>
        <>
        <Text h3>Now Playing</Text>
        <Divider style={{ backgroundColor: 'black',margin:3 }} />
      <MovieList  type={"now"}  navigation={navigation}/>
      </>
      </TabView.Item>
      <TabView.Item style={{  width: '100%' }}>
      <>
        <Text h3>Top Rating</Text>
        <Divider style={{ backgroundColor: 'black',margin:3 }} />
      <MovieList  type={"top"}  navigation={navigation}/>
      </>
      </TabView.Item>
      <TabView.Item style={{  width: '100%' }}>
      <>
        <Text h3>Upcoming Movies</Text>
        <Divider style={{ backgroundColor: 'black',margin:3 }} />
      <MovieList  type={"upcoming"} navigation={navigation}/>
      </>
      </TabView.Item>
      <TabView.Item style={{ width: '100%' }}>
      <>
        <Text h3>Popular Movies</Text>
        <Divider style={{ backgroundColor: 'black',margin:3 }} />
      <MovieList type={"popular"}  navigation={navigation}/>
      </>
      </TabView.Item>
      <TabView.Item style={{width: '100%' }}>
      <><SwitchComponent/></>
      </TabView.Item>
      
    </TabView>
    </>
);
};