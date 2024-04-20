import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { image185 } from '../api/moviedb'

export default function Cast({cast,navigation}) {
    let personName = 'Chris Hemsworth'
    let characterName = 'Thor Odinson'
  return (
    <View style={{marginVertical:10}}>
      <Text style={{color:'white',fontSize:20,marginHorizontal:10,marginBottom:5}}>Top Cast</Text>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:15}}
      >
        {
            cast && cast.map((person,index)=>{
                return(
                    <TouchableOpacity key={index} onPress={()=> navigation.navigate('Person',person)} style={{marginRight:4,alignItems:'center',justifyContent:'space-between'}}>
                        <View style={{overflow:'hidden',borderRadius:50,height:95,width:95,alignItems:'center'}}>
                        <Image 
                         source={{uri:image185(person?.profile_path)}}
                         style={{height:115,width:103,borderRadius:14}}

                        />
                        </View>
                        <Text style={{color:'white',fontSize:10,marginTop:4}}>
                            {
                                person?.character.length>10 ? person?.character.slice(0,10)+"...":person?.character
                            }
                        </Text>
                        <Text style={{color:'#A1A1AA',fontSize:10,marginTop:4}}>
                            {
                                person?.original_name.length>10 ? person?.original_name.slice(0,10)+"...":person?.original_name
                            }
                        </Text>
                    </TouchableOpacity>
                )
            })
        }
      </ScrollView>
    </View>
  )
}