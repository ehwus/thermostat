class Thermostat {
    constructor() {
        this.temperature = 20;
    }

    up = function() {
        this.temperature += 1;
    }

    down = function() {
        this.temperature -= 1;
    }
}

module.exports = Thermostat;