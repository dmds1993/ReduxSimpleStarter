import { FETCH_WEATHER } from './actions'

const Weather = (state = [], action) => {
    switch (action.type) {
        case FETCH_WEATHER:
        console.log(state)
            return [
                action.payload.data,
                ...state
            ]
        break;
        default:

    }
    return state;
}

export default Weather;
