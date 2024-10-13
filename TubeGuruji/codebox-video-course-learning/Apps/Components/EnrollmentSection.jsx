import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../Utils/Colors';

export default function EnrollmentSection({ userEnrollment }) {
  // const [isEnrolled, setIsEnrolled] = useState(false);
  useEffect(() => {
    // console.log('--', userEnrollment);
  }, []);
  return (
    <View
      style={{
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 10,
      }}
    >
      {userEnrollment?.length > 0 ? (
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
