import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../Button';

export default function OnBroad({navigation}) {
  return (
    <View style={styles.container}>
      <Text>this is online store</Text>
      <PrimaryButton
        title="Go Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 250,
    marginHorizontal:50,
    backgroundColor: 'lightgreen',
  },
});
