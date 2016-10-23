'use strict'

/* eslint-env mocha */

import { expect } from 'chai'
import rehype from 'rehype'
import wordSpan from './'

describe('wordspan-function', function () {
  // Pass in String
  it('The give text should wrap with spans including articles', function () {
    expect(rehype().use(wordSpan).process('<h1>In the Heart of the Jungle</h1>')
      .toString()).to.equal('<h1><span class="word p">In</span><span class="space"> </span><span class="word a">the</span><span class="space"> </span><span class="word">Heart</span><span class="space"> </span><span class="word p">of</span><span class="space"> </span><span class="word a">the</span><span class="space"> </span><span class="word">Jungle</span></h1>')
  })
})
