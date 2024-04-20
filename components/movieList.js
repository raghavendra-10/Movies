import { View, Text, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image, Dimensions } from 'react-native'
import React from 'react'
import { styleTheme } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { image185 } from '../api/moviedb'

var { width, height } = Dimensions.get('window')
export default function MovieList({ title, data, hideSeeAll }) {

    const navigation = useNavigation();
    return (
        <View style={{ marginBottom: 10 }}>
            <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 20 }}>
                    {title}
                </Text>
                {
                    !hideSeeAll && (
                        <TouchableOpacity>
                            <Text style={styleTheme.text}>See All</Text>
                        </TouchableOpacity>
                    )
                }

            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 15 }}>
                {data.map((item, index) => {

                    return (
                        <TouchableWithoutFeedback key={index} onPress={() => navigation.push('Movie', item)}>
                            <View style={{ marginRight: 4 }}>
                                <Image source={{ uri: image185(item.poster_path) }}
                                    style={{ width: width * 0.33, height: height * 0.22 }}
                                />
                                <Text style={{ color: 'white' }}>
                                    {item.title && item.title.length > 14 ? `${item.title.slice(0, 14)}...` : item.title}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
            </ScrollView>
        </View>
    )
}