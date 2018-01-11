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
    refreshTheWindow();
  }

  function refreshTheWindow() {
    refreshTheTime();
    win.setTimeout( refreshTheWindow, 100 );
  }
  
  function refreshTheTime() {
    var now = new Date();
    refreshClock( now.getHours(), now.getMinutes(), now.getSeconds() );
    $remainingTime.innerHTML = createRemainingTime( now.getHours(), now.getMinutes(), now.getSeconds() );
    $remainingDays.innerHTML = createRemainingDays( now.getDay() );
  }

  function refreshClock( hours, minutes, seconds ) {
    var hourDeg = hours * ( 360 / ( ( AMOUNT_OF_HOURS_IN_THE_DAY + 1 ) / 2 ) );
    var minutesDeg = minutes * ( 360 / AMOUNT_OF_MINUTES_IN_THE_HOUR );
    var secondsDeg = seconds * ( 360 / AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE );
    $clockArrowHour.style.transform = 'rotate(' + hourDeg + 'deg)';
    $clockArrowMinute.style.transform = 'rotate(' + minutesDeg + 'deg)';
    $clockArrowSecond.style.transform = 'rotate(' + secondsDeg + 'deg)';
  }
 
  function createRemainingTime() {
    return Array.prototype.reduce.call( arguments, function( total, number, index ) {
      if( index === 1 ) total = transformInTwoDigits( AMOUNT_OF_HOURS_IN_THE_DAY - total );
      if( index === 2 ) return total + ':' + transformInTwoDigits( AMOUNT_OF_MINUTES_IN_THE_HOUR - number );
      if( index === 3 ) return total + ':' + transformInTwoDigits( AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE - number );
      return total + ':' + transformInTwoDigits( AMOUNT_OF_MINUTES_IN_THE_HOUR - number );
    } );
  }

  function createRemainingDays( day ) {
    return transformInTwoDigits( getRemainingDays( day ) );
  }

  function transformInTwoDigits( number ) {
    return number < 10 ? '0'+number : number;
  }

  function getRemainingDays( currentDayOfTheWeek ) {
    return AMOUNT_OF_DAYS_IN_THE_WEEK - ( currentDayOfTheWeek + 1 );
  }

  function getRemainingHours( currentHour ) {
    return AMOUNT_OF_HOURS_IN_THE_DAY - currentHour;
  }

  function getRemainingMinutes( currentMinute ) {
    return AMOUNT_OF_MINUTES_IN_THE_HOUR - currentMinute;
  }

  function getRemainingSeconds( currentSecond ) {
    return AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE - currentSecond;
  }

  initialize();
}( window, document ) );
