import React from 'react';
import { Tab, Text, TabView,Divider } from '@rneui/themed';
import {View,StatusBar} from 'react-native';
import SwitchComponent from "./search.js"
import MovieList from "./components/MovieList.js"
export default App=() => {
const [index, setIndex] = React.useState(0);
return (
  <View
  style={{ flex: 1, marginTop: StatusBar.currentHeight }}
  >
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
      <MovieList  type={"now"}/>
      </>
      </TabView.Item>
      <TabView.Item style={{  width: '100%' }}>
      <>
        <Text h3>Top Rating</Text>
        <Divider style={{ backgroundColor: 'black',margin:3 }} />
      <MovieList  type={"top"} />
      </>
      </TabView.Item>
      <TabView.Item style={{  width: '100%' }}>
      <>
        <Text h3>Upcoming Movies</Text>
        <Divider style={{ backgroundColor: 'black',margin:3 }} />
      <MovieList  type={"upcoming"}/>
      </>
      </TabView.Item>
      <TabView.Item style={{ width: '100%' }}>
      <>
        <Text h3>Poular Movies</Text>
        <Divider style={{ backgroundColor: 'black',margin:3 }} />
      <MovieList type={"popular"}/>
      </>
      </TabView.Item>
      <TabView.Item style={{width: '100%' }}>
      <SwitchComponent/>
      </TabView.Item>
      
    </TabView>
    </View>
);
};