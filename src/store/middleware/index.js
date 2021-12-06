import { ajax } from 'rxjs/ajax';
import { catchError, mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { FETCH_START, WEATHER_CHANGE_ERROR } from "../../constants/action_types";
import { ofType } from 'redux-observable';
import { fetchSuccess } from '../actions';
const myAPI = "ce7e5c2a5c0382057cf868ac49f5f516";

export const loggerMiddleware = store => next => action => {
  console.log(action);
  return next(action);
}

// epic
export const fetchStartEpic = action$ => action$.pipe(
  ofType(FETCH_START),
  mergeMap(action =>
    ajax.getJSON(`http://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=${myAPI}&units=metric`).pipe(
      map(response => fetchSuccess(response)),
      catchError(error => of({
        type: WEATHER_CHANGE_ERROR,
        payload: error.message
      }))
    )
  )
);