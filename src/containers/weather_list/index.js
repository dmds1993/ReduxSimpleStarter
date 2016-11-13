import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/chart';
import GoogleMap from '../../components/google_map';

class WeatherList extends Component {

    renderWeather (cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.pressure);
        const lat = cityData.city.coord.lat;
        const lon = cityData.city.coord.lon;
        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="red"/></td>
                <td><Chart data={pressure} color="blue"/></td>
                <td><Chart data={humidities} color="green"/></td>
            </tr>
        );
    }

    render () {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (k)</th>
                        <th>Pressure (hPA)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({weather}) => {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);
