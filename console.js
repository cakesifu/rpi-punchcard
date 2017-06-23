const config = require("./config");
const PingManager = require("./src/pin_manager");

const pinManager = new PingManager(config.schedule);

pinManager.on("change", (pin) => {
  console.log("pin changed", pin.name, pin.state);
});

pinManager.start(1000);
