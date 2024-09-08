import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NewsDataType } from '@/types';
import { SharedValue } from 'react-native-reanimated';

type Props = {
  slideItem: NewsDataType;
  index: number;
  scrollX: SharedValue<number>;
};

const { width } = Dimensions.get('screen');

const SliderItem = ({ slideItem, index, scrollX }: Props) => {
  return (
    <View style={styles.itemWrapper}>
      {/* <Text>SliderItem</Text> */}
      <Image source={{ uri: slideItem.image_url }} style={styles.image} />
      <Text>{slideItem.title}</Text>
    </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
  itemWrapper: {
    position: 'relative',
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: 180,
    borderRadius: 20,
  },
});
