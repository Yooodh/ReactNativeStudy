import { View, Text } from 'react-native';
import React from 'react';

export default function SectionHeading({ heading }) {
  return (
    <Text
      style={{
        fontFamily: 'outfit-medium',
        fontSize: 20,
        marginBottom: 5,
        color: Colors.PRIMARY,
      }}
    >
      {heading}
    </Text>
  );
}
