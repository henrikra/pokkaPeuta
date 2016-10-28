import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const Navigation = ({ weatherReport: { city } }) => {
  return (
    <View style={styles.container}>
      {city && <Text style={styles.city}>{city.name}</Text>}
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 25,
    paddingBottom: 7,
  },
  city: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

const mapStateToProps = ({ weatherReport }) => ({
  weatherReport,
});

export default connect(mapStateToProps)(Navigation);