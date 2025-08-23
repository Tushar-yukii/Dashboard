import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const HomeScreen = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.texttitle}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.btntxt}>All Items</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.btntxt}>Low Stock</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.btntxt}>Create</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  conatiner: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fcf3f3ff',
    padding: '5%',
  },
  texttitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#362212ff',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 12,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 50,
    borderColor: '#1c3d1cff',
    borderWidth: 1,
  },
  btntxt: {
    color: '#848a0fff',
    fontSize: 14,
  },
});
