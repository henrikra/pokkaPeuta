import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const Navigation = ({ weatherReport: { city } }) => {
  return (
    <View style={styles.container}>
      {city && <Text>{city.name}, {city.country}</Text>}
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

const mapStateToProps = ({ weatherReport }) => ({
  weatherReport,
});

export default connect(mapStateToProps)(Navigation);