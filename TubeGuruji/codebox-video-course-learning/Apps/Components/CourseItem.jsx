import { View, Text, Image } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function CourseItem({ course }) {
  return (
    <View
      style={{
        backgroundColor: Colors.WHITE,
        width: 260,
        marginRight: 15,
        padding: 10,
        borderRadius: 10,
        gap: 4,
      }}
    >
      <Image
        source={{ uri: course.banner.url }}
        style={{ width: 240, borderRadius: 10, height: 130 }}
      />
      <View>
        <Text style={{ fontSize: 16, fontFamily: 'outfit-bold' }}>
          {course.name}
        </Text>
        <Text
          style={{ fontSize: 14, fontFamily: 'outfit', color: Colors.GRAY }}
        >
          {course.author}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: ' center',
          }}
        >
          {course?.chapter?.length ? (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 4,
                alignItems: 'center',
              }}
            >
              <Ionicons name='book' size={24} color={Colors.PRIMARY} />
              <Text style={{ color: Colors.GRAY, fontFamily: 'outfit' }}>
                {course.chapter?.length} Chapters
              </Text>
            </View>
          ) : null}
          <Text style={{ fontFamily: 'outfit-bold', color: Colors.PRIMARY }}>
            {course.free ? 'Free' : 'Paid'}
          </Text>
        </View>
      </View>
    </View>
  );
}
