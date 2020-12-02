class Thermostat {
    constructor() {
        this.temperature = 20;
        this.isPowerSave = true;
    }

    up = function() {
        if (this.isPowerSave && this.temperature < 25) {
            this.temperature++;
            return;
        }

        if (!this.isPowerSave && this.temperature < 32) {
            this.temperature++;
            return;
        }
    }

    down = function() {
        if (this.temperature > 10) { this.temperature--; };
    }

    powerSaveOff = function() {
        this.isPowerSave = false;
    }

    powerSaveOn = function() {
        this.isPowerSave = true;
    }

    reset = function() {
        this.temperature = 20;
    }
}

module.exports = Thermostat;