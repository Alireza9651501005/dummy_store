import React from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
export default function CartScreen() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  let sum = 0;
  return (
    <View>
      {!state.length ? (
        <Text>at this time cart is empty</Text>
      ) : (
        <FlatList
          data={state}
          renderItem={({item}) => (
            <View style={styles.container}>
              <Text>{item.name}</Text>
              <Image style={styles.aks} source={item.image} />
              <Text>{item.price}</Text>
              <Text>{item.count}</Text>
            </View>
          )}
        />
      )}
      {state.map(pro => {
        sum += pro.count * pro.price;
        return null;
      })}
      <Text>Total Price: {sum}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  aks: {
    width: 50,
    height: 50,
  },
});
