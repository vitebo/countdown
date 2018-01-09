( function( win, doc ) {
  'use strict';
  
  var AMOUNT_OF_DAYS_IN_THE_WEEK = 7;
  var AMOUNT_OF_HOURS_IN_THE_DAY = 23;
  var AMOUNT_OF_MINUTES_IN_THE_HOUR = 59;
  var AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE = 60;

  var $remainingDays = doc.querySelector( '[data-js="remaining-days"]' );
  var $remainingHours = doc.querySelector( '[data-js="remaining-hours"]' );
  var $remainingMinutes = doc.querySelector( '[data-js="remaining-minutes"]' );
  var $remainingSeconds = doc.querySelector( '[data-js="remaining-seconds"]' );
  
  function initialize() {
    refreshTheTime();
  }
  
  function refreshTheTime() {
    var now = new Date();
    $remainingDays.innerHTML = getRemainingDays( now.getDay() );
    $remainingHours.innerHTML = getRemainingHours( now.getHours() );
    $remainingMinutes.innerHTML = getRemainingMinutes( now.getMinutes() );
    $remainingSeconds.innerHTML = getRemainingSeconds( now.getSeconds() );
    win.setTimeout( refreshTheTime, 100 );
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
