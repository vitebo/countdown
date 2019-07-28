import 'components/clock/clock.css';

const AMOUNT_OF_DAYS_IN_THE_WEEK = 7;
const AMOUNT_OF_HOURS_IN_THE_DAY = 23;
const AMOUNT_OF_MINUTES_IN_THE_HOUR = 59;
const AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE = 60;

export default new class Clock {
  constructor() {
    this.$clockArrowHour = document.querySelector('[data-js="clock-arrow-hour"]');
    this.$clockArrowMinute = document.querySelector('[data-js="clock-arrow-minute"]');
    this.$clockArrowSecond = document.querySelector('[data-js="clock-arrow-second"]');
    this.updateTheTime();
  }

  updateTheTime() {
    const now = new Date();
    this.refreshClock(now.getHours(), now.getMinutes(), now.getSeconds());
    window.setTimeout(() => this.updateTheTime(), 100);
  }

  refreshClock(hours, minutes, seconds) {
    this.createRotate(this.$clockArrowHour, this.getTheAngleOfTheHour(hours));
    this.createRotate(this.$clockArrowMinute, this.getTheAngleOfTheMinute(minutes));
    this.createRotate(this.$clockArrowSecond, this.getAngleOfTheSecond(seconds));
  }

  createRotate($element, deg) {
    return $element.style.transform = `rotate( ${deg}deg )`;
  }

  getTheAngleOfTheHour(hours) {
    return this.getAngle(hours, AMOUNT_OF_HOURS_IN_THE_DAY / 2);
  }

  getTheAngleOfTheMinute(minutes) {
    return this.getAngle(minutes, AMOUNT_OF_MINUTES_IN_THE_HOUR);
  }

  getAngleOfTheSecond(seconds) {
    return this.getAngle( seconds, AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE );
  }

  getAngle(value, total) {
    return value * ( 360 / total );
  }
}
