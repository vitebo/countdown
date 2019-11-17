import {
  AMOUNT_OF_DAYS_IN_THE_WEEK,
  AMOUNT_OF_HOURS_IN_THE_DAY,
  AMOUNT_OF_MINUTES_IN_THE_HOUR,
  AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE,
} from 'utils/time';

export default new class RemainingTime {
  private $remainingDays: HTMLElement;
  private $remainingTime: HTMLElement;

  public constructor() {
    this.$remainingDays = document.querySelector('[data-js="remaining-days"]');
    this.$remainingTime = document.querySelector('[data-js="time"]');
    this.updateTheTime();
  }

  private updateTheTime(): void {
    const now = new Date();
    this.$remainingDays.innerHTML = this.calculateDays(now.getDay());
    this.$remainingTime.innerHTML = this.calculateTime(
      now.getHours(),
      now.getMinutes(),
      now.getSeconds(),
    );
    window.setTimeout(() => this.updateTheTime(), 100);
  }

  private calculateDays(day: number): string {
    const remainingDays = AMOUNT_OF_DAYS_IN_THE_WEEK - (day + 1);
    return this.transformInTwoDigits(remainingDays);
  }

  private calculateHours(hours: number): string {
    const remainingHours = AMOUNT_OF_HOURS_IN_THE_DAY - hours;
    return this.transformInTwoDigits(remainingHours);
  }

  private calculateMinutes(minutes: number): string {
    const remainingMinutes = AMOUNT_OF_MINUTES_IN_THE_HOUR - minutes;
    return this.transformInTwoDigits(remainingMinutes);
  }

  private calculateSeconds(seconds: number): string {
    const remainingSeconds = AMOUNT_OF_THE_SECONDS_IN_THE_MINUTE - seconds;
    return this.transformInTwoDigits(remainingSeconds);
  }

  private calculateTime(hours: number, minutes: number, seconds: number): string {
    const reamingTime = this.getReamingTime(hours, minutes, seconds);
    return reamingTime.reduce((result, value) => `${result} : ${value}`);
  }

  private getReamingTime(
    currentHour: number,
    currentMinute: number,
    currentSecond: number,
  ): string[] {
    const time = [];
    time.push(this.calculateHours(currentHour));
    time.push(this.calculateMinutes(currentMinute));
    time.push(this.calculateSeconds(currentSecond));
    return time;
  }

  private transformInTwoDigits(number: number): string {
    return number < 10 ? `0${number}` : `${number}`;
  }
};
