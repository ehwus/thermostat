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

    currentUsage = function() {
        if (this.temperature >= 18 && this.temperature <= 25) {
            return 'medium-usage';
        } else if (this.temperature < 18) {
            return 'low-usage';
        } else {
            return 'high-usage';
        }
    }
}
