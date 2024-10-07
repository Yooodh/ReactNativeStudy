import { View, Text, FlatList } from 'react-native';
import React from 'react';
import CourseList from './CourseList';
import CourseItemVertical from './CourseItemVertical';

export default function CourseListVertical() {
  return (
    <View>
      <FlatList
        data={CourseList}
        renderItem={({ item, index }) => <CourseItemVertical course={item} />}
      />
    </View>
  );
}
