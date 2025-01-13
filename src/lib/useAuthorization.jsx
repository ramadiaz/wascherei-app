import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuthorization = () => {
    const [isAuthorized, setIsAuthorized] = useState(null);

    useEffect(() => {
        const checkAuthorization = async () => {
            const token = await AsyncStorage.getItem('authToken');
            setIsAuthorized(!!token);
        };

        checkAuthorization();
    }, []);

    return isAuthorized;
};

