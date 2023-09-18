import React, { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import { Button, View, Alert, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { SearchBar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

export default Player = ({navigation}) => {
    const route = useRoute();
    const { id } = route.params;
    const server = "http://localhost:3000";
    const [playing, setPlaying] = useState(false);
    const [song, setSong] = useState(null);

    useEffect(() => {
        axios
          .get(server + '/getSong', {
            params: {
              id: id,
            },
          })
          .then(response => {
            setSong(response.data[0]);
          })
          .catch(error => {
            console.log(error);
          });
      }, []); 


    const onStateChange = useCallback((state) => {
        if (state === "ended") {
        setPlaying(false);
        Alert.alert("Video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

  

    return (
        <View>
            <View>
                <YoutubePlayer
                    height={300}
                    play={playing}
                    videoId={song ? song.video_id : null}
                    onChangeState={onStateChange}
                    rel={false}
                />
                <Button title={playing ? "Pause" : "Play"} onPress={togglePlaying} />
            </View>
            <View >
                <ScrollView style={{ width: '100%', paddingHorizontal: 10 }}>
                    <FlatList 
                        horizontal={true}
                        flexWrap='wrap' 
                        data={song ? song.chords : null}
                        renderItem={({ item }) => (
                            <Text style={styles.item}>{item.chord_complex_pop}</Text>
                        )}
                    />
                </ScrollView>
            </View>
        </View>
    )
}



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
    },
    chords: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        padding: 10,
        margin: 5,
        backgroundColor: '#ccc',
    },
  });