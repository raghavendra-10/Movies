import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function Cast({cast}) {
    let personName = 'Keanu Reevs'
    let characterName = 'John Wick'
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
                    <TouchableOpacity key={index} style={{marginRight:4,alignItems:'center',justifyContent:'space-between'}}>
                        <View style={{overflow:'hidden',borderRadius:50,height:70,width:70,alignItems:'center'}}>
                        <Image 
                         source={require('../assets/icon.png')}
                         style={{height:85,width:73,borderRadius:14}}

                        />
                        </View>
                        <Text style={{color:'white',fontSize:10,marginTop:4}}>
                            {
                                characterName.length>10 ? characterName.slice(0,10)+"...":characterName
                            }
                        </Text>
                        <Text style={{color:'#A1A1AA',fontSize:10,marginTop:4}}>
                            {
                                personName.length>10 ? personName.slice(0,10)+"...":personName
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