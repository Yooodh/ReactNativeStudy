import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './Apps/Screens/LoginScreen';
import { client } from './Apps/Utils/KindConfig';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from '@/Apps/Navigations/TabNavigation';

export default function App() {
  useEffect(() => {
    checkAuthenticate();
  }, []);

  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      const userProfile = await client.getUserDetails();
      console.log(userProfile);
      console.log('Authenticated!!!');
      // Need to implement, e.g: call an api, etc...
    } else {
      return <LoginScreen />;
      // Need to implement, e.g: redirect user to sign in, etc..
    }
  };

  return (
    <View style={styles.container}>
      <LoginScreen />
      {/* <NavigationContainer>
        <TabNavigation />
      </NavigationContainer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
