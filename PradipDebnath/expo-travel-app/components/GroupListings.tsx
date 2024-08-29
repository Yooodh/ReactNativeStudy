import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import { GroupType } from '@/types/groupType';
import Colors from '@/constants/Colors';

const GroupListings = ({ listings }: { listings: GroupType[] }) => {
  const renderItem: ListRenderItem<GroupType> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
    );
  };

  return (
    <View>
      <Text>Top Travel Groups</Text>
      <FlatList
        data={listings}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default GroupListings;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
  },
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
  },
});
