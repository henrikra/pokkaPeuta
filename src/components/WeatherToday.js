import React, { Component } from 'react';
import { ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import OneDayWeather from './OneDayWeather';
import Loader from './Loader';

class WeatherToday extends Component {
  constructor(props) {
    super(props);

    this.scrollTo = this.scrollTo.bind(this);
  }

  componentDidMount() {
    this.props.fetchLocation();
  }

  scrollTo(width) {
    this.refs.scrollView.scrollTo({ x: width });
  }
  

  render() {
    const { weatherReport: { forecast, city }, geolocation: { isLoading } } = this.props;
    const forecastsComponents = forecast
      .map((oneDayWeather, index) => (
        <OneDayWeather 
          key={oneDayWeather.date}
          oneDayWeather={oneDayWeather} 
          scroll={this.scrollTo} 
          index={index}
          isLast={index === forecast.length - 1}
          city={city} 
        />
      ));

    return (
      isLoading ? <Loader /> : (
        <ScrollView 
          horizontal={true}
          snapToInterval={Dimensions.get('window').width}
          snapToAlignment="start"
          decelerationRate="fast"
          ref="scrollView">
          {forecastsComponents}
        </ScrollView>
      )
    );
  }
};

const mapStateToProps = ({ geolocation, weatherReport }) => ({
  geolocation,
  weatherReport,
});

export default connect(mapStateToProps, actions)(WeatherToday);