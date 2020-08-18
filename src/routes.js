import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './pages/main';
import Trilha from './pages/trilha';
import Mapa from './pages/mapa';

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator >
      <Stack.Screen
          name="Home"
          component={Main}
          options={
            {
              title: 'Bem-Vindo',
              headerStyle: {
                backgroundColor: 'black'
              },
              headerTintColor: '#FFF',
            }
          }
        />

        <Stack.Screen
          name="Localização atual"
          component={Mapa}
        />

        <Stack.Screen
          name="Trilha"
          component={Trilha}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Routes;


