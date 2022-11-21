import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import NewScreen from './src/screens/NewScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Find Care"
          component={NewScreen}
          options={{
            title: 'Find Care®',
            headerRight: () => (
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  name="ios-chatbubbles-outline"
                  size={26}
                  onPress={() => alert('This is a chat!')}
                />
                <EvilIcons
                  name="search"
                  size={32}
                  onPress={() => alert('This is a search!')}
                />
              </View>
            ),
          }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
