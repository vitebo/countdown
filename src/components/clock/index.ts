import 'components/clock/clock.css';
import {
  AMOUNT_OF_DAYS_IN_THE_WEEK,
  AMOUNT_OF_HOURS_IN_THE_DAY,
  AMOUNT_OF_MINUTES_IN_THE_HOUR,
  AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE
} from 'utils/time';

export default new class Clock {
  private $clockArrowHour: HTMLElement;
  private $clockArrowMinute: HTMLElement;
  private $clockArrowSecond: HTMLElement;

  public constructor() {
    this.$clockArrowHour = document.querySelector('[data-js="clock-arrow-hour"]');
    this.$clockArrowMinute = document.querySelector('[data-js="clock-arrow-minute"]');
    this.$clockArrowSecond = document.querySelector('[data-js="clock-arrow-second"]');
    this.updateTheTime();
  }

  private updateTheTime(): void {
    const now = new Date();
    this.refreshClock(now.getHours(), now.getMinutes(), now.getSeconds());
    window.setTimeout(() => this.updateTheTime(), 100);
  }

  private refreshClock(hours: number, minutes: number, seconds: number): void {
    this.createRotate(this.$clockArrowHour, this.getTheAngleOfTheHour(hours));
    this.createRotate(this.$clockArrowMinute, this.getTheAngleOfTheMinute(minutes));
    this.createRotate(this.$clockArrowSecond, this.getAngleOfTheSecond(seconds));
  }

  private createRotate($element: HTMLElement, deg: number): void {
    $element.style.transform = `rotate( ${deg}deg )`;
  }

  private getTheAngleOfTheHour(hours: number): number {
    return this.getAngle(hours, AMOUNT_OF_HOURS_IN_THE_DAY / 2);
  }

  private getTheAngleOfTheMinute(minutes: number): number {
    return this.getAngle(minutes, AMOUNT_OF_MINUTES_IN_THE_HOUR);
  }

  private getAngleOfTheSecond(seconds: number): number {
    return this.getAngle( seconds, AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE );
  }

  private getAngle(value: number, total: number): number {
    return value * ( 360 / total );
  }
}
