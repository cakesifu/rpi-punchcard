class Interval {
  constructor(str) {
    const [ start, stop ] = str.split(/\s*-\s*/);
    this.start = this.parseTime(start);
    this.stop = this.parseTime(stop);
  }

  parseTime(str) {
    const [ hour, min = 0, sec = 0] = str.split(/\s*:\s*/);
    return this.computeTstamp(hour, min, sec);
  }

  includes(time) {
    const { hours, minutes, seconds } = time.toObject();
    const tstamp = this.computeTstamp(hours, minutes, seconds);
    return tstamp >= this.start && tstamp <= this.stop;
  }

  computeTstamp(hour, minute = 0, second = 0) {
    return parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(second);
  }

  toString() {
    return `[ ${this.start} - ${this.stop} ]`;
  }
}

module.exports = Interval;
