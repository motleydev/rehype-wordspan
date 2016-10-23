/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module rehype-wordwrap
 * @fileoverview Test suite for `rehype-wordwrap`.
 */

'use strict'

/* eslint-env mocha */

import { expect } from 'chai'
import rehype from 'rehype'
import wordSpan from './'

describe('wordspan-function', function () {
  // Pass in String
  it('The give text should wrap with spans including articles', function () {
    expect(rehype().use(wordSpan).process('<h1>Hello to the World!</h1>')
      .toString()).to.equal('<h1><span class="word">Hello</span><span class="space"> </span><span class="word">to</span><span class="space"> </span><span class="word article">the</span><span class="space"> </span><span class="word">World!</span></h1>')
  })
})
