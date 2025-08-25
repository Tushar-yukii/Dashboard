import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Allitems = ({ data }) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>
    </View>
  );
};

export default Allitems;

const styles = StyleSheet.create({});
