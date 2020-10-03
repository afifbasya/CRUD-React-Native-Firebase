import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home, TambahKontak } from '../pages'

const Stack = createStackNavigator();

const Router = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="TambahKontak" component={TambahKontak}  />
      </Stack.Navigator>
    )
}

export default Router
