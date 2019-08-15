import React,{Component} from "react";
import { Content,Card, CardItem, Thumbnail,Text, Image } from "native-base";



const dataAtas =[
    
    {
        nama:"Jakarta",
        gambar : "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/bobofoto/original/5436_monas-pada-malam-hari-foto-wisatamucom.jpg"
    },
    {
        nama:"Bandung",
        gambar : "https://matalelaki.com/media/81/0d/e3/810de365faa92fcc76a6e5656cc170ce.jpg"
    },
    {
        nama:"Yogyakarta",
        gambar : "https://s3-ap-southeast-1.amazonaws.com/traveloka/imageResource/2018/12/10/1544412660735-aeface5904e4948ee6468eaec91784a1.jpeg"
    },
    {
        nama:"Makasar",
        gambar : "https://pbs.twimg.com/media/Dl_pEqeU4AAwcLk.jpg:large"
    },
    {
        nama:"Medan",
        gambar : "http://3.bp.blogspot.com/-mUDiWwbr7kk/T_vSUCcdCRI/AAAAAAAAAE0/xZj5KpTzSaw/s1600/istana_maimun+safari+and+indotour.jpg"
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