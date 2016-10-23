// Dependencies:
import rehype from 'rehype'
import wordspan from './index.js'

// Transform:
let file = rehype().use(wordspan).process('<h1>Hello to the World!</h1>')

// Yields:
console.log('html', file.toString())
