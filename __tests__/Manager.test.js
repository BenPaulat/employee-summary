const Manager = require('../lib/Manager');

test('Can get Office Number via getOfficeNumber()', () => {
    const testValue = '9876'
    const e = new Manager(testValue, testValue, testValue, testValue);

    expect(e.getOfficeNumber()).toBe(testValue)
})