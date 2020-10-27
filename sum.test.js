const { test, expect } = require('@jest/globals')
const suma=require('./sum')

test("sumar dos numeros", ()=> {
    expect(suma(10,10)).toBe(20)
})