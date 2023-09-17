import React, { useState, useCallback } from "react";
import { Button, View, Alert, Text } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { SearchBar } from 'react-native-elements';

export default function App() {
  const [search, setSearch] = useState('');
  const [playing, setPlaying] = useState(false);

  const updateSearch = (text) => {
    setSearch(text);
  };

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
      <Text style={{fontSize: 40, color: 'white'}}>BLANK</Text>
      <SearchBar
        placeholder="Search for a song..."
        onChangeText={updateSearch}
        value={search}
      />
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"iee2TATGMyI"}
        onChangeState={onStateChange}
      />
      <Button title={playing ? "Pause" : "Play"} onPress={togglePlaying} />
    </View>
  );
}
