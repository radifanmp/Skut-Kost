import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Appbar, Searchbar } from 'react-native-paper';



class Chat extends React.Component{

render() {
    return (
      <Appbar.Header style={styles.Aheader}>
          <Appbar.Content title={'Chat'}/>
      </Appbar.Header>
    )
  }

}

const styles = StyleSheet.create({
  Aheader: {
    backgroundColor: '#16a085',
  },
})

export default Chat