import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import Router from './router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
