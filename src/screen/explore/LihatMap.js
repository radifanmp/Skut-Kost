import React, { Component } from 'react';
import {View,Text, Content} from 'native-base';

export default class LihatMap extends Component
{
    render()
        {
            return(
                <Content style={{backgroundColor:'white'}}>
                     <View>
                        <Text>Map</Text>
                    </View>
                </Content>
            );
        }
}