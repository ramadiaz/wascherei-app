import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const SignIn = () => {
  const navigation = useNavigation()

  const handleLogin = () => {
    AsyncStorage.removeItem('authToken')
    AsyncStorage.setItem('authToken', 'true')
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView>
      <View>
        <Text>SignIn</Text>
      </View>
      <View>
        <TouchableOpacity onPress={handleLogin}>
          <Text>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})