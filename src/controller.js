let thermostat = new Thermostat();

let getShibe = () => {
  return $.get('https://cors-anywhere.herokuapp.com/http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true');
}

let result = getShibe()

$(document).ready(function () {
  setTimeout(() => {
    $('#shibe-space').append(`<img src="${result.responseJSON[0]}">`)
  }, 1000)


  let getTemperature = () => {
    $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', (data) => {
      $("#current-temp").text(data.main.temp + " degrees");
    })
  }

  let updateDisplay = () => {
    $(".display").text(String(thermostat.temperature));
    $("#energy-usage").text(thermostat.currentUsage());
  };

  updateDisplay();
  getTemperature();

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