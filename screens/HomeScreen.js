import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { styleTheme } from '../theme'
import TrendingMovies from '../components/trendingMovies'
import MovieList from '../components/movieList'
import { useNavigation } from '@react-navigation/native'
import {Load} from '../components/loading'
export default function HomeScreen() {
    const [trending, setTrending] = useState([1, 2, 3])

    const [upcoming, setUpcoming] = useState([1, 2, 3, 4, 5])
    const [topRated, setTopRated] = useState([1, 2, 3, 4, 5])
    const [loader, setLoading] = useState(false)
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ marginBottom: 3 }}>
                <StatusBar style='light' />
                <View style={styles.header}>
                    <Bars3CenterLeftIcon size='30' strokeWidth={2} color='white' />
                    <Text style={{ color: 'white', fontSize: 24 }}>
                        <Text style={styleTheme.text}>Mo</Text>vies
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <MagnifyingGlassIcon size='30' strokeWidth={2} color='white' />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            {loader ? (
                <Load />
            ) : (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 10 }}
                >
                    <TrendingMovies data={trending} />
                    <MovieList title="Upcoming" data={upcoming} />
                    <MovieList title="Top Rated" data={topRated} />
                </ScrollView>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        flex: 1,
        backgroundColor: '#18181B'

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20

    }
})