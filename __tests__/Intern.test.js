const Intern = require('../lib/Intern');

test('Can get school via getSchool()', () => {
    const testValue = 'Harvard'
    const e = new Intern(testValue, testValue, testValue, testValue);

    expect(e.getSchool()).toBe(testValue)
})