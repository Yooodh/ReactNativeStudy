import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductType } from '@/types/type';
import { Stack } from 'expo-router';
import Header from '@/components/Header';
import ProductItem from '@/components/ProductItem';

type Props = {};

const HomeScreen = (props: Props) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    // const URL = `http://localhost:8000/products`;
    // const URL = `http://10.0.2.2:8000/products`;

    // ADD
    const URL = `http://192.168.45.155:8000/products`;

    const response = await axios.get(URL);

    // console.log(response.data);
    setProducts(response.data);
    setIsLoading(false);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <FlatList
          data={products}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ index, item }) => <ProductItem item={item} />}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
});
