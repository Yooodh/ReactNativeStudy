import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ProgressBar from '../Components/ProgressBar';

export default function ProgressCourseItem({ course, completedChapter }) {
  const navigation = useNavigation();

  useEffect(() => {
    // console.log('completedChapter', completedChapter);
    // console.log('Total Chapter', course.chapter.length);
  }, []);

  // total Chapter
  // Completed Chapter

  const calculatePercCompleted = () => {
    // (totalChapterCompleted / CompletedChapter) * 100;
    const perc = completedChapter / course?.chapter?.length;
    // console.log(prec);
    return perc.toFixed(2);
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('course-detail', {
          course: course,
        })
      }
      style={{
        backgroundColor: Colors.WHITE,
        marginRight: 15,
        padding: 10,
        borderRadius: 10,
        gap: 4,
        marginBottom: 10,
        marginTop: 5,
      }}
    >
      <Image
        source={{ uri: course.banner.url }}
        style={{ borderRadius: 10, height: 170 }}
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
              <Ionicons name='book' size={20} color={Colors.PRIMARY} />
              <Text style={{ color: Colors.GRAY, fontFamily: 'outfit' }}>
                {course.chapter?.length} Chapters
              </Text>
            </View>
          ) : (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 4,
                alignItems: 'center',
              }}
            >
              <Ionicons name='logo-youtube' size={20} color={'red'} />
              <Text style={{ color: Colors.GRAY, fontFamily: 'outfit' }}>
                Watch On Youtube
              </Text>
            </View>
          )}
          <Text style={{ fontFamily: 'outfit-bold', color: Colors.PRIMARY }}>
            {course.free ? 'Free' : 'Paid'}
          </Text>
        </View>
        <ProgressBar perc={calculatePercCompleted()} />
      </View>
    </TouchableOpacity>
  );
}
