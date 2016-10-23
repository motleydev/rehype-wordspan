# Rehype-Wordspan

[![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov] [![Js Standard Style][js-standard-style-badge]][js-standard-style] 
[![Commitizen friendly][commitizen-friendly-badge]][commitizen-friendly]

<!--lint disable heading-increment list-item-spacing-->

Span wrapping all words of a header element with rudimentary parts of speech classification.

## Installation

[npm][npm-install]:

```bash
npm install rehype-wordspan
```

## Usage

Dependencies:

```javascript
var rehype = require('rehype');
var wordSpan = require('rehype-rehype-wordspan');
```

Given:

```javascript
var file = rehype().use(wordSpan).process('<h1>In the Heart of the Jungle</h1>');
```

Returns:

```html
<h1><span class="word">In</span><span class="space"> </span><span class="word a">the</span><span class="space"> </span><span class="word">Heart</span><span class="space"> </span><span class="word p">of</span><span class="space"> </span><span class="word a">the</span><span class="space"> </span><span class="word">Jungle</span></h1>
```

## API

### `rehype.use(wordSpan[, options])`

At the moment there are no accepted options, but soon I will add the ability to specify which kind of html tag to catch and which classes to be applied.

All words receive a `word` class and all spaces receive a `space` class.

For now, `cc` is added to conjunctions. `a` is added to aticles. `p` is added to the 20 most common preopositions (the ones you are likely not using for artistic effect.) For example, `Running to the car` will wrap "to" as a preposition. But, `Underneath the old Pickup` will not wrap "Underneath."

Don't agree? That's what the issues are for. :)

## License

[MIT][license] © [Jesse Martin][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/motleydev/rehype-wordspan.svg

[travis]: https://travis-ci.org/motleydev/rehype-wordspan

[codecov-badge]: https://img.shields.io/codecov/c/github/motleydev/rehype-wordspan.svg

[codecov]: https://codecov.io/github/motleydev/rehype-wordspan

[codecov]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[js-standard-style-badge]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[js-standard-style]: http://standardjs.com/index.html

[commitizen-friendly-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-friendly]: https://github.com/commitizen

[npm-install]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://motleydev.com

[rehype]: https://github.com/wooorm/rehype
