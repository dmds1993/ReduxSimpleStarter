import { combineReducers } from 'redux';
import Weather from './containers/weather_list/reducer';

const rootReducer = combineReducers({
  weather: Weather
});

export default rootReducer;
