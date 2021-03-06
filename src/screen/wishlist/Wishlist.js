import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Appbar, Searchbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import List from './List';


class Wishlist extends React.Component{

render() {
    return (
      <ScrollView style={{backgroundColor:'#FFF'}}>

      <Appbar.Header style={styles.Aheader}>
          <Appbar.Content title={'Wishlist'}/>
      </Appbar.Header>

      <List/>

      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  Aheader: {
    backgroundColor: '#16a085',
  },
})

export default Wishlist