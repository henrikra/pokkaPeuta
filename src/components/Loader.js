import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    fontSize: 24,
    marginBottom: 10,
    backgroundColor: 'transparent',
    color: '#ffffff',
  },
});

const Loader = () => (
  <View style={styles.container}>
    <Text style={styles.info}>Loading</Text>
    <ActivityIndicator size="large" color="#ffffff" />
  </View>
);

export default Loader;
