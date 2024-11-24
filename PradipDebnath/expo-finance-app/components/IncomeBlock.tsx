import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';
import { IncomeType } from '@/types';

const IncomeBlock = ({ incomeList }: { incomeList: IncomeType[] }) => {
  const renderItem: ListRenderItem<IncomeType> = ({ item }) => {
    return (
      <View>
        <Text style={{ color: Colors.white }}>{item.name}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text style={{ color: Colors.white, fontSize: 16 }}>
        My <Text style={{ fontWeight: '700' }}>Income</Text>
      </Text>
      <FlatList
        data={incomeList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default IncomeBlock;

const styles = StyleSheet.create({});
