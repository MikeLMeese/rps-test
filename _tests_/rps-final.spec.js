// Importing objects and functions to be tested
const { hands, Player1, Player2, getHand } = require('../rps-final');
// Test using toEqual()
describe('Player 1 name', () => {
    test('Player 1 name should be Ya boi', () => {
        const name = Player1.name;
        expect(name).toEqual('Ya boi');
    });
});
describe('Player 2 name', () => {
    test('Player 2 name should be Bill Nye', () => {
        const name = Player2.name;
        expect(name).toEqual('Bill Nye');
    });
});
// Test using toHaveLength()
describe('hands array length', () => {
    test('hands array length should equal 3', () => {
        expect(hands).toHaveLength(3);
    });
});
// Test using toBeTruthy()
describe('getHand function', () => {
    test('getHand function should be truthy', () => {
        expect(getHand()).toBeTruthy();
    });
});
// New function to test for toHaveBeenCalled()
function volumeOfCylinder(r, h) {
    return Math.PI*Math.pow(r, 2)*h;
};
describe('volumeOfCylinder function', () => {
    test('find volume of cylinder with radius 6 and height 8', () => {
        const radius = jest.fn();
        const radiusLength = radius(6);
        volumeOfCylinder(radiusLength, 8);
        expect(radius).toHaveBeenCalled();
    });
});
// New function to test for toHaveReturned()
describe('Year Function', () => {
    test('What is the current year?', () => {
        let year = jest.fn(() => 2022);
        const currentYear = year(2022);
        expect(year).toHaveReturned();
    });
});