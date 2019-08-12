import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { BottomNavigation, Provider, DefaultTheme, Colors} from 'react-native-paper';



//Screen
import Chat from './src/screen/Chat';
import Explore from './src/screen/Explore';
import Profil from './src/screen/Profil';
import Wishlist from './src/screen/Wishlist';


//Navigasi
export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'explore', title: 'Home', icon: 'home' },
      { key: 'wishlist', title: 'Wishlist', icon: 'favorite-border' },
      { key: 'chat', title: 'Chat', icon: 'question-answer' },
      { key: 'profil', title: 'Profil', icon: 'face' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({

    //name key : name componen/class

    explore: Explore,
    chat: Chat,
    profil: Profil,
    wishlist: Wishlist,
  });

  render() {
    return (
      <Provider theme={theme}>

        <View>
        <StatusBar backgroundColor="#1abc9c" barStyle="light-content" />
        </View>
        
        <BottomNavigation
          shifting={false}
          activeColor= "#1abc9c"
          inactiveColor = "silver"
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
        />

      </Provider>
    );
  } 
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.white
  }
}