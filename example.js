'use strict'

// Dependencies:
var rehype = require('rehype');
var wordspan = require('./dist');

// Transform:
var file = rehype().use(wordspan).process('<h1>In the Heart of the Jungle</h1>')

// Yields:
console.log('html', file.toString())
