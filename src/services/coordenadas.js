import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

const Coordenadas = () => {
    const  [info,setInfo]= useState(0);
    Geolocation.getCurrentPosition(data => {setInfo(data.coords)});
    console.log("GeolocationCoordenadas","latitude", info.altitude,"longitude", info.longitude);
    return ({
        coordX: info.altitude,
        coordY: info.longitude,
    }
    );
}