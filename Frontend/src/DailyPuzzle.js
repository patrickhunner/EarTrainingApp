import React, { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import { Button, View, Alert, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { SearchBar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import YTSearch from 'youtube-api-search';

export default DailyPuzzle = ({navigation}) => {
    const API_KEY = 'AIzaSyAknwiMsZI8obXieKGBPrC5l6FgSrxjuYo';
    const route = useRoute();
    const { search } = route.params;
    
    return (
        <View>
            <View>
                <Text>search</Text>
            </View>
        </View>
    )
}