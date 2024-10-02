import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import Colors from '@/Apps/Utils/Colors';
import { client } from './../Utils/KindConfig';
import { AuthContext } from '@/App';

export default function LoginScreen() {
  const { auth, setAuth } = useContext(AuthContext);
  const handleSignUp = async () => {
    const token = await client.register();
    if (token) {
      console.log('Authenticated Successfully!!!');
      setAuth(true);
      // User was authenticated
    }
  };

  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      console.log('Authenticated Successfully!!!');
      setAuth(true);
      // User was authenticated
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require('./../../assets/images/rocket.png')}
          style={{ width: '100%', height: 400, objectFit: 'cover' }}
        />
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 45, fontWeight: 'bold' }}>
            Welcome To<Text style={{ color: Colors.PRIMARY }}> CodeBox</Text>
          </Text>
          <Text style={{ fontSize: 20, marginTop: 7, color: Colors.GRAY }}>
            Learn Programming to Build Real Life projects
          </Text>

          {/* Sign In button */}
          <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text
              style={{ textAlign: 'center', color: Colors.WHITE, fontSize: 18 }}
            >
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignUp}>
            <Text
              style={{
                marginTop: 10,
                color: Colors.PRIMARY,
                textAlign: 'center',
                fontSize: 16,
              }}
            >
              Create New Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: 60,
  },
});
