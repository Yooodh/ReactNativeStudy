import { View, Text, Button, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App';
import { client } from '../Utils/KindConfig';
import Header from '../Components/Header';
import GlobalApi from './../Utils/GlobalApi';
import CategoryList from '../Components/CategoryList';
import SectionHeading from '../Components/SectionHeading';
import CourseList from '../Components/CourseList';
import courseListVertical from '../Components/CourseListVertical';

export default function HomeScreen() {
  // const { auth, setAuth } = useContext(AuthContext);
  const [categories, setCategories] = useState();
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    getCategory();
    getCourseList();
  }, []);

  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      setAuth(false);
      // User was logged out
    }
  };

  //Get Category List
  const getCategory = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategories(resp.categories);
    });
  };

  const getCourseList = () => {
    GlobalApi.getCourseList().then((resp) => {
      setCourseList(resp?.courseLists);
    });
  };

  const getFilterCourseList = (tag) => {
    const result = courseList.filter((item) => item.tag.includes(tag));
    return result;
  };
  return (
    <ScrollView style={{ padding: 20, marginTop: 25 }}>
      <Header />
      {/* Category List */}
      <CategoryList categories={categories} />

      {/* All Course List */}
      <SectionHeading heading={'Latest Courses'} />
      <CourseList courseList={courseList} />

      {/* React Native Course List */}
      <SectionHeading heading={'React Native Courses'} />
      <CourseList courseList={getFilterCourseList('react_native')} />

      {/* Popular Course List */}
      <SectionHeading heading={'Popular Course'} />
      <courseListVertical />
    </ScrollView>
  );
}
