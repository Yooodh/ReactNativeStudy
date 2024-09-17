import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  label: string;
  checked: boolean;
  onPress: () => void;
};

const CheckBox = ({ label, checked, onPress }: Props) => {
  const rnAnimatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withTiming(
        checked ? 'rgba(239, 142, 82, 0.1)' : 'transparent',
        { duration: 150 }
      ),
      borderColor: withTiming(checked ? Colors.tint : Colors.black, {
        duration: 150,
      }),
      paddingLeft: 16,
      paddingRight: checked ? 10 : 16,
    };
  });

  return (
    <Animated.View style={[styles.container, rnAnimatedContainerStyle]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.iconWrapper}>
        <AntDesign name='checkcircle' size={14} color={Colors.tint}></AntDesign>
      </View>
    </Animated.View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderBlockColor: Colors.black,
    borderRadius: 32,
    paddingVertical: 8,
    // paddingHorizontal: 16,
  },
  label: {
    fontSize: 14,
    color: Colors.black,
  },
  iconWrapper: {
    marginLeft: 8,
    height: 14,
    width: 14,
  },
});
