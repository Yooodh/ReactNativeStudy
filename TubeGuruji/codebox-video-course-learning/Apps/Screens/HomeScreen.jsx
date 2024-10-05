import { View, Text, Button } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../App';
import { client } from '../Utils/KindConfig';
import Header from '../Components/Header';
import GlobalApi from './../Utils/GlobalApi';
import CategoryList from '../Components/CategoryList';
import SectionHeading from '../Components/SectionHeading';
import CourseList from '../Components/CourseList';

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

  return (
    <View style={{ padding: 20, marginTop: 25 }}>
      <Header />
      {/* Category List */}
      <CategoryList categories={categories} />

      {/* Course List */}
      <SectionHeading heading={'Latest Courses'} />
      <CourseList courseList={courseList} />
    </View>
  );
}
