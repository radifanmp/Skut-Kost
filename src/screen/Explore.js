import React, {Component} from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Text, Appbar, Searchbar } from 'react-native-paper';
import Slideshow from 'react-native-slideshow';

const data = [
    {

}
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
    data: data
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
    return (
      <View style={styles.container}>
          <Appbar.Header style={styles.Aheader}>
            <Appbar.Content title={'KOST SKUY'} style={styles.title}/>
          </Appbar.Header>

        <View>
        <Searchbar style={styles.Searchbar} placeholder="Search"  />
        </View>

        <View>
          <Text>Promo</Text>
          <Slideshow 
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({position})}
            arrowSize={0}
            height={150}
          />
        </View>

      </View>
      
      
    )
  }
}

const styles = StyleSheet.create({

container: {
flex: 1,
},

Aheader: {
backgroundColor: '#16a085',
},

title : {
alignItems: 'center',
},

Searchbar: {
borderRadius: 20,
width: null,
height: 40,
marginHorizontal : 30,
marginTop: 10,
backgroundColor: '#95a5a6',
opacity: 0.3
}
});



export default Explore