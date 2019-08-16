import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Appbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import IklanForm from './IklanForm'



class PasangIklan extends React.Component{

render() {
    return (

      <ScrollView style={{backgroundColor: '#FFF'}}>
        
      <Appbar.Header style={styles.Aheader}>
          <Appbar.Content title={'Tambah Data Iklan'}/>
      </Appbar.Header>

      <View style={styles.container}>
            <IklanForm/>
      </View>

      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  Aheader: {
    backgroundColor: '#16a085',
  },

  container: {
    padding: 15,
    },
})

export default PasangIklan