import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';

const CreateScreens = ({ data, setdata }) => {
  const [itemName, setitemName] = useState('');
  const [stockAmt, setstockAmt] = useState('');
  const [isEdit, setisEdit] = useState(false)


  const AddHandler = () => {
    const newItem = {
      id: Date.now(), // new unique data using .now
      name: itemName,
      stock: stockAmt,
    };

    setdata([...data, newItem]); // purali value ko pass karna ka liya
    setitemName('');
    setstockAmt('');
  };

  const deleteItemHandler = id => {
    setdata(data.filter(item => item.id !== id));
  };

  const editItemHandler = () =>{
    
  }

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

      <Pressable style={styles.addButton} onPress={() => AddHandler()}>
        <Text style={styles.textBtn}>ADD ITEM IN STOCK</Text>
      </Pressable>

      <View style={{ marginTop: 10 }}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>All Items int the stock</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.ItemContainer,
                {
                  backgroundColor: item.stock < 20 ? '#e9b6b6ff' : '#c6e398ff',
                },
              ]}
            >
              <Text style={styles.itemText}>{item.name}</Text>
              <View style={{ flexDirection: 'row', gap: 25 }}>
                <Text style={styles.itemText}>{item.stock}</Text>
                <Pressable onPress={() => editItemHandler(item)}>
                  <Text style={styles.itemText}>Edit</Text>
                </Pressable>

                <Pressable onPress={() => deleteItemHandler(item.id)}>
                  <Text style={styles.itemText}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 20 }} // gap between items using contentContainerStyle
        />
      </View>
    </View>
  );
};

export default CreateScreens;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '5%',
    gap: 14,
  },
  input: {
    borderWidth: 1.5,
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 20,
    borderColor: '#cbbdbdff',
  },
  addButton: {
    backgroundColor: '#acbdf5ff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  textBtn: {
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  headingText: {
    fontWeight: '500',
    fontSize: 17,
    marginVertical: 10,
  },
  ItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    paddingVertical: 11,
    borderRadius: 50,
  },
  itemText: {
    fontWeight: '500',
    fontSize: 11,
  },
});
