import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Appbar, Searchbar } from 'react-native-paper';


class Profil extends React.Component{

render() {
    return (
      <Appbar.Header style={styles.Aheader}>
          <Appbar.Content title={'Profil'}/>
      </Appbar.Header>
    )
  }

}

const styles = StyleSheet.create({
  Aheader: {
    backgroundColor: '#16a085',
  },
})

export default Profil