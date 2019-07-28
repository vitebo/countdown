const AMOUNT_OF_DAYS_IN_THE_WEEK = 7;
const AMOUNT_OF_HOURS_IN_THE_DAY = 23;
const AMOUNT_OF_MINUTES_IN_THE_HOUR = 59;
const AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE = 60;

export default new class RemainingTime {
  calculateDays(day) {
    const remainingDays = AMOUNT_OF_DAYS_IN_THE_WEEK - (day + 1);
    return this.transformInTwoDigits(remainingDays);
  }

  calculateHours(hours) {
    const remainingHours = AMOUNT_OF_HOURS_IN_THE_DAY - hours;
    return this.transformInTwoDigits(remainingHours);
  }

  calculateMinutes(minutes) {
    const remainingMinutes = AMOUNT_OF_MINUTES_IN_THE_HOUR - minutes;
    return this.transformInTwoDigits(remainingMinutes);
  }

  calculateSeconds(seconds) {
    const remainingSeconds = AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE - seconds;
    return this.transformInTwoDigits(remainingSeconds);
  }

  calculateTime(hours, minutes, seconds) {
    const reamingTime = this.getReamingTime( hours, minutes, seconds );
    return reamingTime.reduce( ( result, value ) => `${result} : ${value}`);
  }

  getReamingTime( currentHour, currentMinute, currentSecond ) {
    const time = [];
    time.push( this.calculateHours( currentHour ) );
    time.push( this.calculateMinutes( currentMinute ) );
    time.push( this.calculateSeconds( currentSecond ) );
    return time;
  }

  transformInTwoDigits( number ) {
    return number < 10 ? `0${number}` : number;
  }
}();
