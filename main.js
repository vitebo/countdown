( function( win, doc ) {
  'use strict';
 
  var $dayOfTheWeek = doc.querySelector( '[data-js="day-of-the-week"]' );
  var $dayOfTheMonth = doc.querySelector( '[data-js="day-of-the-month"]' );
  var $hour = doc.querySelector( '[data-js="hour"]' );
  var $minutes = doc.querySelector( '[data-js="minutes"]' );
  var $seconds = doc.querySelector( '[data-js="seconds"]' );
  
  function initialize() {
    refreshTheTime();
  }
  
  function refreshTheTime() {
    var now = new Date();
    $dayOfTheWeek.innerHTML =  getTheCurrentDayOfTheWeek( now.getDay() );
    $dayOfTheMonth.innerHTML = now.getDate();
    $hour.innerHTML = now.getHours();
    $minutes.innerHTML = now.getMinutes();
    $seconds.innerHTML = now.getSeconds();
    win.setTimeout( refreshTheTime, 100 );
  }

  function getTheCurrentDayOfTheWeek( dayIndex ) {
    return getEveryDayOfTheWeek()[ dayIndex ];
  }

  function getEveryDayOfTheWeek() {
    return [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ];
  }

  initialize();
}( window, document ) );
