/**
 * @author Jesse David Martin
 * @copyright 2016 Jesse Martin
 * @license MIT
 * @module rehype:wordspan
 * @fileoverview Wrap all words of a watched type with a span class - currently just htags.
 * Classes are added to conjunctions, articles and prepositions.
 */

/* Special thanks to Titus Wormer @wooorm for the boilerplate code */

/* eslint-env commonjs */

/* Dependencies */
import visit from 'unist-util-visit'

/**
 * Attacher.
 *
 * @param {Unified} origin - Origin processor.
 * @param {Object} [options={}] - Configuration.
 * @return {Function} - Transformer.
 */

const attacher = (origin, options) => {
  const watchWordTypes = {
    htags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    blockquote: ['blockquote']
  }

  const watchWords = {
    conj: ['for', 'and', 'nor', 'but', 'or', 'yet', 'so'],
    articles: ['an', 'a', 'the', 'or', 'some'],
    preps: ['of', 'in', 'to', 'for', 'with', 'on', 'at',
    'from', 'by', 'about', 'as', 'into', 'like', 'through',
    'after', 'over', 'between', 'out', 'against', 'during',
    'without', 'before', 'under', 'around', 'among']
  }

  return function (tree) {
    visit(tree, 'element', (node, index, parent) => {
      if (watchWordTypes['htags'].indexOf(node.tagName) === -1) {
        return
      }

      let target = node.children[0]
      let {value} = target

      node.children = []
      delete target.value

      let words = value.split(' ')

      words.forEach((word, index) => {
        let classes = ['word']

        watchWords.conj.indexOf(word) !== -1 ? classes.push('cc') : null
        watchWords.articles.indexOf(word) !== -1 ? classes.push('a') : null
        watchWords.preps.indexOf(word) !== -1 ? classes.push('p') : null

        node.children.push({
          type: 'element',
          tagName: 'span',
          'properties': {
            className: classes
          },
          children: [
            {
              type: 'text',
              value: word
            }
          ]
        })

        if (index < words.length - 1) {
          node.children.push({
            type: 'element',
            tagName: 'span',
            'properties': {
              className: ['space']
            },
            children: [
              {
                type: 'text',
                value: ' '
              }
            ]
          })
        }
      })
    })
  }
}

/* Expose. */
module.exports = attacher
