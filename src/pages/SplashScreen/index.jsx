import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SplashBackground } from '../../assets/images'

const SplashScreen = () => {
    return (
        <ImageBackground source={SplashBackground} resizeMode="cover" style={styles.backgroundImage}>
            <View style={styles.parent}>
                <View>
                    <Text style={styles.title}>Wascherei</Text>
                    <Text style={styles.subtitle}>Your laundry management digital app.</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => alert("hai")} style={styles.button}>
                        <Text style={styles.buttonText}>Start</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: 'center',
        gap: 100
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: 700,
        color: '#404040',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        fontWeight: 400,
        color: '#404040',
        textAlign: 'center',
    },
    button: {
        width: 120,
        borderRadius: 20,
        backgroundColor: '#404040',
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 400,
    }
})