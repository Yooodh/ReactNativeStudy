import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from '@/Apps/Screens/HomeScreen';
import MyCourseScreen from '@/Apps/Screens/MyCourseScreen';
import ProfileScreen from '@/Apps/Screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/Apps/Utils/Colors';
import WatchLessons from './../../Apps/Screens/WatchLessons';

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
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>Home</Text>
          ),
        }}
      />
      <Tab.Screen
        name='MyCourse'
        component={MyCourseScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='book' size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>My Course</Text>
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person-circle' size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>Profile</Text>
          ),
        }}
      />
      {/* 
      <Tab.Screen
        name='WatchLessons'
        component={WatchLessons}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hammer' size={24} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color }}>Temporarily</Text>
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
