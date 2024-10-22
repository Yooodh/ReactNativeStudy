import { View, Text, FlatList } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { UserDetailContext } from '@/App';
import GlobalApi from '../Utils/GlobalApi';
import CourseItem from '../Components/CourseItem';

export default function MyCourseScreen() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);
  const [enrolledCoursesList, setEnrolledCoursesList] = useState();

  useEffect(() => {
    userDetail && getAllUserEnrollCourses();
  }, [userDetail]);

  const getAllUserEnrollCourses = () => {
    GlobalApi.getAllUserEnrollCourses(userDetail.email).then((resp) => {
      setEnrolledCoursesList(resp.UserEnrollCourses);
    });
  };
  return (
    <View style={{ padding: 20, marginTop: 25 }}>
      <Text
        style={{
          fontFamily: 'outfit-bold',
          fontSize: 27,
        }}
      >
        My Course
      </Text>

      {/* List of Course Enrollment */}
      <FlatList
        data={enrolledCoursesList}
        renderItem={({ item, index }) => (
          <CourseItem course={item.courseList} />
        )}
      />
    </View>
  );
}
