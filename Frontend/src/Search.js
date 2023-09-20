import React, { useState, useCallback } from "react";
import axios from 'axios';
import { Button, View, Alert, Text, StyleSheet, FlatList } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { SearchBar } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { useRoute } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



export default Search = ({navigation}) => {
    const [song_arr, setSong] = useState([]);
    const server = "http://localhost:3000";
    const [value, setValue] = useState([]);
    const [search, setSearch] = useState('');
    const jsonString = '[{"start": 0.42, "end": 2.43, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 2.43, "end": 4.43, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 4.43, "end": 8.43, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 8.43, "end": 10.43, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 10.43, "end": 11.93, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 11.93, "end": 16.43, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 16.43, "end": 18.42, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 18.42, "end": 20.43, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 20.43, "end": 24.43, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 24.43, "end": 26.43, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 26.43, "end": 28.43, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 28.43, "end": 32.44, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 32.44, "end": 34.43, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 34.43, "end": 36.44, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 36.44, "end": 40.43, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 40.43, "end": 42.43, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 42.43, "end": 44.44, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 44.44, "end": 48.43, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 48.43, "end": 50.43, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 50.43, "end": 52.43, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 52.43, "end": 55.93, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 55.93, "end": 58.43, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 58.43, "end": 60.44, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 60.44, "end": 64.43, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 64.43, "end": 66.43, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 66.43, "end": 68.43, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 68.43, "end": 72.43, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 72.43, "end": 74.43, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 74.43, "end": 75.93, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 75.93, "end": 80.43, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 80.43, "end": 82.43, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 82.43, "end": 84.44, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 84.44, "end": 88.43, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 88.43, "end": 90.44, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 90.44, "end": 92.44, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 92.44, "end": 96.43, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 96.43, "end": 98.43, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 98.43, "end": 100.43, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 100.43, "end": 104.43, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 104.43, "end": 106.43, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-7", "chord_simple_jazz": "C#-7", "chord_complex_pop": "C#m7", "chord_simple_pop": "C#m7"}, {"start": 106.43, "end": 108.43, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 108.43, "end": 112.42, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 112.42, "end": 116.42, "chord_majmin": "B:maj", "chord_complex_jazz": "B", "chord_simple_jazz": "B", "chord_complex_pop": "B", "chord_simple_pop": "B"}, {"start": 116.42, "end": 120.42, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 120.42, "end": 124.42, "chord_majmin": "B:maj", "chord_complex_jazz": "B", "chord_simple_jazz": "B", "chord_complex_pop": "B", "chord_simple_pop": "B"}, {"start": 124.42, "end": 128.43, "chord_majmin": "A:maj", "chord_complex_jazz": "A\u03947", "chord_simple_jazz": "A\u03947", "chord_complex_pop": "Amaj7", "chord_simple_pop": "Amaj7"}, {"start": 128.43, "end": 132.44, "chord_majmin": "B:maj", "chord_complex_jazz": "B", "chord_simple_jazz": "B", "chord_complex_pop": "B", "chord_simple_pop": "B"}, {"start": 132.44, "end": 133.42, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 133.42, "end": 136.44, "chord_majmin": "A:maj", "chord_complex_jazz": "A\u03947", "chord_simple_jazz": "A\u03947", "chord_complex_pop": "Amaj7", "chord_simple_pop": "Amaj7"}, {"start": 136.44, "end": 140.42, "chord_majmin": "B:maj", "chord_complex_jazz": "B", "chord_simple_jazz": "B", "chord_complex_pop": "B", "chord_simple_pop": "B"}, {"start": 140.42, "end": 141.92, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 141.92, "end": 144.42, "chord_majmin": "A:maj", "chord_complex_jazz": "A\u03947", "chord_simple_jazz": "A\u03947", "chord_complex_pop": "Amaj7", "chord_simple_pop": "Amaj7"}, {"start": 144.42, "end": 146.44, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 146.44, "end": 148.44, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 148.44, "end": 151.93, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 151.93, "end": 154.44, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 154.44, "end": 156.44, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 156.44, "end": 160.43, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 160.43, "end": 162.43, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 162.43, "end": 164.44, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 164.44, "end": 168.44, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 168.44, "end": 170.44, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 170.44, "end": 172.44, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 172.44, "end": 176.43, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 176.43, "end": 178.44, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 178.44, "end": 180.44, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 180.44, "end": 184.44, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 184.44, "end": 186.43, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 186.43, "end": 188.43, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 188.43, "end": 192.43, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 192.43, "end": 194.43, "chord_majmin": "C#:min", "chord_complex_jazz": "C#-", "chord_simple_jazz": "C#-", "chord_complex_pop": "C#m", "chord_simple_pop": "C#m"}, {"start": 194.43, "end": 196.43, "chord_majmin": "A:maj", "chord_complex_jazz": "A", "chord_simple_jazz": "A", "chord_complex_pop": "A", "chord_simple_pop": "A"}, {"start": 196.43, "end": 201.42, "chord_majmin": "E:maj", "chord_complex_jazz": "E", "chord_simple_jazz": "E", "chord_complex_pop": "E", "chord_simple_pop": "E"}, {"start": 201.42, "end": 202.45, "chord_majmin": "N", "chord_complex_jazz": "N", "chord_simple_jazz": "N", "chord_complex_pop": "N", "chord_simple_pop": "N"}]';
    
    const [dp, setDp] = useState('none');

    const styles = StyleSheet.create({
        text: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center'
        },
        search: {
        flexDirection: 'row',
        alignItems: 'center',
        },
        search_bar: {
        flex: 4
        },
        search_button: {
        flex: 1
        }
    });

    const testSubmit = () => {
        axios.post(server + '/testSaveChords', {
            chords: JSON.parse(jsonString)
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    };

    const updateSearch = (text) => {
        setSearch(text);
    };

    const handleSearchSubmit = () => {
        setSong([]);
        axios.get(server + '/getSong', {
            params: {
                song_name: search,
            },
            })
            .then(response => {
                if (response.data.length == 0) {    
                    Alert.alert("No results found");
                    navigation.navigate('YouTubeSearch', { search: search });
                    return;
                }
                response.data.forEach(song => {
                    setSong(song_arr => [...song_arr, song]);
                })
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <View>
            <View style={styles.search}>
                <View style={styles.search_bar}>
                    <SearchBar
                    placeholder="Search for a song or artist..."
                    onChangeText={updateSearch}
                    value={search}
                    onSubmitEditing={handleSearchSubmit}
                    />
                </View>
                <View style={styles.search_button}>
                    <Button title="Search" onPress={handleSearchSubmit} style={styles.search_button}/>
                </View>
            </View>
            <FlatList
                data={song_arr}
                renderItem={({item}) =>
                    <Button title={`${item.title} - ${item.artist}`} onPress={() => navigation.navigate('Player', { id: item.id })}/>
                }
                />
            <Button title="TEST SAVE" onPress={testSubmit}/>
        </View>
    )
}

