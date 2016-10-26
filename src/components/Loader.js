import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';

const Loader = () => (
  <View style={styles.container}>
    <Text style={styles.info}>Loading</Text>
    <ActivityIndicator size="large" />
  </View>
);

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    fontSize: 24,
    marginBottom: 10,
  },
};

export default Loader;