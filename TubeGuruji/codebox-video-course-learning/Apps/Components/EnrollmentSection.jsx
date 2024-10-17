import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Colors from '../Utils/Colors';

export default function EnrollmentSection({
  userEnrollment,
  onEnrollmentPress,
  onContinuePress,
}) {
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
        <TouchableOpacity onPress={() => onContinuePress()}>
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
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => onEnrollmentPress()}>
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
        </TouchableOpacity>
      )}
    </View>
  );
}
