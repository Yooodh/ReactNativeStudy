import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import SectionHeading from './SectionHeading';

export default function LessionSection({ course }) {
  return (
    <View>
      <SectionHeading heading={'Lessions'} />
      <FlatList
        data={course?.chapter}
        renderItem={({ item, index }) => (
          <TouchableOpacity>
            <Text>{index + 1}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
