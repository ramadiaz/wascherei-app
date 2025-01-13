import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Home, SplashScreen } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})