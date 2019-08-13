import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Appbar, Searchbar, Button } from 'react-native-paper';


class Profil extends React.Component{

render() {
    return (
    <View>
      <Appbar.Header style={styles.Aheader}>
          <Appbar.Content title={'Profil'}/>
      </Appbar.Header>

      <View style={styles.container}>

            <View style={styles.logoContainer}><Image style={styles.logo}
            source={require('../component/img/login.png')}/>
            </View>

            <View style={styles.button}>
            <Button style={styles.login}  icon="search" mode="contained" onPress={() => console.log('Pressed')}> Login </Button>
            </View>

      </View>


    </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1
  },
  Aheader: {
    backgroundColor: '#16a085',
    fontWeight: 'bold'
  },

  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },

  logo: {
    justifyContent: 'center',
    marginTop: 100
  },

  login: {
    borderRadius: 20,
    width: null,
    height: 40,
    backgroundColor: '#95a5a6',
    opacity: 0.3,
    },

})

export default Profil