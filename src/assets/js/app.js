import '../css/style.css';

const AMOUNT_OF_DAYS_IN_THE_WEEK = 7;
const AMOUNT_OF_HOURS_IN_THE_DAY = 23;
const AMOUNT_OF_MINUTES_IN_THE_HOUR = 59;
const AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE = 60;

const $remainingDays = document.querySelector( '[data-js="remaining-days"]' );
const $remainingTime = document.querySelector( '[data-js="time"]' );

const $clockArrowHour = document.querySelector( '[data-js="clock-arrow-hour"]' );
const $clockArrowMinute = document.querySelector( '[data-js="clock-arrow-minute"]' );
const $clockArrowSecond = document.querySelector( '[data-js="clock-arrow-second"]' );

function initialize() {
  refreshTheTime();
}

function refreshTheTime() {
  const now = new Date();
  refreshClock( now.getHours(), now.getMinutes(), now.getSeconds() );
  $remainingDays.innerHTML = createRemainingDays( now.getDay() );
  $remainingTime.innerHTML = createRemainingTime( now.getHours(), now.getMinutes(), now.getSeconds() );
  window.setTimeout( refreshTheTime, 100 );
}

function refreshClock( hours, minutes, seconds ) {
  createRotate( $clockArrowHour, getTheAngleOfTheHour( hours ) );
  createRotate( $clockArrowMinute, getTheAngleOfTheMinute( minutes ) );
  createRotate( $clockArrowSecond, getAngleOfTheSecond( seconds ) );
}

function createRotate( $element, deg ) {
  return $element.style.transform = `rotate( ${deg}deg )`;
}

function getTheAngleOfTheHour( hours ) {
  return getAngle( hours, AMOUNT_OF_HOURS_IN_THE_DAY / 2 );
}

function getTheAngleOfTheMinute( minutes ) {
  return getAngle( minutes, AMOUNT_OF_MINUTES_IN_THE_HOUR );
}

function getAngleOfTheSecond( seconds ) {
  return getAngle( seconds, AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE );
}

function getAngle( value, total ) {
  return value * ( 360 / total );
}

function createRemainingDays( day ) {
  return transformInTwoDigits( getRemainingDays( day ) );
}

function createRemainingTime( hours, minutes, seconds ) {
  const reamingTime = getReamingTime( hours, minutes, seconds );
  return reamingTime.reduce( ( result, value ) => `${result} : ${value}`);
}

function transformInTwoDigits( number ) {
  return number < 10 ? `0${number}` : number;
}

function getRemainingDays( currentDayOfTheWeek ) {
  return AMOUNT_OF_DAYS_IN_THE_WEEK - ( currentDayOfTheWeek + 1 );
}

function getReamingTime( currentHour, currentMinute, currentSecond ) {
  const time = [];
  time.push( getRemainingHours( currentHour ) );
  time.push( getRemainingMinutes( currentMinute ) );
  time.push( getRemainingSeconds( currentSecond ) );
  return time;
}

function getRemainingHours( currentHour ) {
  return transformInTwoDigits( AMOUNT_OF_HOURS_IN_THE_DAY - currentHour );
}

function getRemainingMinutes( currentMinute ) {
  return transformInTwoDigits( AMOUNT_OF_MINUTES_IN_THE_HOUR - currentMinute );
}

function getRemainingSeconds( currentSecond ) {
  return transformInTwoDigits( AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE - currentSecond );
}

initialize();
