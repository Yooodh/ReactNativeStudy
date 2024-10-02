import { View, Text, Button } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../../App';
import { client } from '../Utils/KindConfig';
import Header from '../Components/Header';

export default function HomeScreen() {
  // const { auth, setAuth } = useContext(AuthContext);
  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      setAuth(false);
      // User was logged out
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 25 }}>
      <Header />
    </View>
  );
}
