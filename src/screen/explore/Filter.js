import * as React from 'react';
import { View, StyleSheet, TextInput, Image, Text,   } from 'react-native';
import { Button, } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Modal from "react-native-modal";


class Filter extends React.Component{


render() {
    return (
        <ScrollView>

        <View>
            
            <View>

                <TextInput placeholder="Nama Kost" placeholderTextColor="black" 
                style={styles.input} />

                <TextInput placeholder="Alamat Kost" placeholderTextColor="black"
                style={styles.input} />

                <Text>Search alamat/area kost anda di Peta, kemudian pindahkan pin di Peta ke lokasi tepat kost anda</Text>

                <View>
                <Button style={styles.Searchbar}  icon="search" mode="contained" onPress={() => console.log('Pressed')}> Search </Button>
                </View>
                
                <View style={{width: null, height: 200, marginBottom: 35, marginTop: 10}}>
                <Text>Copas Mapsnya Disini</Text>
                <Image source= {{uri: 'http://somersfamily.net/Lawrence/images/williamsburg/maps/bedford2.JPG'}}
                style={{width: null, height: 200, borderRadius: 15}}/>
                </View>


                <View style={{flexDirection: 'row', alignItems: 'space-between' }}>
                <TextInput placeholder="Latitude" placeholderTextColor="black"
                style={styles.latlong} />

                <TextInput placeholder="Longitude" placeholderTextColor="black"
                style={styles.latlong} />
                </View>

                <TextInput placeholder="Pengelola Kost" placeholderTextColor="black"
                style={styles.input} />

                <TextInput placeholder="No.Hp Pengelola Kost" placeholderTextColor="black"
                style={styles.input} />

                <TextInput placeholder="Harga Bulanan" placeholderTextColor="black"
                style={styles.input} />


                <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
                    <Text style={styles.title2}>Pasang Iklan</Text>
                </Button>

            </View>

        </View>


        </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  Aheader: {
    backgroundColor: '#16a085',
  },
})

export default Filter