import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { Button  } from 'react-native-paper';
import LihatMap from './LihatMap';
import LihatDaftar from './LihatDaftar';

export default class List extends Component {
  render() {
    return (
      <Container>
         
        <View style={{backgroundColor: '#16a085'}}>
        <Button style={styles.Searchbar}  icon="search" mode="contained" onPress={() => console.log('Pressed')}> Search </Button>
        </View>  

        <Tabs>
              <Tab heading={ <TabHeading style={{backgroundColor: '#16a085', }}><Icon name="map"/><Text>Maps</Text></TabHeading>}>
                <LihatMap/>
              </Tab>
              <Tab  heading={ <TabHeading style={{backgroundColor: '#16a085',}}><Icon name="home"/><Text >Daftar Kost</Text></TabHeading>}>
                <LihatDaftar/>
              </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

Searchbar: {
    borderRadius: 20,
    width: null,
    height: 40,
    marginTop: 10,
    marginBottom: 10, 
    backgroundColor: '#FFF',
    opacity: 0.5
    },

})