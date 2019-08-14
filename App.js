import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { BottomNavigation, Provider, DefaultTheme, Colors} from 'react-native-paper';



//Screen
import Chat from './src/screen/chat/Chat';
import Explore from './src/screen/explore/Explore';
import Profil from './src/screen/profil/Profil';
import Wishlist from './src/screen/wishlist/Wishlist';
import routes from './src/screen/routes';


//Navigasi
export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'Explore', title: 'Home', icon: 'home' },
      { key: 'Wishlist', title: 'Wishlist', icon: 'star-border' },
      { key: 'Chat', title: 'Chat', icon: 'question-answer' },
      { key: 'Profil', title: 'Profil', icon: 'face' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({

    //name key : name componen/class
    
    Login : routes,
    Explore: Explore,
    Chat: Chat,
    Profil: Profil,
    Wishlist: Wishlist,
    
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