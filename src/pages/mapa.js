import MapboxGL from '@react-native-mapbox-gl/maps';
import React, { useState } from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Geolocation from '@react-native-community/geolocation';

MapboxGL.setAccessToken(
    'pk.eyJ1Ijoiam9uYXRoZWxvbyIsImEiOiJja2R5amIxcjYxM2k4MnhvYTRjcWNpZnc1In0.I7SDQB90tun0gGQ2VFlfmw'
);
const IS_ANDROID = Platform.OS === 'android';

export default function Mapa() {
    const [position, setPosition] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    Geolocation.getCurrentPosition(
        pos => {
            console.log("TesteDeChamada", pos.coords)
            setPosition({
                ...position,
                latitude: pos.coords.latitude,
                longitude: pos.coords.longitude,

            })
        });
    async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Permissão de Localização',
                    message: 'A aplicação precisa da permissão de localização.',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                Geolocation.getCurrentPosition(
                    pos => {
                        console.log("TesteDeChamada", pos.coords)
                        setPosition({
                            ...position,
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude,

                        });
                    },
                    error => {
                        console.log(error);
                        Alert.alert('Houve um erro ao pegar a latitude e longitude.');
                    },
                );
            } else {
                Alert.alert('Permissão de localização não concedida');
            }
        } catch (err) {
            console.log(err);
        }
    };



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <MapboxGL.MapView
                    style={styles.container}

                >
                    <MapboxGL.Camera
                        zoomLevel={18}
                        centerCoordinate={[position.longitude, position.latitude]}
                    >

                    </MapboxGL.Camera>
                    <MapboxGL.UserLocation>

                    </MapboxGL.UserLocation>
                </MapboxGL.MapView>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
