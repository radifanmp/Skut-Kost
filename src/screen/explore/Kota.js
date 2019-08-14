import React,{Component} from "react";
import { Content,Card, CardItem, Thumbnail,Text, Image } from "native-base";



const dataAtas =[
    
    {
        nama:"Jakarta",
        gambar : "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/5436_monas-pada-malam-hari-foto-wisatamucom.jpg"
    },
    {
        nama:"Bandung",
        gambar : "https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        nama:"Yogyakarta",
        gambar : "https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        nama:"Makasar",
        gambar : "https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        nama:"Medan",
        gambar : "https://images.pexels.com/photos/908284/pexels-photo-908284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
]
export default class Kota extends Component{
    render(){
        return(
            <Content horizontal>
                {dataAtas.map((data,index)=>{
                return(
                <Card key={index} style={{ borderRadius:10}} transparent>
                        <CardItem style={{flexDirection:"column", height: 250, width:160, borderRadius:10, }}>
                        <Thumbnail style={{height: 200, width: 150, flexDirection: "row"}} source={{uri:data.gambar}}/>
                        <Text style={{marginTop: 15}}>{data.nama}</Text>
                    </CardItem>
                </Card>
                    )
                })}
               
            </Content>
        );
    }
}