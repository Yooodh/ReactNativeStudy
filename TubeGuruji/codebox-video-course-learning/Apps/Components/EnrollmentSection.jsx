import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Colors from '../Utils/Colors';

export default function EnrollmentSection() {
  const [isEnrolled, setIsEnrolled] = useState(false);
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
      }}
    >
      {isEnrolled ? (
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'outfit-medium',
            fontSize: 15,
            color: Colors.WHITE,
          }}
        >
          Continue
        </Text>
      ) : (
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'outfit-medium',
            fontSize: 15,
            color: Colors.WHITE,
          }}
        >
          Enroll to Course
        </Text>
      )}
    </View>
  );
}
