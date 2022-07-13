import { WEATHER_DATA_RECEIVED } from "./weather.actions";

const initialData = {
  weatherDataList: [],
};

const weatherRecuder = (state = initialData, action) => {
  switch (action.type) {
    case WEATHER_DATA_RECEIVED: {
      return {
        ...state,
        weatherDataList: action.payload.weatherData,
      };
    }
    default:
      return state;
  }
};

export default weatherRecuder;
