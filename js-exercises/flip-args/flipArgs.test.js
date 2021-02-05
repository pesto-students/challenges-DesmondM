// write your own test cases
const { TestScheduler } = require('jest')
const flipArgs = require('./flipArgs')

test('Reverses argurments', ()=>{
    expect(
        flipArgs(1, 2)
    ).toEqual([2, 1])

})

test('Reverses argurments', ()=>{
    expect(
        flipArgs('a', 'b', 'c')
    ).toEqual(['c', 'b', 'a'])

})

test('Reverses argurments', ()=>{
    expect(
        flipArgs(['a'], ['b'], ['c'])
    ).toEqual([['c'], ['b'], ['a']])

})