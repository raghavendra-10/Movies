import { View, Text, Dimensions, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { XMarkIcon } from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'
import { Load } from '../components/loading'

const { width, height } = Dimensions.get('window')
export default function SearchScreen() {
    const navigation = useNavigation()
    const [results, setResults] = useState([1, 2])
    const [loader, setLoading] = useState(false)
    let movieName = 'Thor love and thunder'
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#18181B' }}>
            <View style={{ margin: 10, marginVertical: 10, marginBottom: 10, display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', borderColor: '#71717A', borderRadius: 50, borderWidth: 1 }}>
                <TextInput
                    placeholder='Search your favourite movie here . . . '
                    placeholderTextColor={'lightgray'}
                    style={{ padding: 10, color: 'white' }}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{ borderRadius: 50, padding: 3, backgroundColor: '#71717A', letterSpacing: 1 }}
                >
                    <XMarkIcon size='43' color='white' />
                </TouchableOpacity>
            </View>
            {loader ? (<Load />) :

                results.length > 0 ? (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: 15 }}

                    >
                        <Text style={{ color: 'white', marginLeft: 4 }}>Results ({results.length})</Text>
                        <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                            {
                                results.map((item, index) => {
                                    return (
                                        <TouchableWithoutFeedback key={index} onPress={() => navigation.push('Movie', item)}>
                                            <View style={{ marginVertical: 8, marginBottom: 8 }}>
                                                <Image
                                                    source={require('../assets/thor.jpg')}
                                                    style={{ width: width * 0.44, height: height * 0.3, borderRadius: 20 }}
                                                />
                                                <Text style={{ color: '#D4D4D8', marginLeft: 4, textAlign: 'center' }}>
                                                    {movieName.length > 22 ? movieName.slice(0, 24) + '...' : movieName}
                                                </Text>
                                            </View>

                                        </TouchableWithoutFeedback>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                ) : (
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: 200 }}>
                        <Image source={require('../assets/cartoon.jpg')}
                            style={{ width: 300, borderRadius: 20, height: 200 }}
                        />
                    </View>
                )

            }


        </SafeAreaView>
    )
}