import * as React from 'react';
import { View, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import { Text,  Button, } from 'react-native-paper';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

class IklanForm extends React.Component{

    render() {

        var jenis_kost = [
            {label: 'Campur', value: 0 },
            {label: 'Laki-laki', value: 1 },
            {label: 'Perempuan', value: 2 }
          ];

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

                    <RadioForm
                    radio_props={jenis_kost}
                    buttonColor={'#16a085'}
                    formHorizontal={true}
                    buttonSize={13}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                    />

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

    input: {
        height: 40,
        backgroundColor: '#95a5a6',
        opacity: 0.3,
        marginBottom: 15,
        color: '#FFFFFF',
        borderRadius: 20,
        textAlign: 'left',
    },

    button: {
        borderRadius: 20,
        backgroundColor: '#e67e22',
    },

    title2: {
      fontWeight: 'bold',
      color: '#FFF',
    },

    Searchbar: {
        borderRadius: 20,
        width: null,
        height: 40,
        marginTop: 10,
        backgroundColor: '#95a5a6',
        opacity: 0.3,
        },

    latlong: {
        height: 40,
        backgroundColor: '#95a5a6',
        opacity: 0.3,
        marginBottom: 15,
        color: '#FFFFFF',
        borderRadius: 20,
        textAlign: 'center',
        width: 150,
        marginRight: 30
    }
})

export default IklanForm