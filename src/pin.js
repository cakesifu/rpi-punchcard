const debug = require("debug")("punchcard:pin");
const EventEmitter = require("events");
const Interval = require("./interval");

class Pin extends EventEmitter {
  constructor(id, options) {
    super();
    this.id = id;
    this.name = options.name;
    this.no = options.pin;
    this.state = null;
    this.intervalState = options.intervalState;
    debug('Pin constructor: %s/%s/%d', this.id, this.name, this.no);

    let intervals = options.intervals;
    if (!Array.isArray(intervals)) {
      intervals = [intervals];
    }

    this.intervals = intervals.map((interval) => new Interval(interval));
    debug("  intervals: ", intervals, this.intervals);
  }

  setTime(time) {
    this.lastTime = time;
    const interval = this.intervals.find((interval) => interval.includes(time));

    debug('maching interval: %s', interval);

    const nextState = interval ? this.intervalState : 1 - this.intervalState;

    if (this.state !== nextState) {
      this.state = nextState;
      this.emit("change", nextState);
    }
  }
}


module.exports = Pin;
