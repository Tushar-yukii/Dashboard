import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Allitems from './Allitems';
import CreateScreen from './CreateScreens';

const data = [
  { id: 1, name: 'wheat', stock: 6, unit: 'KG' },
  { id: 2, name: 'Rice', stock: 45, unit: 'KG' },
  { id: 3, name: 'Oats', stock: 33, unit: 'KG' },
  { id: 4, name: 'Corn', stock: 64, unit: 'KG' },
  { id: 5, name: 'Pulse', stock: 25, unit: 'KG' },
  { id: 6, name: 'Basmati Rice', stock: 29, unit: 'KG' },
];

const HomeScreen = () => {
  const [view, setView] = useState(0);
  return (
    <View style={styles.conatiner}>
      <Text style={styles.texttitle}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 ? { backgroundColor: 'green' } : null,
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
            view === 1 ? { backgroundColor: 'green' } : null,
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
            view === 2 ? { backgroundColor: 'green' } : null,
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
      {view === 1 && <Allitems />}
      {view === 2 && <CreateScreen />}
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
