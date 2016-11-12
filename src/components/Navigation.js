import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 60,
  },
  city: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: 24,
  },
});

const Navigation = ({ weatherReport: { city } }) => (
  <View style={styles.container}>
    {city && <Text style={styles.city}>{city.name}</Text>}
  </View>
);

Navigation.propTypes = {
  weatherReport: PropTypes.shape({}),
};

const mapStateToProps = ({ weatherReport }) => ({
  weatherReport,
});

export default connect(mapStateToProps)(Navigation);
