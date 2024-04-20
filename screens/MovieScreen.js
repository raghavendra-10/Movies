import { View, Text, ScrollView, TouchableOpacity, Dimensions, Platform, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { styleTheme } from '../theme';
import { HeartIcon } from 'react-native-heroicons/solid';
import { LinearGradient } from 'expo-linear-gradient';
import Cast from '../components/cast';

var {width,height} = Dimensions.get('window');
// const ios =Platform.OS == 'ios'
// const topMargin = ios ? '' : 'mt-3';
export default function MovieScreen() {
    const {params:item} = useRoute();
    const [cast,setCast] = useState([1,2,3,4,5])
    let movieName = 'Thor love and thunder'
    const [isFavourite,toggleFavourite] = useState(false)
    const navigation = useNavigation();
    useEffect(()=>{

    },[item])
  return (
    <ScrollView 
    contentContainerStyle={{paddingBottom:20}}
    style={{flex:1,backgroundColor:'#18181B'}}
    >
      <View >
        <SafeAreaView style={{position:'absolute',zIndex:20,width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:15}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={{backgroundColor:'#eab308',borderRadius:10,padding:1}}>
                <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> toggleFavourite(!isFavourite)}>
                <HeartIcon size='35'  color={isFavourite ? 'red' : 'white'}/>
            </TouchableOpacity>
        </SafeAreaView>
        <View>
            <Image 
                source={require('../assets/thor.jpg')}
                style={{width,height:height*0.55}}
            />
            <LinearGradient colors={['transparent','rgba(23,23,23,0.8)','rgba(23,23,23,1)']}
                            style={{width,height:height*0.40,position:'absolute',bottom:0}}
                            start={{x:0.5,y:0}}
                            end={{x:0.5,y:1}}
                            
            />
        </View>
      </View>
      <View style={{marginTop:-(height*0.09),display:'flex',flexDirection:'column',gap:10}}>
        <Text style={{color:'white',textAlign:'center',fontSize:24,}}>
            {movieName}
        </Text>
        <Text style={{color:'#A1A1AA',textAlign:'center'}}>
            Released 2020 170mins
        </Text>
        <View style={{display:'flex',gap:10,flexDirection:'row',justifyContent:'center',marginHorizontal:10}}>
            <Text style={{color:'#A1A1AA',textAlign:'center'}}>
                Action 
            </Text>
            <Text style={{color:'#A1A1AA',textAlign:'center'}}>
                Drama 
            </Text>
            <Text style={{color:'#A1A1AA',textAlign:'center'}}>
                Comedy
            </Text>
        </View>
        <Text style={{color:'#A1A1AA',marginHorizontal:10,padding:4}}>
            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </Text>
      </View>
      <Cast cast={cast}/>
    </ScrollView>
  )
}