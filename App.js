import * as React from 'react';
import { StatusBar, View } from 'react-native';
import { BottomNavigation, Provider, DefaultTheme, Colors} from 'react-native-paper';



//Screen
import Chat from './src/screen/chat/Chat';
import Profil from './src/screen/profil/Profil';
import Wishlist from './src/screen/wishlist/Wishlist';
import Index from './src/screen/routes';
import PasangIklan from './src/screen/explore/PasangIklan'
// import Login from './src/screen/profil/Login'
// import Daftar from './src/screen/profil/Daftar'
// import Filter from './src/screen/explore/Filter'
import listBooking from './src/screen/explore/listBooking'
import ModalTester from './src/screen/explore/ModalTester'


//Navigasi
export default class App extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'Index', title: 'Home', icon: 'home' },
      { key: 'Wishlist', title: 'Wishlist', icon: 'star-border' },
      { key: 'PasangIklan', title: 'Chat', icon: 'question-answer' },
      { key: 'Profil', title: 'Profil', icon: 'face' },
      { key: 'listBooking', title: 'Demo', icon: 'face' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({

    //name key : name componen/class
    
    Index: Index,
    PasangIklan: PasangIklan,
    Profil: Profil,
    Wishlist: Wishlist,
    listBooking: listBooking
    
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