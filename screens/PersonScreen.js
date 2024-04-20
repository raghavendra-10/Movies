import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useNavigation, useRoute } from '@react-navigation/native';
import MovieList from '../components/movieList';
import { Load } from '../components/loading';
import { fetchPersonDetails, fetchPersonMovies, image342 } from '../api/moviedb';


var { width, height } = Dimensions.get('window');
export default function PersonScreen() {
    const {params: item} = useRoute();
    const navigation = useNavigation();
    const [isFavourite, toggleFavourite] = useState(false)
    const [loader, setLoading] = useState(false)
    const [personMovies, setPersonMovies] = useState([])
    const [person, setPerson] = useState({})
    useEffect(() => {
       setLoading(true)
        getPersonDetails(item.id);
        getPersonMovies(item.id);
    }, [])

    const getPersonDetails = async (id) => {
        const data = await fetchPersonDetails(id);
        if (data) {
            setPerson(data);
        }
    }
    const getPersonMovies = async (id) => {
        const data = await fetchPersonMovies(id);
        if (data) {
            setPersonMovies(data.cast);
            setLoading(false)
        }
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#18181B' }} contentContainerStyle={{ paddingBottom: 20 }}>
            <SafeAreaView style={{ zIndex: 20, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ backgroundColor: '#eab308', borderRadius: 10, padding: 1 }}>
                    <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
                    <HeartIcon size='35' color={isFavourite ? 'red' : 'white'} />
                </TouchableOpacity>
            </SafeAreaView>
            {loader ? (
                <Load />
            ) : (
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 10, shadowColor: 'gray', shadowRadius: 40, shadowOffset: { width: 0, height: 5 }, shadowOpacity: 1 }}>
                        <View style={{ alignItems: 'center', borderRadius: 200, overflow: 'hidden', height: 300, width: 300, borderColor: 'gray', borderWidth: 2 }}>
                            <Image source={{uri:image342(person?.profile_path)}} style={{ height: height * 0.43, width: width * 0.74 }} />
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 24, color: 'white', textAlign: 'center', fontWeight: 500 }}>
                           {person?.name}
                        </Text>
                        <Text style={{ fontSize: 15, color: '#A1A1AA', textAlign: 'center' }}>
                            {person?.place_of_birth}
                        </Text>
                    </View>
                    <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#3F3F46', borderRadius: 50, display: 'flex', marginHorizontal: 10 }}>
                        <View style={{ borderRightWidth: 2, borderRightColor: 'black', borderColor: 'A1A1AA', alignItems: 'center', paddingVertical: 7, }}>
                            <Text style={{ color: 'white', fontWeight: 500, paddingHorizontal: 10 }}>
                                Gender
                            </Text>
                            <Text style={{ color: '#D4D4D8', fontSize: 10 }}>
                                {person?.gender === 1 ? 'Female': 'Male' }
                            </Text>
                        </View>
                        <View style={{ borderRightWidth: 2, borderRightColor: 'black', borderColor: 'A1A1AA', alignItems: 'center', paddingVertical: 7, }}>
                            <Text style={{ color: 'white', fontWeight: 500, paddingHorizontal: 10 }}>
                                Birthday
                            </Text>
                            <Text style={{ color: '#D4D4D8', fontSize: 10 }}>
                                {person?.birthday}
                            </Text>
                        </View>
                        <View style={{ borderRightWidth: 2, borderRightColor: 'black', borderColor: 'A1A1AA', alignItems: 'center', paddingVertical: 7 }}>
                            <Text style={{ color: 'white', fontWeight: 500, paddingHorizontal: 10 }}>
                                Knownas
                            </Text>
                            <Text style={{ color: '#D4D4D8', fontSize: 10 }}>
                                {person?.known_for_department}
                            </Text>
                        </View>
                        <View style={{ borderColor: 'A1A1AA', alignItems: 'center', paddingVertical: 7 }}>
                            <Text style={{ color: 'white', fontWeight: 500, paddingHorizontal: 10 }}>
                                Popularity
                            </Text>
                            <Text style={{ color: '#D4D4D8', fontSize: 10 }}>
                                {person?.popularity?.toFixed(2)}%
                            </Text>
                        </View>

                    </View>
                    <View style={{ marginHorizontal: 10, marginHorizontal: 10 }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>
                            Biography
                        </Text>
                        <Text style={{ color: '#A1A1AA', marginHorizontal: 5 }}>
                            {person?.biography}
                        </Text>
                    </View>
                    <MovieList title={'Movies'} hideSeeAll={true} data={personMovies} />
                </View>
            )}

        </ScrollView>
    )
}