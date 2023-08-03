import React from "react";
import {Image, Text, View, SafeAreaView, ImageBackground, StatusBar, TouchableOpacity, Dimensions} from "react-native";

const WindowWidth= Dimensions.get('window').width;
const WindowHeight= Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {
    return(
        <SafeAreaView style={{flex:1, backgroundColor:'#FFF8EA'}}>
            <StatusBar/>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{alignItems:'center', justifyContent:'space-between', backgroundColor:'white', width:130, height:75, padding:10, borderBottomRightRadius:80, borderBottomLeftRadius:45}}>
                    <Image style={{width:63, height:35, marginTop:8}} source={require("../../assets/ht_haftasonu.png")}/>
                </View>
                <View style={{marginTop:26, marginRight:15}}>
                    <Image style={{aspectRatio:1.5, height:18}} source={require("../../assets/Group5821.png")}/>
                </View>
            </View>

                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <ImageBackground style={{aspectRatio:1}} source={require("../../assets/Group5960.png")}>
                        <View style={{justifyContent:'center', alignItems:'center', marginTop:60}}>
                            <Image style={{width:'65%', height:'65%'}} resizeMode={'contain'} source={require("../../assets/Group5842.png")}/>
                            <View style={{flexDirection:'row', alignItems:'center', width:'65%'}}>
                                <TouchableOpacity onPress={() => navigation.navigate("Haftasonu")}>
                                    <Text style={{borderWidth:1.5, borderColor:'#E9D29E', fontSize:18, borderRadius:25, padding:5, fontWeight:'bold'}}>  görüntüle  </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("Haftasonu")} style={{borderWidth:1.5, borderRadius:40, borderColor:'#E9D29E', marginLeft:10, height:35, width:35, alignItems:'center', justifyContent:'center',}}>
                                    <Image style={{aspectRatio:1}} resizeMode={"contain"} source={require("../../assets/siyah-ok.png")}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <Text style={{textAlign:'center', fontSize:10, marginTop:'25%'}}>Copyright © 2020 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.</Text>
        </SafeAreaView>
    )
}

export default HomeScreen;
