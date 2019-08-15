import * as React from 'react';
import { View, StyleSheet, ScrollView, TextInput, } from 'react-native';
import { Text,  Button, } from 'react-native-paper';

class Daftar extends React.Component{

    render() {
  
        return (
            
            <ScrollView style={{backgroundColor: '#16a085'}}>

            <View style={styles.container}>

                <View style={styles.loginitem}>
                    <Text style={styles.title}>Daftar</Text>
                    
                    <TextInput placeholder="Nama" placeholderTextColor="rgba(255,255,255,0.9)" 
                    style={styles.input} />

                    <TextInput placeholder="Email" placeholderTextColor="rgba(255,255,255,0.9)" 
                    style={styles.input} />

                    <TextInput placeholder="Password" placeholderTextColor="rgba(255,255,255,0.9)"
                    secureTextEntry
                    style={styles.input} />

                    <TextInput placeholder="No Telp" placeholderTextColor="rgba(255,255,255,0.9)"
                    style={styles.input} />

                    <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
                        <Text style={styles.title2}>Daftar</Text>
                    </Button>
                </View>

            </View>

            </ScrollView>
        )

}

}

const styles = StyleSheet.create({
    container: {
      padding: 15,
      flex: 1,
    },

    loginitem: {
      paddingTop: 100,
    },

    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#FFF',
      textAlign: 'center',
      marginBottom: 40,
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.4)',
        marginBottom: 15,
        color: '#FFFFFF',
        borderRadius: 20,
        textAlign: 'center',
    },

    button: {
        borderRadius: 20,
        backgroundColor: '#e67e22',
    },

    title2: {
      fontWeight: 'bold',
      color: '#FFF',
    }
})

export default Daftar