import React, { Component } from 'react';
import {View, Text,Content} from 'native-base';

export default class LihatDaftar extends Component
{
    render()
        {
            return(
                <Content style={{backgroundColor:'white'}}>
                     <View>
                        <Text>Daftar Kost</Text>
                    </View>
                </Content>
            );
        }
}