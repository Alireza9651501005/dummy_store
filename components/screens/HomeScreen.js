import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import foods from './../consts/foods';
import {Card} from './Card';
export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={foods}
        renderItem={({item}) => {
          return <Card food={item} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
