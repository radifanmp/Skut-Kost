import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import List from './List';


class listMenu extends React.Component{

render() {
    return (
      <ScrollView style={{backgroundColor:'#FFF'}}>

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

export default listMenu