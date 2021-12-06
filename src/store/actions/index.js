import { ANIMAL_CHANGE, CHANGE_NUMBER, CITY_CHANGE, DISPLAY_CHANGE, FETCH_START, WEATHER_CHANGE_SUCCESS, WEATHER_CHANGE_ERROR } from "../../constants/action_types";

export const numberChange = operazione => (
  {
    type: CHANGE_NUMBER,
    payload: operazione,
  }
);

export const animalChange = animale => (
  {
    type: ANIMAL_CHANGE,
    payload: animale,
  }
);

export const displayChange = div => (
  {
    type: DISPLAY_CHANGE,
    payload: div,
  }
);

export const cityChange = city => (
  {
    type: CITY_CHANGE,
    payload: city,
  }
);

export const fetchStart = city => (
  {
    type: FETCH_START,
    payload: city,
  }
);


export const fetchSuccess = cityWeather => (
  { 
    type: WEATHER_CHANGE_SUCCESS, 
    payload: cityWeather
  }
);

export const fetchError = error => (
  { 
    type: WEATHER_CHANGE_ERROR, 
    payload: error
  }
);