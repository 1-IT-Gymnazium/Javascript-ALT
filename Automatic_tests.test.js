const sum = require('./Automatic_test.js');

//jest je testovaci framework, ktery umoznuje testovat kod v javascriptu

test('soucet 1 + 2 je 3', () => {
    expect(sum(1, 2)).toBe(3);
});