import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from '@/Apps/Screens/HomeScreen';
import MyCourseScreen from '@/Apps/Screens/MyCourseScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/Apps/Utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: (color, size) => (
            <Ionicons name='home' size={24} color={color} />
          ),
          tabBarLabel: () => (
            <Text style={{ color: Colors.PRIMARY }}>Home</Text>
          ),
        }}
      />
      <Tab.Screen
        name='MyCourse'
        component={MyCourseScreen}
        options={{
          tabBarIcon: (color, size) => (
            <Ionicons name='home' size={24} color={color} />
          ),
          tabBarLabel: () => (
            <Text style={{ color: Colors.PRIMARY }}>Home</Text>
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={MyCourseScreen}
        options={{
          tabBarIcon: (color, size) => (
            <Ionicons name='home' size={24} color={color} />
          ),
          tabBarLabel: () => (
            <Text style={{ color: Colors.PRIMARY }}>Home</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
