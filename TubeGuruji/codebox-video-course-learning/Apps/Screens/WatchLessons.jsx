import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Video, ResizeMode } from 'expo-av';
import Colors from '../Utils/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

export default function WatchLessons() {
  const { params } = useRoute();
  const [userEnrollment, setUserEnrollment] = useState([
    params?.userEnrollment,
  ]);
  // const [course, setCourse] = useState(params?.course);
  const [selectedChapter, setSelectedChapter] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    params && setSelectedChapter(params?.course?.chapter[0]);
  }, [params]);
  return (
    <View style={{ padding: 20 }}>
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

        <Text style={{ fontSize: 27, fontFamily: 'outfit-bold' }}>Lessons</Text>
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
        <Text style={{ fontFamily: 'outfit-bold', fontSize: 20 }}>
          {/* {selectedChapter.name} */}
          Introduction
        </Text>
        <TouchableOpacity
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
    </View>
  );
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: 250,
  },
});
