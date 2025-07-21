import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const AddPetPages = () => {
  const { name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Pet Page</Text>
      {name && <Text style={styles.subtitle}>You loved the name: {name}</Text>}
      {/* Add your form or content for adding a pet here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AddPetPages;
