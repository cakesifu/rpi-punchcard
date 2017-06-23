class Inteval {
  constructor(str) {
    const [ start, stop ] = str.split(/\s*-\s*/);
    this.start = this.parseTime(start);
    this.stop = this.parseTime(end);
  }

  parseTime(str) {
    const [ hour, min = 0, sec = 0] = str.split(/\s*:\s*/);
    return hour * 3600 + min * 60 + sec;
  }
}

module.exports = Interval;
