import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import { useNavigation } from 'expo-router';
import CourseIntro from '../Components/CourseIntro';
import SourceSection from '../Components/SourceSection';
import EnrollmentSection from '../Components/EnrollmentSection';
import LessionSection from '../Components/LessionSection';
import { UserDetailContext } from '@/App';
import GlobalApi from '../Utils/GlobalApi';

export default function CourseDetailScreen() {
  const { params } = useRoute();
  const [course, setCourse] = useState();
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const navigation = useNavigation();
  const [userEnrollment, setUserEnrollment] = useState();

  useEffect(() => {
    setCourse(params.course);
    params && checkIsUserEnrollToCourse();
  }, [params && userDetail]);

  useEffect;

  const checkIsUserEnrollToCourse = () => {
    // email slug
    GlobalApi.checkUserCourseEnrollment(course?.slug, userDetail.email).then(
      (resp) => {
        console.log('--', resp);
        setUserEnrollment(resp.userEnrollCourses);
      }
    );
  };
  return (
    <ScrollView style={{ padding: 20, marginTop: 25 }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 50,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='arrow-back-circle-sharp' size={40} color='black' />
        </TouchableOpacity>

        <Text style={{ fontSize: 27, fontFamily: 'outfit-bold' }}>
          Course Detail
        </Text>
      </View>

      {/* Course Intro */}
      <CourseIntro course={course} />

      {/* Course Section */}
      <SourceSection course={course} userEnrollment={userEnrollment} />

      {/* Enroll Section */}
      <EnrollmentSection userEnrollment={userEnrollment} />

      {/* Lession Section */}
      <LessionSection course={course} />
    </ScrollView>
  );
}
