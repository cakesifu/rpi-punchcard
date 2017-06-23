const moment = require("moment");
const EventEmitter = require("events");
const debug = require("debug")("punchcard:manager");
const Pin = require('./pin');

class PinManager extends EventEmitter {
  constructor(schedule) {
    super();
    this.pins = [];
    const pins = Object.keys(schedule).map((id) => new Pin(id, schedule[id]));
    this.add(pins);
  }

  add(pin) {
    if (Array.isArray(pin)) {
      pin.forEach((pin) => this.add(pin));
      return;
    }

    debug("adding pin %s/%s(%d)", pin.id, pin.name, pin.no);

    pin.on("change", () => this.handlePinChange(pin));

    this.pins.push(pin);
  }

  start(pollingInterval = 1000) {
    this.tick();
    this.intervalId = setInterval(() => this.tick(), pollingInterval);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  tick() {
    const time = moment();
    this.pins.forEach((pin) => pin.setTime(time));
  }

  handlePinChange(pin) {
    this.emit("change", pin);
  }
}

module.exports = PinManager;
