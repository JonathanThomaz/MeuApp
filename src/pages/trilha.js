import React from 'react';
import {View, Text} from 'react-native';

export default function Trilha ({route}){
    return (
    <View>
      <Text>Essa pagina exibira um mapa da trilha: Nome da trilha enviado por um parametro = {route.params?.nomeTrilha}</Text>
      </View>
    );
}

