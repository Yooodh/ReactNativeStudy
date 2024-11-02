import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { icon } from '@/constants/Icons';
import { Colors } from '@/constants/Colors';

type Props = {
  onPress: Function;
  onLongPress: Function;
  isFocused: boolean;
  label: string;
  routeName: string;
};

const TabBarButton = (props: Props) => {
  const { onPress, onLongPress, isFocused, routeName, label } = props;
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarBtn}
    >
      {icon[routeName]({
        color: isFocused ? Colors.primary : Colors.black,
      })}
      <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>{label}</Text>
    </Pressable>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  tabbarBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
});
