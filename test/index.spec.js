import assert from 'assert'
import { add, multiply, divide, subs } from '../src/math.js'


describe('Test math functions', () => {
    it('The function add must return a addition of two numbers', () => {
        const result = add(5, 3)

        assert.equal(result, 8)

    })
    it('The function subs must return a substraction of two numbers', () => {
        const result = subs(5, 3)

        assert.equal(result, 2)

    })
    it('The function multiply must return a multiplication of two numbers', () => {
        const result = multiply(5, 3)

        assert.equal(result, 15)

    })
    it('The function divide must return a division of two numbers', () => {
        const result = divide(4, 2)

        assert.equal(result, 2)

    })


})


