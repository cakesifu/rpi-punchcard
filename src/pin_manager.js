const Pin = require('./pin');

class PinManager {
  constructor(schedule) {
    Object.keys(schedule).map((id) => new Pin(id, config.schedule[id]));
  }

  add(pins) {
    if (Array.isArray(pins)) {
      pins.forEach((pin) => this.add(pin));
      return;
    }

    this.pins.push(pins);
  }
}

module.exports = PinManager;
