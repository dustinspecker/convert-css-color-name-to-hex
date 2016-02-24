'use strict'
import cssColorNames from 'css-color-names'
import isCssColorName from 'is-css-color-name'

/**
 * Convert a CSS color name to hex
 * @param {String} name - name to convert to hex
 * @throws {TypeError} - when name is not a string
 * @return {String} - hex if valid CSS color name or name if not valid CSS color name
 */
module.exports = function (name) {
  if (typeof name !== 'string') {
    throw new TypeError('Expected a string')
  }

  return isCssColorName(name) ? cssColorNames[name.toLowerCase()] : name
}
