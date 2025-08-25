import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Allitems from './Allitems';
import CreateScreen from './CreateScreens';

const HomeScreen = () => {
  const [data, setdata] = useState([
    { id: 1, name: 'wheat', stock: 6, unit: 'KG' },
    { id: 2, name: 'Rice', stock: 45, unit: 'KG' },
    { id: 3, name: 'Oats', stock: 33, unit: 'KG' },
    { id: 4, name: 'Corn', stock: 16, unit: 'KG' },
    { id: 5, name: 'Pulse', stock: 25, unit: 'KG' },
    { id: 6, name: 'Basmati Rice', stock: 16, unit: 'KG' },
    { id: 7, name: 'Lentils', stock: 13, unit: 'KG' },
  ]);
  const [view, setView] = useState(0);
  return (
    <View style={styles.conatiner}>
      <Text style={styles.texttitle}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 ? { backgroundColor: '#c2b156ff' } : null,
          ]}
          onPress={() => setView(0)}
        >
          <Text style={[styles.btntxt, view === 0 ? { color: 'white' } : null]}>
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 1 ? { backgroundColor: '#c2b156ff' } : null,
          ]}
          onPress={() => setView(1)}
        >
          <Text style={[styles.btntxt, view === 1 ? { color: 'white' } : null]}>
            Low Stock
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 2 ? { backgroundColor: '#c2b156ff' } : null,
          ]}
          onPress={() => setView(2)}
        >
          <Text style={[styles.btntxt, view === 2 ? { color: 'white' } : null]}>
            Create
          </Text>
        </Pressable>
      </View>
      {view === 0 && <Allitems data={data} />}
      {/* pasing proops  */}
      {view === 1 && <Allitems data={data.filter(item => item.stock < 20)} />}
      {/* filter use for filter items from all items */}
      {view === 2 && <CreateScreen data={data} setdata={setdata}/>}
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
    borderColor: '#c2b156ff',
    borderWidth: 1,
  },
  btntxt: {
    color: '#c2b156ff',
    fontSize: 14,
  },
});
