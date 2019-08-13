import React, {Component} from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import { Text, Appbar,Button  } from 'react-native-paper';
import Slideshow from 'react-native-slideshow';


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

render() {
    
// let screenWidth = Dimensions.get('window').width;
// let screenHeight = Dimensions.get('window').height;
    return (

    <View>

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

        <View>
          <Text style={styles.tag}>Popular Cities</Text>
          <ScrollView horizontal={true} >
            <FlatList
            data={this.props.data}
            extraData={this.state}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            />
            </ScrollView>
        </View>

      </View>
    </View>

      
      
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
}
});

export default Explore