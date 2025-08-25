import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const CreateScreens = () => {
  const [itemName, setitemName] = useState('');
  const [stockAmt, setstockAmt] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an item name..."
         placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={item => setitemName(item)} // two way binding 
      />

      <TextInput
        placeholder="Enter an Stock..."
         placeholderTextColor="#999"
        style={styles.input}
        value={stockAmt}
        onChangeText={item => setstockAmt(item)}
      />

      <Pressable style = {styles.addButton}>
        <Text style={styles.textBtn}>ADD ITEM IN STOCK</Text>
      </Pressable>
    </View>
  );
};

export default CreateScreens;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '5%',
    gap : 14
  },
  input: {
    borderWidth: 1.5,
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 20,
    borderColor : "#cbbdbdff"
  },
  addButton : {
    backgroundColor : "#acbdf5ff",
    paddingHorizontal : 15,
    paddingVertical : 10,
    justifyContent : "center",
    alignItems : "center",
    borderRadius : 15
  },
  textBtn : {
    color : "white",
    fontWeight : "500",
    fontSize : 15
  }
});
