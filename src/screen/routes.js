import React, {Component} from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Explore from './explore/Explore'; 
import Chat from './chat/Chat';
import Profil from './profil/Profil';
import Wishlist from './wishlist/Wishlist';
import Login from './profil/Login'

const AppNavigator = createStackNavigator({

    Explore: {
      screen: Explore
    },

    Login: {
      screen: Login
    },

    Char: {
      screen: Chat
    },
  
    Profil: {
      screen: Profil
    },

    Wishlist: {
      screen: Wishlist
    }
    
  },
  {
    initialRoutName: 'Explore'
  }
  );

const AppNavigatorr = createAppContainer(AppNavigator)

class index extends Component {
  render(){
    return(
      <AppNavigatorr/>
      )
  }
}



export default index

