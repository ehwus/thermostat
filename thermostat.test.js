const Thermostat = require('./thermostat')

describe('Thermostat', () => {
    it('initializes with a temperature of 20', () => {
        let testThermostat = new Thermostat
        expect(testThermostat.temperature).toEqual(20)
    })

    describe('up()', () => {
        it('increments temperature up by one degree', () => {
            let testThermostat = new Thermostat;
            testThermostat.up();
            expect(testThermostat.temperature).toEqual(21);
        })
    })

    describe('down()', () => {
        it('decreases temperature by one degree', () => {
            let testThermostat = new Thermostat;
            testThermostat.down();
            expect(testThermostat.temperature).toEqual(19);
        })
    })
})