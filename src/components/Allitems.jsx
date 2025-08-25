import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Allitems = ({ data }) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.ItemContainer,
              { backgroundColor: item.stock < 20 ? '#e9b6b6ff' : '#c6e398ff' },
            ]}
          >
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.stock}</Text>
          </View>
        )}
        contentContainerStyle={{ gap: 20 }} // gap between items using contentContainerStyle
      />
    </View>
  );
};

export default Allitems;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  headingText: {
    fontWeight: '500',
    fontSize: 17,
  },
  ItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 17,
    paddingVertical: 11,
    borderRadius: 100,
  },
  itemText: {
    fontWeight: '500',
    fontSize: 16,
  },
});
