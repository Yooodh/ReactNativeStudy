import { registerRootComponent } from 'expo';
import { SafeAreaView, StatusBar, StyleSheet, ScrollView } from 'react-native';
import App from '@/App';
import React from 'react';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle='light-content'
        translucent={false}
        backgroundColor='black'
      />
      <ScrollView
        showsVerticalScrollIndicator={false} // 수직 스크롤바 숨기기
        showsHorizontalScrollIndicator={false} // 수평 스크롤바 숨기기
      >
        <App />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

registerRootComponent(HomeScreen);
