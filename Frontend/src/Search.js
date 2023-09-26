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

