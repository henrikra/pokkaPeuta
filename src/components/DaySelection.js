import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import SvgUri from 'react-native-svg-uri';

const CurrentWeather = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      horizontal={true}>
      <View style={styles.listItem}>
        <SvgUri style={styles.listItemIcon} width="75" height="75" source={require('../images/Cloud.svg')} />
        <Text style={styles.listItemText}>29.10</Text>
      </View>
      <View style={styles.listItem}>
        <SvgUri style={styles.listItemIcon} width="75" height="75" source={require('../images/Cloud.svg')} />
        <Text style={styles.listItemText}>29.10</Text>
      </View>
      <View style={styles.listItem}>
        <SvgUri style={styles.listItemIcon} width="75" height="75" source={require('../images/Cloud.svg')} />
        <Text style={styles.listItemText}>29.10</Text>
      </View>
      <View style={styles.listItem}>
        <SvgUri style={styles.listItemIcon} width="75" height="75" source={require('../images/Cloud.svg')} />
        <Text style={styles.listItemText}>29.10</Text>
      </View>
      <View style={styles.listItem}>
        <SvgUri style={styles.listItemIcon} width="75" height="75" source={require('../images/Cloud.svg')} />
        <Text style={styles.listItemText}>29.10</Text>
      </View>
    </ScrollView>
  )
}

const styles = {
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 25,
  },
  listItem: {
    alignItems: 'center',
    marginTop: -20,
    width: 105,
  },
  listItemText: {
    color: '#ffffff',
    fontWeight: 'bold',
    marginTop: -15,
  },
  listItemIcon: {
    // marginTop: -10,
  }
};

export default CurrentWeather;