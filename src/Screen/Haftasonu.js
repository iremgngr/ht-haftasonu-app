import React from "react";
import {Dimensions, Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View, StyleSheet, FlatList} from "react-native";
import data from "../Data/index.json";
import {imageMapping} from "../Data/resim";

const WindowWidth= Dimensions.get('window').width;
const WindowHeight= Dimensions.get('window').height;

const Haftasonu = ({navigation}) => {

    const getAds = ({item}) => {
         let obj_ad1 = null;
         let obj_ad2 = null;

         if(imageMapping.hasOwnProperty(item.adImages.firstAdImage)){
             obj_ad1 = imageMapping[item.adImages.firstAdImage]
         }

        if(imageMapping.hasOwnProperty(item.adImages.secondAdImage)){
            obj_ad2 = imageMapping[item.adImages.secondAdImage]
        }

         return (
             <View style={{justifyContent:'space-between', alignItems:'center'}}>
                 {obj_ad1 != null ? <Image source={obj_ad1} style={{aspectRatio:1, width:'35%', top:'2%'}} resizeMode={'contain'} /> : null }
                 <Text style={{fontSize:12, fontWeight:"500", marginTop:'2%'}}>{item.lineOptions.title}</Text>
                 {obj_ad2 != null ? <Image source={obj_ad2} style={{aspectRatio:1, width:'35%', bottom:'1%'}} resizeMode={'contain'} /> : null }
             </View>
         );
    }

    const renderItem = ({item}) => {
        let obj = null;
        let obj_cover= null;
        let dimension = '-7.5%'
        let text_Color = 'black';

        if (imageMapping.hasOwnProperty(item.headerImage)) {
            obj = imageMapping[item.headerImage]
            text_Color='black';
        }

        if(imageMapping.hasOwnProperty(item.coverImage)){
            obj_cover = imageMapping[item.coverImage]
            text_Color='white';
            dimension = '0%';
        }

                return (
                    <View style={styles.container}>
                        <View style={{backgroundColor:'#E9D29E', width:'13%', height:'0.4%', position:'absolute', bottom:'50%', right:'0%', zIndex:2}}/>
                        <View style={{backgroundColor:'#E9D29E', width:'13%', height:'0.4%', position:'absolute', bottom:'50%', left:'-5%', zIndex:2}}/>
                        {/*backgroundColor:'#E9D29E', width:'25%', height:'0.5%', opacity:0.7, zIndex:2, left:'-21%', position:'absolute'*/}
                        <View style={{borderWidth:1,}}/>

                        <Text style={styles.texts}>{item.id}</Text>
                        <View style={[styles.newsback, {justifyContent: item.coverImage ? 'flex-end' : 'space-evenly'}]}>

                            {item.type === "ads" ? getAds({ item }) : null}

                            {obj != null ? <Image source={obj} style={{marginTop:'0%', width: '88%', height: '26%'}} resizeMode={'cover'} /> : null}

                            {obj_cover != null ? <Image source={obj_cover} style={{width:'100%', height:'100%', position:'absolute', backgroundColor:'#FFF8EA'}} resizeMode={'cover'} /> : null }

                            {item.videoButton ?  <TouchableOpacity style={{borderWidth:1.8, borderRadius:25, borderColor: text_Color, backgroundColor: 'black', opacity:1, aspectRatio:1, padding:10, justifyContent:'center', alignItems:'center', marginBottom:'20%'}}>
                                <Image source={require('../../assets/videobutton.png')} style={{aspectRatio:1}} resizeMode={'contain'} />
                                </TouchableOpacity> : null}

                            {item.type === "ads" ? null : <Text style={{color:text_Color, fontSize:12, fontWeight:"500"}}>{item.lineOptions.title}</Text>}
                            {item.lineOptions.titleLine ? <View style={[{backgroundColor:text_Color, width:'23%', height:'0.2%', borderRadius:2}, item.coverImage ? {marginBottom:'4%'} : {marginBottom:'-4%'}]}></View> : null }
                            <Text style={{color:text_Color, marginRight:'8%', marginLeft:'8%', fontSize:19, fontWeight:'bold', textAlign:'center'}}>{item.lineOptions.desp}</Text>
                            {item.lineOptions.despLine ? <View style={{backgroundColor:text_Color, width:'40%', height:'0.4%', borderRadius:2}}></View> : null }
                            <Text style={{color:text_Color, textAlign:'center', marginRight:'6%', marginLeft:'6%', fontSize:15}}>{item.desp}</Text>
                            {item.dateTime && item.time ? <Text style={{color:text_Color}}>{item.dateTime} - {item.time}</Text> : null}

                            {item.buttonActive ?
                                <View style={{width:'100%', height:WindowHeight/14, alignItems:'center', marginBottom:dimension}}>
                                <TouchableOpacity style={{borderWidth:0.8, borderColor:text_Color, borderRadius:25, width:'50%', height:'65%', padding:'1%', justifyContent:'center'}}>
                                    <Text style={{color:text_Color, fontSize:15, textAlign:'center'}}> GÖRÜNTÜLE </Text>
                                </TouchableOpacity>
                                </View>
                                : null }
                        </View>
                    </View>
                );
    }

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#FFF8EA'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{alignItems:'center', justifyContent:'space-between', backgroundColor:'white', width:130, height:75, padding:10, borderBottomRightRadius:80, borderBottomLeftRadius:45}}>

                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image style={{width:63, height:35, marginTop:8}} source={require("../../assets/ht_haftasonu.png")}/>
                    </TouchableOpacity>

                </View>
                <View style={{marginTop:26, marginRight:15}}>
                    <Image style={{aspectRatio:1.5, height:18}} source={require("../../assets/Group5821.png")}/>
                </View>
            </View>

            <View style={{alignItems:'center'}}>

                <ImageBackground style={{width:'100%', height:'90%'}} resizeMode={"contain"} source={require("../../assets/Group5960.png")}>
                    <View style={{width:'100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                        <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    data={data.body.items}
                                    keyExtractor={(item) => item.id}
                                    renderItem={({ item, index }) => renderItem({ item, index })}
                                    horizontal={true}>
                        </FlatList>
                    </View>

                </ImageBackground>

                <Text style={{textAlign:'center', fontSize:10, marginTop:10}}>Copyright © 2020 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.</Text>

            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container:{
        width:WindowWidth/1.1,
        height:WindowHeight/1.3,
        alignItems:'center',
        justifyContent:'flex-end',
        marginTop:'14.5%',
    },

    newsback:{
        width:WindowWidth/1.3,
        height:WindowHeight/1.5,
        backgroundColor:'white',
        position:'absolute',
        zIndex:1,
        bottom:'9%',
        left:'6%',
        alignItems:'center'
    },

    news:{
        width:WindowWidth/1.3,
        height:WindowHeight/1.5,
        backgroundColor:'white',
        position:'absolute',
        zIndex:1,
        bottom:'8%',
        left:'3%'
    },

    texts:{
        fontSize:70,
    },

});

export default Haftasonu;

