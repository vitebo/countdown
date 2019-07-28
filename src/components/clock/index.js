import 'components/clock/clock.css';
import remainingTime from 'services/remaining-time';

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
  $remainingDays.innerHTML = remainingTime.calculateDays(now.getDay());
  $remainingTime.innerHTML = remainingTime.calculateTime(now.getHours(), now.getMinutes(), now.getSeconds());
  window.setTimeout(refreshTheTime, 100);
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

initialize();
