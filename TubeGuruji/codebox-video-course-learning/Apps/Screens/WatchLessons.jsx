import {
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Video, ResizeMode } from 'expo-av';
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import LessionSection from '../Components/LessionSection';
import GlobalApi from '../Utils/GlobalApi';

export default function WatchLessons() {
  const { params } = useRoute();
  const [userEnrollment, setUserEnrollment] = useState([
    params?.userEnrollment[0],
  ]);
  // const [course, setCourse] = useState(params?.course);
  const [selectedChapter, setSelectedChapter] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    console.log('---', userEnrollment);
    params && setSelectedChapter(params?.course?.chapter[0]);
  }, [params && userEnrollment]);

  const onChapterCompleted = () => {
    GlobalApi.markChapterCompleted(userEnrollment.id, selectedChapter.id).then(
      (resp) => {
        ToastAndroid.show('Chapter Mark Completed!', ToastAndroid.SHORT);
      }
    );
  };

  // return (
  return (
    setSelectedChapter && (
      <ScrollView style={{ padding: 20 }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 75,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name='arrow-back-circle-sharp' size={40} color='black' />
          </TouchableOpacity>

          <Text style={{ fontSize: 27, fontFamily: 'outfit-bold' }}>
            Lessons
          </Text>
        </View>

        {/* {selectedChapter &&  */}
        <Video
          style={styles.video}
          source={{
            uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            // uri: selectedChapter.video?.url,
          }}
          useNativeControls={true}
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
        {/* } */}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
          }}
        >
          <Text style={{ fontFamily: 'outfit-bold', fontSize: 20, flex: 1 }}>
            {/* {selectedChapter?.name} */}
            Login Screen UI
          </Text>
          <TouchableOpacity
            onPress={() => onChapterCompleted()}
            style={{
              backgroundColor: Colors.PRIMARY,
              padding: 4,
              borderRadius: 4,
              paddingHorizontal: 8,
            }}
          >
            <Text
              style={{
                color: Colors.WHITE,
                textAlign: 'center',
                fontFamily: 'outfit',
              }}
            >
              Mark Completed
            </Text>
          </TouchableOpacity>
        </View>
        <LessionSection
          // course={course}
          userEnrollment={userEnrollment}
          onChapterSelect={(chapter) => setSelectedChapter(chapter)}
          selectedChapter={selectedChapter}
        />
      </ScrollView>
    )
  );
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: 250,
  },
});
