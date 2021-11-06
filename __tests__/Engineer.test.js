const Engineer = require('../lib/Engineer');

test('Can get Github via getGithub()', () => {
    const testValue = 'DavesGithub'
    const e = new Engineer(testValue);

    expect(e.getGithub()).toBe(testValue)
})