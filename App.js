//import { StatusBar } from 'expo-status-bar';
//import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home/Home'
import UUID from './src/screens/UUID/UUID'
import ScreenLimit from './src/screens/ScreenLimit/ScreenLimit'
import Dashboard from './src/screens/Dashboard/Dashboard'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default function App() {
  const Stack = createStackNavigator()

  /*return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );*/

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={ Home } />
          <Stack.Screen name="UUID" component={ UUID } />
          <Stack.Screen name="ScreenLimit" component={ ScreenLimit } />
          <Stack.Screen name="Dashboard" component={ Dashboard } />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
