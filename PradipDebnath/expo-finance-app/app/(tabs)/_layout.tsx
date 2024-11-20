import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { AntDesign, FontAwesome, SimpleLineIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';

const Layout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.grey,
            position: 'absolute',
            bottom: 40,
            justifyContent: 'center',
            alignSelf: 'center',
            // height: 63,
            height: 53,
            marginHorizontal: 120,
            paddingHorizontal: 10,
            paddingVertical: 8,
            paddingBottom: 8,
            borderRadius: 40,
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: '#333',
            borderTopColor: '#333',
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#999',
          tabBarActiveTintColor: Colors.white,
        }}
      >
        <Tabs.Screen
          name='index'
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  // padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,

                  // Add
                  marginTop: 10,
                }}
              >
                <SimpleLineIcons name='pie-chart' size={18} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name='transactions'
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  // padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,

                  // Add
                  marginTop: 10,
                }}
              >
                <AntDesign name='swap' size={18} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name='profile'
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  // padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,

                  // Add
                  marginTop: 10,
                }}
              >
                <FontAwesome name='user-o' size={18} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
      <StatusBar style='light' />
    </>
  );
};

export default Layout;

const styles = StyleSheet.create({});
