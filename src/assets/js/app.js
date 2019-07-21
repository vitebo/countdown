import '../css/style.css';

( function( win, doc ) {
  'use strict';
  
  var AMOUNT_OF_DAYS_IN_THE_WEEK = 7;
  var AMOUNT_OF_HOURS_IN_THE_DAY = 23;
  var AMOUNT_OF_MINUTES_IN_THE_HOUR = 59;
  var AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE = 60;

  var $remainingDays = doc.querySelector( '[data-js="remaining-days"]' );
  var $remainingTime = doc.querySelector( '[data-js="time"]' );
  
  var $clockArrowHour = doc.querySelector( '[data-js="clock-arrow-hour"]' );
  var $clockArrowMinute = doc.querySelector( '[data-js="clock-arrow-minute"]' );
  var $clockArrowSecond = doc.querySelector( '[data-js="clock-arrow-second"]' );

  function initialize() {
    refreshTheTime();
  }

  function refreshTheTime() {
    var now = new Date();
    refreshClock( now.getHours(), now.getMinutes(), now.getSeconds() );
    $remainingDays.innerHTML = createRemainingDays( now.getDay() );
    $remainingTime.innerHTML = createRemainingTime( now.getHours(), now.getMinutes(), now.getSeconds() );
    win.setTimeout( refreshTheTime, 100 );
  }

  function refreshClock( hours, minutes, seconds ) {
    createRotate( $clockArrowHour, getTheAngleOfTheHour( hours ) );
    createRotate( $clockArrowMinute, getTheAngleOfTheMinute( minutes ) );
    createRotate( $clockArrowSecond, getAngleOfTheSecond( seconds ) );
  }

  function createRotate( $element, deg ) {
    return $element.style.transform = 'rotate( '+ deg +'deg )';
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
    var reamingTime = getReamingTime( hours, minutes, seconds );
    return reamingTime.reduce( function( result, value ) {
      return result + ':' + value;
    } );
  }

  function transformInTwoDigits( number ) {
    return number < 10 ? '0'+number : number;
  }

  function getRemainingDays( currentDayOfTheWeek ) {
    return AMOUNT_OF_DAYS_IN_THE_WEEK - ( currentDayOfTheWeek + 1 );
  }

  function getReamingTime( currentHour, currentMinute, currentSecond ) {
    var time = [];
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
}( window, document ) );
