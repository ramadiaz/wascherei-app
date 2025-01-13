import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuthorization } from './useAuthorization';

const withAuthorization = (WrappedComponent) => {
    return (props) => {
        const navigation = useNavigation();
        const isAuthorized = useAuthorization();

        useEffect(() => {
            if (isAuthorized === false) {
                navigation.navigate('SignIn');
            }
        }, [isAuthorized, navigation]);

        if (isAuthorized === null) {

            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#007bff" />
                </View>
            );
        }

        if (!isAuthorized) {
            return null;
        }


        return <WrappedComponent {...props} />;
    };
};

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default withAuthorization;
