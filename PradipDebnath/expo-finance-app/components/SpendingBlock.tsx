import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SpendingType } from '@/types';
import Colors from '@/constants/Colors';
import { DollarIcon } from '@/constants/Icons';

const SpendingBlock = ({ spendingList }: { spendingList: SpendingType[] }) => {
  return (
    <View style={{ marginVertical: 20, alignItems: 'flex-start' }}>
      <Text style={{ color: Colors.white, fontSize: 16 }}>
        July <Text style={{ fontWeight: '700' }}>Spending</Text>
      </Text>

      {spendingList.map((item) => {
        return (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}
            key={item.id}
          >
            <View
              style={{
                backgroundColor: Colors.grey,
                padding: 15,
                borderRadius: 50,
              }}
            >
              <DollarIcon width={22} height={22} color={Colors.white} />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <View style={{ gap: 5 }}>
                <Text style={{ color: Colors.white }}>{item.name}</Text>
                <Text style={{ color: Colors.white }}>{item.date}</Text>
              </View>
              <Text style={{ color: Colors.white }}>${item.amount}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default SpendingBlock;

const styles = StyleSheet.create({});
