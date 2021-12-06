import { combineReducers } from "redux";
import { ANIMAL_CHANGE, CHANGE_NUMBER, CITY_CHANGE, DISPLAY_CHANGE, FETCH_START, WEATHER_CHANGE_SUCCESS, WEATHER_CHANGE_ERROR } from "../../constants/action_types";
import { combineEpics } from 'redux-observable';
import { fetchStartEpic } from "../middleware/index";

const initialState = {
  counter: 2,
  number:0,
  animal:'',
  displayed: ['numberDiv', 'animalDiv'],
  visible: [],
  weatherInfo: {},
  currentCity:'',
  error:''
};

function myReducer(state = initialState, action){
  switch(action.type){

    case CHANGE_NUMBER:
      var stateNumb = state.number;
      if(action.payload=="add"){ var number = stateNumb < 10 ? (stateNumb+1) : 10; }
      if(action.payload=="reduce"){ var number = stateNumb > 0 ? (stateNumb-1) : 0; }
      if(action.payload=="reset"){ var number = 0; }
      return {...state, number: number}    

    case ANIMAL_CHANGE:
      return {...state, animal: action.payload}  

    case CITY_CHANGE:
      return {...state, currentCity: action.payload}  

    case FETCH_START:
      return {...state, currentCity: action.payload}  

    case WEATHER_CHANGE_ERROR:
      let thisError = state.currentCity + ": " + action.payload;
      if(!state.currentCity){ thisError = "No cities selected"}
      return {...state, weatherInfo: {}, error: thisError}  

    case WEATHER_CHANGE_SUCCESS:
      return {...state, weatherInfo: action.payload, error:''}  

    case DISPLAY_CHANGE:
      const array = state.displayed;
      const index = array.indexOf(action.payload);
      if (index > -1) {
        array.splice(index, 1);
      }else{
        array.push(action.payload)
      }
      var counter = array.length;
      return {...state, displayed: array, counter: counter}    


    default:
      return state;
  }
}

export const rootEpic = combineEpics(
  fetchStartEpic
);

const rootReducer = combineReducers({
  rootReducer: myReducer
})

export default rootReducer;