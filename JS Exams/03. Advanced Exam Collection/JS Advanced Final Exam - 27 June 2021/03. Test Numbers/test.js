const assert = require('chai').assert;
const testNumbers = require('../testNumbers');

describe('testNumbers object', () => {
    describe('sumNumbers function', () => {
        it('Should return undefined When one or both inputs are not Numbers', () => {
            assert.isUndefined(testNumbers.sumNumbers('a', 5));
            assert.isUndefined(testNumbers.sumNumbers(8, 'b'));
            assert.isUndefined(testNumbers.sumNumbers('six', 'b'));
            assert.isUndefined(testNumbers.sumNumbers(true, false));
        });
        it('Should return sum toFixed(2) When both inputs are numbers', () => {
            assert.equal(testNumbers.sumNumbers(1, 4), (1 + 4));
            assert.equal(testNumbers.sumNumbers(-31, -54), ((-31) + (-54)));
            assert.equal(testNumbers.sumNumbers(5.324, 8.241), ((5.324 + 8.241).toFixed(2)));
        })
    });
    describe('numberChecher function', () => {
        it('Should throw Error When NaN', () => {
            assert.throw(() => testNumbers.numberChecker('5vs'), Error, 'The input is not a number!');
            assert.throw(() => testNumbers.numberChecker(NaN), Error, 'The input is not a number!');
            assert.throw(() => testNumbers.numberChecker(['a', 'b']), Error, 'The input is not a number!');
            assert.throw(() => testNumbers.numberChecker({}), Error, 'The input is not a number!');
        })
        it('Should return When number is even', () => {
            assert.equal(testNumbers.numberChecker(6), 'The number is even!');
            //assert.equal(testNumbers.numberChecker(-12), 'The number is even!');
            //assert.equal(testNumbers.numberChecker(4.2), 'The number is even!');
        })
        it('Should return When the number is odd', () => {
            assert.equal(testNumbers.numberChecker(5), 'The number is odd!');
            assert.equal(testNumbers.numberChecker(-9), 'The number is odd!');
        })
    })
    describe('averageSumArray function', () => {
        it('Should return average sum of array`s numbers', () => {
            let arr1 = [2, 6, 8, 5, 14];
            let sum1 = arr1.reduce((acc, x) => acc + x, 0) / arr1.length;
            let arr2 = [-14, 3, -2.98, 15];
            let sum2 = arr2.reduce((acc, x) => acc + x, 0) / arr2.length;
            let arr3 = [-0.553, -671];
            let sum3 = arr3.reduce((acc, x) => acc + x, 0) / arr3.length;

            assert.equal(testNumbers.averageSumArray(arr1), sum1);
            assert.equal(testNumbers.averageSumArray(arr2), sum2);
            assert.equal(testNumbers.averageSumArray(arr3), sum3);
        })
    })
});
