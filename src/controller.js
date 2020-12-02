let thermostat = new Thermostat();

$(document).ready(function () {
  let updateDisplay = () => {
    $(".display").text(String(thermostat.temperature));
    $("#energy-usage").text(thermostat.currentUsage());
  };

  updateDisplay();

  $("#up").click(() => {
    thermostat.up();
    updateDisplay();
  });

  $("#down").click(() => {
    thermostat.down();
    updateDisplay();
  });

  $("#power-save-on").click(() => {
    thermostat.powerSaveOn();
    updateDisplay();
  });

  $("#power-save-off").click(() => {
    thermostat.powerSaveOff();
    updateDisplay();
  });
});
