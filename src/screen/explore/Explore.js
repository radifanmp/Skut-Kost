import React, {Component} from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Text, Appbar,Button  } from 'react-native-paper';
import Slideshow from 'react-native-slideshow';
import Kota from './Kota';


const city = [
    {
    name: 'Jakarta',
    url: 'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/5436_monas-pada-malam-hari-foto-wisatamucom.jpg',
    },
    {
        name: 'Bogor',
        url: 'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/5436_monas-pada-malam-hari-foto-wisatamucom.jpg',
    },
]

class Explore extends Component{

constructor(props) {
  super(props);

  this.state = {
    position: 1,
    interval: null,
    dataSource: [
      {
        url: 'https://static.mamikos.com/uploads/cache/data/user/2019-05-03/odhbQ7NP-360x480.jpg',
      },

      {
        url: 'https://static.mamikos.com/uploads/cache/data/user/2019-07-31/z2algAvh-360x480.jpg',
      },

      {
        url: 'https://static.mamikos.com/uploads/cache/data/user/2019-02-06/tYYKBgjd-360x480.jpg',
      },

    ],
    data: city
  }
}

componentWillMount(){
  this.setState({
    interval: setInterval(() => {
      this.setState({
      position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
    });
  }, 3000)
  });
}

componentWillUnmount(){
  clearInterval(this.state.interval);
}

static navigationOptions = {
  header: null
}

render() {
    
    return (

      <ScrollView style={{backgroundColor: '#FFFF'}}>

        <Appbar.Header style={styles.Aheader}>
        <Appbar.Content title={'Skut Kost'} style={styles.title}/>
        </Appbar.Header>

      <View style={styles.container}>

        
        <View>
        <Button style={styles.Searchbar}  icon="search" mode="contained" onPress={() => console.log('Pressed')}> Search </Button>
        </View>

        <View>
          <Text style={styles.tag}>Promo</Text>
          <Slideshow 
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({position})}
            arrowSize={0}
            height={200}

          />
        </View>

        

        <View style={{flexDirection:'row', alignItems: 'space-between', height: 30, marginVertical: 30}}>
          <View style={{flexDirection:'row', alignItems: 'space-between', position: 'absolute'}}>
          <Text style={styles.tag}>Tertarik mengiklankan Kostmu ? </Text>
          <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
          <Text style={{color: 'white'}}> Pasang Iklan </Text> </Button>
          </View>
        </View>

        <View>
          <Text style={styles.tag}>Popular Cities</Text>
            <Kota/>
        </View>

      </View>
      </ScrollView>
      
    )
  }
}

const styles = StyleSheet.create({

container: {
padding: 15,
},

slide: {
    borderRadius: 20
},

Aheader: {
backgroundColor: '#16a085',
fontWeight: 'bold',
},

title : {
alignItems: 'center',
},

tag : {
fontSize: 15,
fontWeight: 'bold',
paddingVertical: 10,
color: '#16a085'
},

Searchbar: {
borderRadius: 20,
width: null,
height: 40,
marginTop: 10,
backgroundColor: '#95a5a6',
opacity: 0.3,
},

line: {
  backgroundColor: 'silver',
  height: 10,
  padding: 0,
  marginTop: 20
},

button: {
  borderRadius: 20,
  width: 130,
  marginTop: 10,
  backgroundColor: '#e67e22',
  marginHorizontal: 20,
  },
});

export default Explore