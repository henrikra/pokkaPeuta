import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const Navigation = ({ weatherReport: { city } }) => {
  return (
    <View style={styles.container}>
      {city && <Text style={styles.city}>{city.name}, {city.country}</Text>}
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
  city: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 20,
    fontWeight: 'bold',
  },
};

const mapStateToProps = ({ weatherReport }) => ({
  weatherReport,
});

export default connect(mapStateToProps)(Navigation);