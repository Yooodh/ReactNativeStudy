import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, { useContext } from 'react';
import { useNavigation } from 'expo-router';
import { UserDetailContext } from '@/App';
import Colors from '../Utils/Colors';

const ProfileScreen = () => {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const navigation = useNavigation();

  const menu = [
    {
      id: 1,
      name: 'Explore',
      path: 'Home',
      icon: 'search',
    },
    {
      id: 2,
      name: 'My Course',
      path: 'MyCourse',
      icon: 'book',
    },
    {
      id: 3,
      name: 'TubeGuruji Academy',
      icon: 'school',
      url: 'https://tubeguruji.com/',
    },
    {
      id: 4,
      name: 'Youtube Channel',
      url: 'https://tubeguruji.com/',
      icon: 'logo-youtube',
    },
    {
      id: 3,
      name: 'Logout',
      icon: 'power',
    },
  ];

  const onMenuClick = async (item) => {
    if (item?.url) {
      Linking.openURL(item.url);
    } else if (item.path) {
      navigation.navigate(item.path);
    } else if (item.name == 'Logout') {
      const loggedOut = await client.logout('login');
      if (loggedOut) {
        navigation.navigate('login');

        // User was logged out
      }
    }
  };

  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 27,
        }}
      >
        Profile
      </Text>

      {userDetail && (
        <View style={{ alignItems: 'center', marginTop: 20 }}>
          <Image
            source={{ uri: userDetail?.picture }}
            style={{ width: 100, height: 100, borderRadius: 99 }}
          />
          <Text style={{ fontFamily: 'outfit-bold', fontSize: 26 }}>
            {userDetail?.given_name}
          </Text>
          <Text style={{ fontFamily: 'outfit', fontSize: 18 }}>
            {userDetail?.email}
          </Text>
        </View>
      )}

      {/* Menu Section */}
      <View style={{ marginTop: 75 }}>
        <FlatList
          data={menu}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => onMenuClick(item)}
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 15,
                alignItems: 'center',
                marginBottom: 25,
                paddingHorizontal: 30,
              }}
            >
              <Iconions name={item.icon} size={34} color={Colors.PRIMARY} />
              <Text style={{ fontFamily: 'outfit', fontSize: 22 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
