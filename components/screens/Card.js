import React from 'react';
// import SecondaryButton from '../Button';
import {Text, View, Image, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addtocart} from '../redux/action';

export const Card = ({food}) => {
  const state = useSelector(state => state);
  let newstate = state;
  const newItem = newstate.find(e => e.id === food.id);
  const dispatch = useDispatch();
  return (
    <View style={styles.card}>
      <Text>{food.name}</Text>
      <Image style={styles.aks} source={food.image} />
      <Text>{food.price}</Text>
      <Text>{newItem ? newItem.count : 0}</Text>
      <Button
        style={styles.btn}
        title="Add To Cart"
        onPress={() => dispatch(addtocart(food))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 100,
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aks: {
    width: 50,
    height: 50,
  },
  btn: {
    borderRadius: 7,
  },
});
