import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const styles = {
  container: {
    alignItems: 'center',
    paddingTop: 25,
  },
  city: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

const Navigation = ({ weatherReport: { city } }) => {
  return (
    <View style={styles.container}>
      {city && <Text style={styles.city}>{city.name}</Text>}
    </View>
  );
};

const mapStateToProps = ({ weatherReport }) => ({
  weatherReport,
});

export default connect(mapStateToProps)(Navigation);
