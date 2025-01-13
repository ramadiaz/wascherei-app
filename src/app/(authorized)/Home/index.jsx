import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context';
import withAuthorization from '../../../lib/withAuthorization';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  )
}

export default withAuthorization(Home)

const styles = StyleSheet.create({})