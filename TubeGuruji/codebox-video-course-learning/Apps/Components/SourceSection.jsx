import { View, Text, Image } from 'react-native';
import React from 'react';
import Colors from '../Utils/Colors';

export default function SourceSection() {
  return (
    <View
      style={{
        display: 'flex',
        gap: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <View
        style={{
          padding: 10,
          backgroundColor: Colors.WHITE,
          alignItems: 'center',
          borderRadius: 10,
          width: 120,
          borderWidth: 0.4,
        }}
      >
        <Image
          source={require('./../../assets/images/open-source.png')}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ fontSize: 14, fontFamily: 'outfit' }}>Source Code</Text>
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: Colors.WHITE,
          alignItems: 'center',
          borderRadius: 10,
          width: 120,
          borderWidth: 0.4,
        }}
      >
        <Image
          source={require('./../../assets/images/web-design.png')}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ fontSize: 14, fontFamily: 'outfit' }}>Demo</Text>
      </View>
      <View
        style={{
          padding: 10,
          backgroundColor: Colors.WHITE,
          alignItems: 'center',
          borderRadius: 10,
          width: 120,
          borderWidth: 0.4,
        }}
      >
        <Image
          source={require('./../../assets/images/youtube.png')}
          style={{ width: 40, height: 40 }}
        />
        <Text style={{ fontSize: 14, fontFamily: 'outfit' }}>Youtube</Text>
      </View>
    </View>
  );
}
