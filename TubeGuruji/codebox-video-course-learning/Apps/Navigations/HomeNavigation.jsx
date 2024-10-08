import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import CourseDetailScreen from '../Screens/CourseDetailScreen';
import TabNavigation from '@/app/(tabs)/_layout';

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='home' component={TabNavigation} />
      <Stack.Screen name='course-detail' component={CourseDetailScreen} />
    </Stack.Navigator>
  );
}
