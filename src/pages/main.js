import React,{useState}  from 'react';
import Geolocation from '@react-native-community/geolocation';
import { View, Text, Button, Alert } from 'react-native';

export default function Main({ navigation }) {
    const  [info,setInfo]= useState(0);
    Geolocation.getCurrentPosition(data => {setInfo(data.coords)});
    //console.log("Geolocation","latitude", info.altitude,"longitude", info.longitude);
    return (
        <View>
            <View>
                <Text>Pagina Main</Text>
            </View>
            <View>
                <Text>Texto 2</Text>
                <Button
                    title="Ir para pagina de Morro do Cristo"
                    onPress={() => navigation.navigate('Trilha',
                        { nomeTrilha: 'Teste de Envio de Paramentro' })

                    }
                />
                <Button
                    title="Mostrar minha localização atual"
                    onPress={() => navigation.navigate('Localização atual',info)
                    }
                />
            </View>

        </View>

    );
}