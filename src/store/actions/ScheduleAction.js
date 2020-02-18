import { GET_RANGE, GET_WEEK } from "./types";
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/es';

//Save data of today
export const today = () => async dispatch => {
  let today = moment().weekday(0).format('YYYYMMDD');
  let week = dateWeek(await getHours(today));

  dispatch({
    type: GET_WEEK,
    payload: week
  });
};

export const getHours = async (date) => {
  console.log(date);
  const response = await axios.get(`https://draliatest.azurewebsites.net/api/availability/GetWeeklySlots/${date}`);
  console.log('HOURS', response);
  return response.data;
};

export const dateWeek = (hours) => {
  console.log(hours);
  let currentWeek = [];
  moment.locale('es');
  for (let i = 0; i <= 6; i++) {
    let dayOfTheWeek = { 'nameOfDay': '', 'dayAndMonth': '', 'hours': [] };
    dayOfTheWeek.nameOfDay = moment().weekday(i).format('dddd');
    dayOfTheWeek.dayAndMonth = moment().weekday(i).format('DD MMM');
    dayOfTheWeek.hours = hoursPerDay(hours, dayOfTheWeek.dayAndMonth);
    currentWeek.push(dayOfTheWeek);
  }
  console.log('AAA', currentWeek);
  return currentWeek;

};

const hoursPerDay = (hours, dayOfTheWeek) => {
  let hourPerDay = hours.filter(hours => moment(hours.Start).format('DD MMM') === dayOfTheWeek)
    .map(hour => moment(hour.Start).format('HH:mm'));
  return hourPerDay;
};

export const dateRange = () => dispatch => {
  let range = { 'start': moment().weekday(0).format('DD/MM/YYYY'), 'end': moment().weekday(6).format('DD/MM/YYYY') };
  dispatch({
    type: GET_RANGE,
    payload: range
  });
  console.log('RANGE', `${range.start} - ${range.end}`);
};





