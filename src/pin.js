class Pin {
  constructor(id, options) {
    this.id = id;

    let intevals = options.intervals;
    if (Array.isArray(intervals)) {
      intervals = [intervals];
    }

    this.intervals = intervals.map((interval) => new Interval(options.interval));
  }

  setTime(time) {
    // TODO check if I need to change my state
  }
}


module.exports = Pin;
