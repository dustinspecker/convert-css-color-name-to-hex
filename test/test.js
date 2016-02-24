/* global describe, it */
'use strict'
import convertCssColorNameToHex from '../lib/'
import {expect} from 'chai'

describe('convert-css-color-name-to-hex', () => {
  it('should throw an error when name is not passed', () => {
    const test = () => convertCssColorNameToHex()

    expect(test).to.throw(TypeError, /Expected a string/)
  })

  it('should throw an error when name is null', () => {
    const test = () => convertCssColorNameToHex(null)

    expect(test).to.throw(TypeError, /Expected a string/)
  })

  it('should throw an error when name is undefined', () => {
    const test = () => convertCssColorNameToHex(undefined)

    expect(test).to.throw(TypeError, /Expected a string/)
  })

  it('should throw an error when name is a numer', () => {
    const test = () => convertCssColorNameToHex(1)

    expect(test).to.throw(TypeError, /Expected a string/)
  })

  it('should throw an error when name is an object', () => {
    const test = () => convertCssColorNameToHex({})

    expect(test).to.throw(TypeError, /Expected a string/)
  })

  it('should throw an error when name is an array', () => {
    const test = () => convertCssColorNameToHex([])

    expect(test).to.throw(TypeError, /Expected a string/)
  })

  it('should return name if not a valid CSS color name', () => {
    expect(convertCssColorNameToHex('BATMAN')).to.eql('BATMAN')
    expect(convertCssColorNameToHex('spiderman')).to.eql('spiderman')
  })

  it('should return hex if valid CSS color name', () => {
    expect(convertCssColorNameToHex('aliceblue')).to.eql('#f0f8ff')
    expect(convertCssColorNameToHex('WHITE')).to.eql('#ffffff')
  })
})
