import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import Favorite from './Favorite.js';
import Dilihat from './Dilihat.js';

export default class List extends Component {
  render() {
    return (
      <Container>
        <Tabs>
              <Tab heading={ <TabHeading style={{backgroundColor: '#f1f2f6', }}><Icon name="heart" style={{color: '#16a085'}}/><Text style={{color: '#16a085'}}>Favorite</Text></TabHeading>}>
                <Favorite/>
              </Tab>
              <Tab  heading={ <TabHeading style={{backgroundColor: '#f1f2f6',}}><Icon name="list" style={{color: '#16a085'}}/><Text style={{color: '#16a085'}}>Dilihat</Text></TabHeading>}>
                <Dilihat/>
              </Tab>
        </Tabs>
      </Container>
    );
  }
}