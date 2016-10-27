import React from 'react';
import { View, Text } from 'react-native';

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Text>Navigation</Text>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#8ba892',
    paddingHorizontal: 7,
    paddingTop: 25,
    paddingBottom: 7,
  },
};

export default Navigation;