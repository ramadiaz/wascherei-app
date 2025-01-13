import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native'
import React from 'react'
import { Home, SplashScreen } from '../app';
import SignIn from '../app/(auth)/SignIn';
import SignUp from '../app/(auth)/SignUp';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})