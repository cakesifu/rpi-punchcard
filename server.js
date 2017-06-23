const rpio = require('rpio');
const config = require("./config");
const PingManager = require("./src/pin_manager");


rpio.init({
        mapping: 'gpio',
        gpiomem: false,
});
console.log('rpio initialized');

const pinManager = new PingManager(config.schedule);

console.log('pin manager created');

pinManager.pins.forEach((pin) => {
  rpio.open(pin.no, rpio.OUTPUT);
});

pinManager.on("change", (pin) => {
  console.log("pin changed: ", pin.name, "=>", pin.state);
  rpio.write(pin.no, pin.state ? rpio.HIGH : rpio.LOW);
});

pinManager.start(1000);

