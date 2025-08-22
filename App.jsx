import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './src/components/Home';

const App = () => {
  return (
    <View style={styles.co}>
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  co: {
    color: 'white',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    alignItems: 'center',
  },
});
