const { Thermostat } = require("./thermostat")

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

        it("won't go above 25 degrees if power saving on", () => {
            let testThermostat = new Thermostat;
            for(let i = 0; i < 5; i++) {
                testThermostat.up();
            }
            expect(testThermostat.temperature).toEqual(25);
            testThermostat.up();
            expect(testThermostat.temperature).toEqual(25);
        })

        it("won't go above 32 degrees if power saving is off", () => {
            let testThermostat = new Thermostat;
            testThermostat.powerSaveOff();
            for(let i = 0; i < 12; i++) {
                testThermostat.up();
            }
            expect(testThermostat.temperature).toEqual(32);
            testThermostat.up();
            expect(testThermostat.temperature).toEqual(32);
        })
    })

    describe('down()', () => {
        it('decreases temperature by one degree', () => {
            let testThermostat = new Thermostat;
            testThermostat.down();
            expect(testThermostat.temperature).toEqual(19);
        })

        it("won't let temperature reduce lower than 10", () => {
            let testThermostat = new Thermostat;
            for(let i = 0; i < 10; i++) {
                testThermostat.down();
            }
            expect(testThermostat.temperature).toEqual(10)
            testThermostat.down();
            expect(testThermostat.temperature).toEqual(10)
        })
    })

    describe('isPowerSave', () => {
        it('initializes as true', () => {
            let testThermostat = new Thermostat;
            expect(testThermostat.isPowerSave).toEqual(true)
        })

        it('can be switched off', () => {
            let testThermostat = new Thermostat;
            testThermostat.powerSaveOff();
            expect(testThermostat.isPowerSave).toEqual(false);
        })

        it('can be switched back on', () => {
            let testThermostat = new Thermostat;
            testThermostat.powerSaveOff();
            expect(testThermostat.isPowerSave).toEqual(false);
            testThermostat.powerSaveOn();
            expect(testThermostat.isPowerSave).toEqual(true)
        })
    })

    describe('reset()', () => {
        it('brings temperature back to 20', () => {
            let testThermostat = new Thermostat;
            for(let i = 0; i < 10; i++) {
                testThermostat.down();
            }
            expect(testThermostat.temperature).toEqual(10);
            testThermostat.reset();
            expect(testThermostat.temperature).toEqual(20);
        })
    })

    describe('currentUsage()', () => {
        it('returns medium-usage between 18 & 25', () => {
            let testThermostat = new Thermostat;
            for(let i = 0; i < 2; i++) {
                testThermostat.down();
            }
            for(let i = 0; i < 8; i++) {
                expect(testThermostat.currentUsage()).toEqual('medium-usage');
            }
        })

        it('returns low usage below 18', () => {
            let testThermostat = new Thermostat;
            for(let i = 0; i < 3; i++) {
                testThermostat.down()
            }
            for(let i = 0; i < 10; i++) {
                expect(testThermostat.currentUsage()).toEqual('low-usage');
                testThermostat.down();
            }
        })

        it('returns high usage > 25', () => {
            let testThermostat = new Thermostat;
            testThermostat.powerSaveOff();
            for(let i = 0; i < 6; i++) {
                testThermostat.up()
            }
            for(let i = 0; i < 5; i++) {
                expect(testThermostat.currentUsage()).toEqual('high-usage')
                testThermostat.up()
            }
        })
    })
})